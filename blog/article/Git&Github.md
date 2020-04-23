---
title: Git&Github
lang: zh-cn
description: 如何设置github
date: 2017/02/26 
---
## git

- 工具
- Git是一款免费、开源的分布式版本控制系统

## 分区

- 工作区：写代码的目录
- 缓存区：在工作区和版本库之间做一个缓存
- 版本库：最终成型的版本

## 命令
初始化目录，把一个目录变成git可以管理的工作区
``` shell
git init
```

添加到缓存区
``` shell
git add <. 某个文件>
```
添加到版本库
``` shell
git commit -m '这是日志信息'
```
## github gayhub
用来托管代码的
问题：怎么使用git这个工具把本地代码库中的代码上传到github上托管？

git连接github
设置git的user和email

```
git config –global user.name “你的github名字”
git config –global user.email “你的github邮箱”
```

生成ssh秘钥
```
ssh-keygen -t rsa -C “your_email@youremail.com“
```
回车后在提示的路径下找到.ssh文件夹，在这个文件夹下会有两个文件：

id_rsa 私钥
id_rsa.pub 公钥 未来给github用
设置github的ssh具体参考截图

测试是否连接上github

```
ssh -T git@github.com
```
出现：Hi 你的用户名! You’ve successfully authenticated, but GitHub does not provide shell access.
说明连接成功



