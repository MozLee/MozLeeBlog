---
title: Blogging Like a Hacker
lang: en-US
description: 为什么是你的爱神的箭卡三方接口拉水电费不合理卡的爆发力卡
---


# Matrix
<i id ='Matrix'></i>
> MatrixSDK的一级主类。

---
## Options

|参数 | 类型 | 必填|默认 | 说明 | 
|:-: | :-: | :-:|:-: | :-: | :-:|
plugins| Object | false| | 插件入口 | 

plugins options

|参数 | 类型 | 必填|默认 | 说明 | 
|:-: | :-: | :-:|:-: | :-: | :-:|
appId|String|true||接入的appId，由矩阵服务提供|
appName|String|true||接入名称|
openLog|Bool|true||是否打开日志|
methods| Object | false| | 插入到Matrix的方法或属性 | 
通过plugins.methods的方法或属性将从instance.bus访问到。

示例
``` javascript
const MX = new Matrix({
    appId:'XES_Matrix'
    plugins:{
        methods:{
            getTutorName(){
                return "MozLee"
            }
        }
    },
    openLog:true
})

let tutorName = MX.bus.getTutorName()
```

*instance* methods

- [actGetInfo() ⇒ Promise](#actGetInfo)
- [initCoreData() ⇒ Promise](#initCoreData)
- [connectVue() ⇒ Function](#connectVue)


---
## instance method
<i id='actGetInfo'></i>
### actGetInfo(options) ⇒ Promise`<res>`
描述：获取矩阵用户基础信息。

类型： instance method of [Matrix](#Matrix)


|参数 | 类型 | 必填|默认 | 说明 | 
|:-: | :-: | :-:|:-: | :-: | :-:|
id| String/Int | true| | 教师ID/IMEI | 
onSuccess| Function |false| ()=>{} |成功的回调函数| 
onError| Function |false|()=>{} |失败的回调函数| 
示例:
``` javascript
await MX.actGetInfo()
```
---

<i id='initCoreData'></i>
### initCoreData(options) ⇒ Promise`<res>`
初始化核心数据

类型： instance method of [Matrix](#Matrix)
|参数 | 类型 | 必填|默认 | 说明 | 
|:-: | :-: | :-:|:-: | :-: | :-:|
onSuccess| Function |false| ()=>{} |成功的回调函数| 
onError| Function |false|()=>{} |失败的回调函数| 
示例
``` javascript
await MX.initCoreData()
```
---

<i id='connectVue'></i>
### connectVue(options) ⇒ Object `vue plugin`
快速连接VUE,使得SDK中许多获取数据函数可直接用于视图渲染，并且在数据变化时响应。
所有可以用于直接渲染的方法将带有🍀标识。
类型： instance method of [Matrix](#Matrix)

|参数 | 类型 | 必填|默认 | 说明 | 
|:-: | :-: | :-:|:-: | :-: | :-:|
name| String |false| "$MX" |命名空间| 
示例
``` javascript
// 建议在main.js 实例化Matrix，并将示例挂载到Vue
import Vue from 'Vue'
import Matrix from '@xes/matrixsdk'
const MX = new Matrix()
Vue.use(MX.connectVue({name:'$MX'}))
```

可渲染函数在Vue 组件中的使用示例
``` javascript
<html>
  <div>
    <ul>
       <li v-for="item in list()" :key="item.username">{{item.getShowName()}}</li>    
    </ul>
  </div>
</html>
<script>
   export default{
       methods:{
           list(){
               return this.$MX.Contact.getDialogueList()
           }
       }
   }
</script>
```


<h2 style="color:red">使用 connectVue 的重要提示</h2>
切勿直接操作SDK中，非act开头API返回的原始数据。
为保证视图层的高效渲染，所有输出对象均为原始对象。
如果进行直接修改，会到导致 Vue Render Infiniti （无限更新）。

如有简单数据需求，可以简单map出所需对象的属性。

``` javascript
<script>
   export default{
       methods:{
           changeName(){
               let user = this.$MX.find('mozlee')
               // 千万不要这么做
               user.name = 'GG'   
           },
       }
   }
</script>
```

---




