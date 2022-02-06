# computed和methods的区别
    二者的区别主要体现在重复调用的时候，计算属性只会调用一次，然后生成缓存。而对于methods来
便会重复调用。    
```
        <!-- computed -->
        <h2>{{FullName}}</h2>
        <h2>{{FullName}}</h2>
        <h2>{{FullName}}</h2>
        <h2>{{FullName}}</h2>
        <!-- methods -->
        <h2>{{getFullName()}}</h2>
        <h2>{{getFullName()}}</h2>
        <h2>{{getFullName()}}</h2>
        <h2>{{getFullName()}}</h2>
```
![](https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20220124190942.png)