/**
 * @kolikow
 * 变量：elmck: 必填，账号cookie
 * cron: 52 5 * * *
 * const $ = new Env('饿了么特级厨师');
 */


const {
  "sign": sign,
  "getToken": getToken,
  "checkCk": checkCk,
  "getCookies": getCookies,
  "getUserInfo": getUserInfo,
  "validateCarmeWithType": validateCarmeWithType,
  "wait": wait,
  "checkCarmeCount": checkCarmeCount,
  "tryCatchPromise": tryCatchPromise
} = require("./common.js");
const request = require("request");
const md5 = require("md5");
const GAME_TYEP = 3;
const kami = process["env"]["ELE_CARME"];
function isEmpty(_0xa5a90d) {
  return Object["values"](_0xa5a90d)["length"] === 0;
}
async function lottery(_0x49561f) {
  const _0x3ca203 = {
    "authority": "shopping.ele.me",
    "accept": "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "origin": "https://r.ele.me",
    "pragma": "no-cache",
    "referer": "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    "cookie": _0x49561f,
    //"x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    //"user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x4ba9fe = {
    "bizScene": "XIAODANGJIA",
    "actId": "20230117134129770153614517",
    "uniqueId": '',
    "latitude": "30.17862595617771",
    "longitude": "120.22057268768549",
    "cityId": '2',
    "bizCode": "XIAODANGJIA",
    "collectionId": "20230421102945045949799658",
    "componentId": "20230505143809276394718532",
    "extParams": "{\"actId\":\"20230117134129770153614517\",\"bizScene\":\"XIAODANGJIA\",\"desc\":\"玩特级厨师挑战赛\"}",
    'ua': "140#j5ux7ZvyzzWqwzo2+i+F4pN8s77dltkRQIO3QRil+Yn3wcq3bj90JrqHYHVu9Ajc4Qvzlp1zzqQUiL53Wzzx0Hw+93h/zzrb22U3lp1xzR2VV2EqlaOz2PD+VoS3xg8I1wba7X53xl82VUpji2Jpo20oiliCyZZMhx+aFhb3z6xBKJUo6ditqgIJzlXBvo3zHy952ETFQJJ4VtMblt1Rg5dK6cwi1gpgsO7bpU9tqcFbbrZp9GOwTNb6uzawxcYW4weLSQ7XJ4U/7LoSok/s/uEuOXtCCid22sUl01a8LcZBfGCH6TGTK9FPDON0BmAQHTTD+kOWs6V2AeXWJL+HZV2gXyt8W/N3T0xxs6+UHgah+Nthuf7mpQA0EEWZKpsQE4L+3F8co053zVawEqeNYdbiWEq9WRB+zTujE9bIpoJ4qA1MfJL091GI3KYCkeCxM9kuyjSpGexyNgSyYn57lvmiHroxcAuezPdEyElpAx4VHDwmWr0qKJHCt/YydEwWqyqoDhL394UXSjVCTBxEztWKF6wVtONnwT1T78KhjVKKmz/QHqzdCgyAGmhu+UY87Q3ah4C+yCkFLT/KS+i2gmBtA8k6cBYjjWEZvIXP+yYdk1w8zuJRP606RBHGrVkzJ3hv6g1G8rIJquUAWFE+v+eVlWJJUXTSv06yBe2jfe0Wu3cGnF==",
    "umidToken": "defaultToken3_init_callback_not_called@@https://r.ele.me/afun-chuka-ichiban/@@1687772010930",
    "asac": "2A22C0239QW1FOL3UUQY7U"
  };
  const _0x1ffd1a = new Date()["getTime"]();
  const _0x25ced9 = 12574478;
  var _0xb79160 = "data=" + encodeURIComponent(JSON["stringify"](_0x4ba9fe));
  const _0x49cff8 = getToken(_0x49561f);
  const _0x507372 = _0x49cff8["split"]('_')[0];
  const _0x1776c6 = md5(_0x507372 + '&' + _0x1ffd1a + '&' + _0x25ced9 + '&' + JSON["stringify"](_0x4ba9fe), kami);
  const _0x4cdad7 = {
    "url": "https://shopping.ele.me/h5/mtop.koubei.interactioncenter.platform.right.lottery/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x1ffd1a + "&sign=" + _0x1776c6 + "&api=mtop.koubei.interactioncenter.platform.right.lottery&v=1.0&type=originaljson&dataType=json",
    "method": "POST",
    "headers": _0x3ca203,
    "body": _0xb79160
  };
  return tryCatchPromise(_0x1d0c9f => {
    request(_0x4cdad7, async (_0x233414, _0x5f2660, _0x1714f1) => {
      if (!_0x233414 && _0x5f2660["statusCode"] == 200) {
        try {
          const _0xca907a = JSON["parse"](_0x1714f1);
          if (isEmpty(_0xca907a["data"]["data"])) {
            console["log"](_0xca907a["ret"][0]);
            _0x1d0c9f(false);
          } else {
            const _0x1709f8 = _0xca907a["data"]["data"]["sendRightList"][0]["discountInfo"]["amount"];
            console["log"]("特级厨师闯关成功。获得：" + _0x1709f8, "乐园币");
            if (_0x1709f8 == 1) {
              _0x1d0c9f(false);
            } else {
              _0x1d0c9f(true);
            }
          }
        } catch (_0x3750a0) {
          _0x1d0c9f(false);
        }
      } else {
        _0x1d0c9f(false);
      }
    });
  });
}
async function start() {
  //await validateCarmeWithType(kami, 1);
  const _0x3433f4 = getCookies("elmck");
  for (let _0x192829 = 0; _0x192829 < _0x3433f4["length"]; _0x192829++) {
    const _0x352a5f = _0x3433f4[_0x192829];
    if (!_0x352a5f) {
      console["log"](" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        let _0x14288b = await checkCk(_0x352a5f, _0x192829);
        if (!_0x14288b) {
          continue;
        }
        let _0x4d732e = await getUserInfo(_0x14288b);
        if (!_0x4d732e["username"]) {
          console["log"]('第', _0x192829 + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        const _0x39969d = _0x4d732e["user_id"];
        //await checkCarmeCount(kami, _0x39969d, GAME_TYEP);
        console["log"]("******开始【饿了么账号", _0x192829 + 1, '】', _0x4d732e["username"], "*********");
        var _0x120fe1 = await lottery(_0x14288b);
        console["log"]("延时 5 秒");
        await wait(5);
      } catch (_0x2dcd3d) {
        console["log"](_0x2dcd3d);
      }
    }
  }
  process["exit"](0);
}
start();

// prettier-ignore
//function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }