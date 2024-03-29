/*
* @File     : testSpider.js
* @Author   : jade
* @Date     : 2024/3/26 10:42
* @Email    : jadehh@1ive.com
* @Software : Samples
* @Desc     :
*/
import base_spider from "./video/ikanbot.js"
import {Config, JsonDB} from "node-json-db";
function getInreq() {
    let prefix = "/spider/video/ikanbot"
    let db = new JsonDB(new Config((process.env['NODE_PATH'] || '.') + '/db.json', true, true, '/', true));
    class Server {
        constructor() {
            this.config = {"ikanbot": {}, "alitoken": "6827db23e5474d02a07fd7431d3d5a5a"}
            this.db = db
            this.prefix = prefix
        }

        address() {
            return {"dynamic": "127.0.0.1"}
        }
    }
    return {"server": new Server()}
}
let spider = base_spider.spider
let inReq = getInreq()
let init = await spider.init(inReq)

let home = JSON.parse(await spider.home())
let homeVod = JSON.parse(await spider.homeVod())

let cateInReq = {"body": {"id": "1", "page": "1", "filters": {}}}
let category = JSON.parse(await spider.category(cateInReq))

let detailInReq = {"body": {"id": "/search?k=%e4%b8%8e%e5%87%a4%e8%a1%8c"}}
let detail = JSON.parse(await spider.detail(detailInReq))




let playInReq = {
    "body": {
        "flag": "原画",
        "id": "6347b6a5d4b85050537a416f810063b2630b6d2a+cfeM8bMRAhg+eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21Kc29uIjoie1wiZG9tYWluX2lkXCI6XCJiajI5XCIsXCJzaGFyZV9pZFwiOlwiY2ZlTThiTVJBaGdcIixcImNyZWF0b3JcIjpcIjU5MmQ4ODM2NWMyYjQ2NDhiZjJiZWY2OTYzZjkzM2UyXCIsXCJ1c2VyX2lkXCI6XCJhbm9ueW1vdXNcIn0iLCJjdXN0b21UeXBlIjoic2hhcmVfbGluayIsImV4cCI6MTcxMTU1MzEyMCwiaWF0IjoxNzExNTQ1ODYwfQ.XIiWtXS6P-Wev5D_jQqhDF6nggSKHF3RxHukMRMjljSf0lyku0SOHULzcNin6WYTXQcCpxYJ5gJ2vKokFeri9WlqRD6ZY7E20oV20csZQTJEtvo_kwA5M_lhy5b164rjEmbxqgVFCH0BIwdq1pP2QeQSc8vUblO1WTfa-upOBnk"
    }
}
let play = JSON.parse(await spider.play(playInReq))


let searchInReq = {"body": {"wd": "江河日上", "page": "1"}}
let search = JSON.parse(await spider.search(searchInReq))

let x = 0


