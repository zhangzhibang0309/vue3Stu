// diff处理整体逻辑
const patchChildren: PatchChildrenFn = (
    n1,
    n2,
    container,
    anchor,
    parentComponent,
    parentSuspense,
    isSVG,
    slotScopeIds,
    optimized = false
) => {
    const c1 = n1 && n1.children
    const prevShapeFlag = n1 ? n1.shapeFlag : 0
    const c2 = n2.children

    const { patchFlag, shapeFlag } = n2
    // fast path
    if (patchFlag > 0) {
        // 有key 调用patchKeyedChildren
        if (patchFlag & PatchFlags.KEYED_FRAGMENT) {
            // this could be either fully-keyed or mixed (some keyed some not)
            // presence of patchFlag means children are guaranteed to be arrays
            patchKeyedChildren(
                c1 as VNode[],
                c2 as VNodeArrayChildren,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized
            )
            return
            // 无key patchUnkeyedChildren
        } else if (patchFlag & PatchFlags.UNKEYED_FRAGMENT) {
            // unkeyed
            patchUnkeyedChildren(
                c1 as VNode[],
                c2 as VNodeArrayChildren,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized
            )
            return
        }
    }

    // children has 3 possibilities: text, array or no children.
    if (shapeFlag & ShapeFlags.TEXT_CHILDREN) {
        // text children fast path
        if (prevShapeFlag & ShapeFlags.ARRAY_CHILDREN) {
            unmountChildren(c1 as VNode[], parentComponent, parentSuspense)
        }
        if (c2 !== c1) {
            hostSetElementText(container, c2 as string)
        }
    } else {
        if (prevShapeFlag & ShapeFlags.ARRAY_CHILDREN) {
            // prev children was array
            if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
                // two arrays, cannot assume anything, do full diff
                patchKeyedChildren(
                    c1 as VNode[],
                    c2 as VNodeArrayChildren,
                    container,
                    anchor,
                    parentComponent,
                    parentSuspense,
                    isSVG,
                    slotScopeIds,
                    optimized
                )
            } else {
                // no new children, just unmount old
                unmountChildren(c1 as VNode[], parentComponent, parentSuspense, true)
            }
        } else {
            // prev children was text OR null
            // new children is array OR null
            if (prevShapeFlag & ShapeFlags.TEXT_CHILDREN) {
                hostSetElementText(container, '')
            }
            // mount new if array
            if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
                mountChildren(
                    c2 as VNodeArrayChildren,
                    container,
                    anchor,
                    parentComponent,
                    parentSuspense,
                    isSVG,
                    slotScopeIds,
                    optimized
                )
            }
        }
    }
}
// 无key
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
// can be all-keyed or mixed
// 有key
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
// patch
const patch: PatchFn = (
    n1,
    n2,
    container,
    anchor = null,
    parentComponent = null,
    parentSuspense = null,
    isSVG = false,
    slotScopeIds = null,
    optimized = false
) => {
    // patching & not same type, unmount old tree
    if (n1 && !isSameVNodeType(n1, n2)) {
        anchor = getNextHostNode(n1)
        unmount(n1, parentComponent, parentSuspense, true)
        n1 = null
    }

    if (n2.patchFlag === PatchFlags.BAIL) {
        optimized = false
        n2.dynamicChildren = null
    }

    const { type, ref, shapeFlag } = n2
    switch (type) {
        case Text:
            processText(n1, n2, container, anchor)
            break
        case Comment:
            processCommentNode(n1, n2, container, anchor)
            break
        case Static:
            if (n1 == null) {
                mountStaticNode(n2, container, anchor, isSVG)
            } else if (__DEV__) {
                patchStaticNode(n1, n2, container, isSVG)
            }
            break
        case Fragment:
            processFragment(
                n1,
                n2,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized
            )
            break
        default:
            if (shapeFlag & ShapeFlags.ELEMENT) {
                processElement(
                    n1,
                    n2,
                    container,
                    anchor,
                    parentComponent,
                    parentSuspense,
                    isSVG,
                    slotScopeIds,
                    optimized
                )
            } else if (shapeFlag & ShapeFlags.COMPONENT) {
                processComponent(
                    n1,
                    n2,
                    container,
                    anchor,
                    parentComponent,
                    parentSuspense,
                    isSVG,
                    slotScopeIds,
                    optimized
                )
            } else if (shapeFlag & ShapeFlags.TELEPORT) {
                ; (type as typeof TeleportImpl).process(
                    n1 as TeleportVNode,
                    n2 as TeleportVNode,
                    container,
                    anchor,
                    parentComponent,
                    parentSuspense,
                    isSVG,
                    slotScopeIds,
                    optimized,
                    internals
                )
            } else if (__FEATURE_SUSPENSE__ && shapeFlag & ShapeFlags.SUSPENSE) {
                ; (type as typeof SuspenseImpl).process(
                    n1,
                    n2,
                    container,
                    anchor,
                    parentComponent,
                    parentSuspense,
                    isSVG,
                    slotScopeIds,
                    optimized,
                    internals
                )
            } else if (__DEV__) {
                warn('Invalid VNode type:', type, `(${typeof type})`)
            }
    }

    // set ref
    if (ref != null && parentComponent) {
        setRef(ref, n1 && n1.ref, parentSuspense, n2)
    }
}
