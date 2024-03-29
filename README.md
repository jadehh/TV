# CatVodOpen和TvBox

## TVBox互联网发布地址
[TV发布地址](https://github.com/FongMi/Release/tree/main/apk/release)

```bash
https://gh.con.sh/https://raw.githubusercontent.com/jadehh/TVSpider/js/tv_config.json
```

## CatVodOpen
[CatVodOpen发布地址](https://github.com/catvod/CatVodOpen/releases)

V1.1.3版本以上
```bash
gitee://Token@gitee.com/jadehh_743/TVSpider/dist/index.js.md5
```
<font color="red">**改动**</font>

* quickjs改为nodejs, proxy设置修改
* 在ios上无法使用local,所以后面会将所有含有local部分都删除掉,缓存使用数据库来管理
> 配置信息见dist分支

V1.1.2版本以下
```bash
gitee://Token@gitee.com/jadehh_743/TVSpider/js/open_config.json
```

> CatVodOpen和TV中的requets请求不一致的问题
> 使用Gitee导入,并设置为私有仓库,仅支持私有仓库

## config文件生成
```bash
python build.py
```
> Token如果失效,需要重新获取阿里Token

## 遇到的问题
* 玩偶姐姐播放不了,需要切换VPN节点
* m3u8遇到跨域的问题可以尝试使用代理来进行加载,如果没有跨域使用代理会引起死循环
* 虎牙弹幕功能无法实现,现在并不支持WebSocket来监听弹幕
* [阿里Token获取](https://alist.nn.ci/zh/guide/drivers/aliyundrive.html)
* SP360启用嗅探解析,CatVodOpen目前还不支持嗅探
* 新版本的CatVodOpen暂时还不支持proxy,后续可能会考虑加入


## 特别说明
* 近期CatVodOpen更新移除了quickjs,导致无法使用,请尝试使用旧版本
* 或切换至nodejs目录下编译生成dist目录,dist目录发布到dist分支下


## 赞助
如果觉得此项目有用，可以考虑赞助我喝杯咖啡,感谢star❤

<img src="./resources/wechat.jpg" alt="微信" width="256" height="256" align="left" />
