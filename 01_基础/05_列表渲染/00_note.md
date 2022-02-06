# vue3-diff算法源码简单理解

## diff算法是什么？

 diff算法是vue在处理组件渲染产生改变时进行的一系列操作，想要搞明白首先要对Virtual DOM（虚拟DOM）以及Virtual Nodes（虚拟节点）有所了解。

### VDOM为何物？

 众所周知vue渲染页面使用模板语法，这些模板在被被渲染的时候，他并不会直接被解析成最终的真实DOM，而是会先产生一个虚拟DOM。这样做**其一**，能提升DOM在改变时代码的执行效率；**其二**可以解决一些跨平台相关的问题。

 虚拟DOM其实就是用JavaScript对你的dom的一个描述，用对象实现，记录几个参数，比如类型等等。

## VNodes又是什么？

 VNode很好理解，就是VDOM里面的某一个标签，某一个节点，VNodes就是节点的集合。

## 从一个插入案例讲起diff算法

```html
<!-- 现有一dom结构，如下，['a', 'b', 'c', 'd']，然后现在从中间插入一f -->
<ul>
    <li>a</li>
    <li>b</li>
    <li>c</li>
    <li>d</li>
</ul>
<!-- 插入f之后，最终dom变成下面这样，描述diff算法在这中间做了什么 -->
<ul>
     <li>a</li>
     <li>b</li>
     <li>f</li>
     <li>c</li>
     <li>d</li>
</ul>
```

 现在先来猜测这一种情况diff可能会怎么做。

 **首先**，当然是会产生一个新的虚拟DOM，然后每个节点去比较，然后决定怎么处理新的VDOM，这个过程对应源码里面的patch。最简单的处理方式就是每个li的新旧虚拟节点一一比较，一样的略过，不一样的直接把最新的给替换上去，然后遍历完之后，剩余的该添加添加，该删除删除。这应该是最好理解的一种方式，算是暴力法吧。

 这个过程我们可以模拟一下：

![](https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20220124165835.png)

 **然后**，我们试着优化一下，有些时候很多新旧VNodes其实是相同的，只不过因为顺序原因，导致没有跟之前的对上，比如上面这个例子，第三个旧Vnode是c，但是新Vnode第四个才是c，这就让c被重复修改，浪费性能，我们只要解决这个问题，性能就可以提升一大截。这个问题解决起来是比较有难度的，下面直接根据vue3的源码来深入研究一下diff算法到底在干什么。

 这里先提一嘴，在优化的时候vue用了一个自定义属性，也就是key，让内部来决定自己应该按照哪种方式来diff。

## 透过源码看diff

 通过上面的解释，大家应该能感觉到了，diff主要是有两种操作，第一种就是在没有绑定key的情况下，就是按照第一种猜测来进行,所以效率很慢,第二种方式就是有key的时候,源码内部会对比较做很多处理.

### patchUnkeyedChildren

 这种方式几乎不用解释，就是上面的第一条猜测。只是简单的一一比较罢了。

```typescript
// vue3 diff算法 patchUnkeyedChildren 
const patchUnkeyedChildren = (
    c1: VNode[], // 旧的nodes['a','b','c','d']
    c2: VNodeArrayChildren, // 新的nodes['a','b','f','c','d']
    container: RendererElement,
    anchor: RendererNode | null,
    parentComponent: ComponentInternalInstance | null,
    parentSuspense: SuspenseBoundary | null,
    isSVG: boolean,
    slotScopeIds: string[] | null,
    optimized: boolean
) => {
    c1 = c1 || EMPTY_ARR
    c2 = c2 || EMPTY_ARR
    const oldLength = c1.length
    const newLength = c2.length
    // 取长度小的那个
    const commonLength = Math.min(oldLength, newLength)
    let i
    for (i = 0; i < commonLength; i++) {
        const nextChild = (c2[i] = optimized
            ? cloneIfMounted(c2[i] as VNode)
            : normalizeVNode(c2[i]))
        patch(
            c1[i],
            nextChild,
            container,
            null,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
        )
    }
    // 如果旧的nodes等多
    if (oldLength > newLength) {
        // remove old
        // 移除多余的节点
        unmountChildren(
            c1,
            parentComponent,
            parentSuspense,
            true,
            false,
            commonLength
        )
        // 如果新的nodes更多
    } else {
        // mount new
        // 挂载新的节点
        mountChildren(
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
            commonLength
        )
    }
}
```

### patchKeyedChildren

而如果检测到有key的话，那就比较复杂了。

1. 第一步：
  
  1. sync from start
    
  2. (a b) c d
    
  3. (a b) f c d
    

 先从前面开始比较，直到遇到第一个不相同的

2. 第二步：
  
  1. sync from end
    
  2. a b (c d)
    
  3. a b f (c d)
    
  
   然后从后面开始，直到遇到第一个不相同的
  
3. 第三步,根据指针索引```i > e1 || i > e2```,都被判断为dom节点增加,也就是需要amount
  
  ![](https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/45309CC0350FB5F95601F5725A176936.png)
  
4. 第四步,根据指针索引`i <= e1 && i > e2`,都被判断为dom节点减少,也就是需要unmount
  
  ![](https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/8ED7F01425FA9F5DF9DEAA1CA999B831.png)
  
5. 第五步，是处理最复杂的情况,就是在中间这一段有相同的Nodes，但是顺序十分混乱。
  
  ![](https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/6991422B3AD2B864B8FAC3BC0EE15194.png)
  

```typescript
// vue3 diff算法 patchKeyedChildren 
const patchKeyedChildren = (
    c1: VNode[],
    c2: VNodeArrayChildren,
    container: RendererElement,
    parentAnchor: RendererNode | null,
    parentComponent: ComponentInternalInstance | null,
    parentSuspense: SuspenseBoundary | null,
    isSVG: boolean,
    slotScopeIds: string[] | null,
    optimized: boolean
) => {
    let i = 0
    const l2 = c2.length
    let e1 = c1.length - 1 // prev ending index
    let e2 = l2 - 1 // next ending index

    // 1. sync from start
    // (a b) c
    // (a b) d e
    while (i <= e1 && i <= e2) {
        const n1 = c1[i]
        const n2 = (c2[i] = optimized
            ? cloneIfMounted(c2[i] as VNode)
            : normalizeVNode(c2[i]))
        if (isSameVNodeType(n1, n2)) {
            patch(
                n1,
                n2,
                container,
                null,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized
            )
        } else {
            break
        }
        i++
    }

    // 2. sync from end
    // a (b c)
    // d e (b c)
    while (i <= e1 && i <= e2) {
        const n1 = c1[e1]
        const n2 = (c2[e2] = optimized
            ? cloneIfMounted(c2[e2] as VNode)
            : normalizeVNode(c2[e2]))
        if (isSameVNodeType(n1, n2)) {
            patch(
                n1,
                n2,
                container,
                null,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized
            )
        } else {
            break
        }
        e1--
        e2--
    }

    // 3. common sequence + mount
    // (a b)
    // (a b) c
    // i = 2, e1 = 1, e2 = 2
    // (a b)
    // c (a b)
    // i = 0, e1 = -1, e2 = 0
    if (i > e1) {
        if (i <= e2) {
            const nextPos = e2 + 1
            const anchor = nextPos < l2 ? (c2[nextPos] as VNode).el : parentAnchor
            while (i <= e2) {
                patch(
                    null,
                    (c2[i] = optimized
                        ? cloneIfMounted(c2[i] as VNode)
                        : normalizeVNode(c2[i])),
                    container,
                    anchor,
                    parentComponent,
                    parentSuspense,
                    isSVG,
                    slotScopeIds,
                    optimized
                )
                i++
            }
        }
    }

    // 4. common sequence + unmount
    // (a b) c
    // (a b)
    // i = 2, e1 = 2, e2 = 1
    // a (b c)
    // (b c)
    // i = 0, e1 = 0, e2 = -1
    else if (i > e2) {
        while (i <= e1) {
            unmount(c1[i], parentComponent, parentSuspense, true)
            i++
        }
    }

    // 5. unknown sequence
    // [i ... e1 + 1]: a b [c d e] f g
    // [i ... e2 + 1]: a b [e d c h] f g
    // i = 2, e1 = 4, e2 = 5
    else {
        const s1 = i // prev starting index
        const s2 = i // next starting index

        // 5.1 build key:index map for newChildren
        const keyToNewIndexMap: Map<string | number, number> = new Map()
        for (i = s2; i <= e2; i++) {
            const nextChild = (c2[i] = optimized
                ? cloneIfMounted(c2[i] as VNode)
                : normalizeVNode(c2[i]))
            if (nextChild.key != null) {
                if (__DEV__ && keyToNewIndexMap.has(nextChild.key)) {
                    warn(
                        `Duplicate keys found during update:`,
                        JSON.stringify(nextChild.key),
                        `Make sure keys are unique.`
                    )
                }
                keyToNewIndexMap.set(nextChild.key, i)
            }
        }

        // 5.2 loop through old children left to be patched and try to patch
        // matching nodes & remove nodes that are no longer present
        let j
        let patched = 0
        const toBePatched = e2 - s2 + 1
        let moved = false
        // used to track whether any node has moved
        let maxNewIndexSoFar = 0
        // works as Map<newIndex, oldIndex>
        // Note that oldIndex is offset by +1
        // and oldIndex = 0 is a special value indicating the new node has
        // no corresponding old node.
        // used for determining longest stable subsequence
        const newIndexToOldIndexMap = new Array(toBePatched)
        for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0

        for (i = s1; i <= e1; i++) {
            const prevChild = c1[i]
            if (patched >= toBePatched) {
                // all new children have been patched so this can only be a removal
                unmount(prevChild, parentComponent, parentSuspense, true)
                continue
            }
            let newIndex
            if (prevChild.key != null) {
                newIndex = keyToNewIndexMap.get(prevChild.key)
            } else {
                // key-less node, try to locate a key-less node of the same type
                for (j = s2; j <= e2; j++) {
                    if (
                        newIndexToOldIndexMap[j - s2] === 0 &&
                        isSameVNodeType(prevChild, c2[j] as VNode)
                    ) {
                        newIndex = j
                        break
                    }
                }
            }
            if (newIndex === undefined) {
                unmount(prevChild, parentComponent, parentSuspense, true)
            } else {
                newIndexToOldIndexMap[newIndex - s2] = i + 1
                if (newIndex >= maxNewIndexSoFar) {
                    maxNewIndexSoFar = newIndex
                } else {
                    moved = true
                }
                patch(
                    prevChild,
                    c2[newIndex] as VNode,
                    container,
                    null,
                    parentComponent,
                    parentSuspense,
                    isSVG,
                    slotScopeIds,
                    optimized
                )
                patched++
            }
        }

        // 5.3 move and mount
        // generate longest stable subsequence only when nodes have moved
        const increasingNewIndexSequence = moved
            ? getSequence(newIndexToOldIndexMap)
            : EMPTY_ARR
        j = increasingNewIndexSequence.length - 1
        // looping backwards so that we can use last patched node as anchor
        for (i = toBePatched - 1; i >= 0; i--) {
            const nextIndex = s2 + i
            const nextChild = c2[nextIndex] as VNode
            const anchor =
                nextIndex + 1 < l2 ? (c2[nextIndex + 1] as VNode).el : parentAnchor
            if (newIndexToOldIndexMap[i] === 0) {
                // mount new
                patch(
                    null,
                    nextChild,
                    container,
                    anchor,
                    parentComponent,
                    parentSuspense,
                    isSVG,
                    slotScopeIds,
                    optimized
                )
            } else if (moved) {
                // move if:
                // There is no stable subsequence (e.g. a reverse)
                // OR current node is not among the stable sequence
                if (j < 0 || i !== increasingNewIndexSequence[j]) {
                    move(nextChild, container, anchor, MoveType.REORDER)
                } else {
                    j--
                }
            }
        }
    }
}
```

## 总结

 diff算法没有那么难，简单的就是分为两种情况，有无key，无key操作十分简单，有key的话便是分为五步，分别处理不同情况。

 这篇文章仅仅是在理解层面去讨论vue3的diff算法，但是想了解更多细节的话，还是要去GitHub把vue3源码拉下来仔细看看。