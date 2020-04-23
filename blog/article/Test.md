
# Self
<i id="Self"></i>

> Self类,可以查询用户自己的相关信息。

---

*instance*
function
- [☘ getInfo() ⇒ Object 获取用户信息](#getInfo)
- [☘ getWxId() ⇒ String 获取用户微信id](#getWxId)
- [actRestartService() ⇒  Promise`<res>` 重启服务](#actRestartService)
- [actGetQrCode() ⇒ Promise`<res>` 获取二维码](#actGetQrCode)

---
## instance method

<i id='getInfo'></i>
### ☘ Self.getInfo() ⇒ Object

获取用户的信息，如头像、昵称、二维码等等。

类型： instance method of [Self](#Self)


示例
``` javascript
let info = MX.Self.getInfo()
```
---
<i id='getWxId'></i>
### ☘ Self.getWxId() ⇒ String

获取用户的微信ID
类型： instance method of [Self](#Self)


示例
``` javascript
let userWxId = MX.Self.getWxId()
```
---
<i id='actRestartService'></i>
### Self.actRestartService(options) ⇒ Promise`<res>`

重启手机服务

类型： instance method of  [Self](#Self)

参数 | 类型 | 必填|默认 | 说明 | 
:-: | :-: | :-:|:-: | :-: | :-:
onSuccess| Function |false| ()=>{} |成功的回调函数| 
onError| Function |false|()=>{} |失败的回调函数| 

示例
``` javascript
await MX.Self.actRestartService()

```
---

<i id='actGetQrCode'></i>
### Self.actGetQrCode(options) ⇒ Promise`<res>`

获取二维码，获取到的二维码将通过消息变动通知。

类型： instance method of  [Self](#Self)

参数 | 类型 | 必填|默认 | 说明 | 
:-: | :-: | :-:|:-: | :-: | :-:
onSuccess| Function |false| ()=>{} |成功的回调函数| 
onError| Function |false|()=>{} |失败的回调函数| 

示例
``` javascript
await MX.Self.actGetQrCode()

```
---


