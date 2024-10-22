/**
 * @kolikow
 * 变量：elmck: 必填，账号cookie
 * cron: 52 0,3,6,9,12,15,18,21 * * *
 * const $ = new Env('饿了么CK检测账密');
 */

const {
    getEnvsByName,
    DisableCk,
    EnableCk,
    updateEnv,
    updateEnv11,
    getEnvByUserId
} = require("./ql");

const {
    wait,
    checkCk,
    validateCarmeWithType,
    invalidCookieNotify,
    getUserInfo,
    runOne,
    getCookieMap
} = require("./common北渡.js");

const _0x11f78e = require("moment");

function _0x543ec4(_0x3fdeea, _0x4dabab) {
    return Math.floor(Math.random() * (_0x4dabab - _0x3fdeea + 1) + _0x3fdeea);
}

function reorderCookie(s) {
    const order = ["cookie2", "sgcookie", "unb", "USERID", "SID", "token", "utdid", "deviceId", "umt", "phone", "pwd"];
    const cookies = s.split(';');
    const cookieDict = {};

    cookies.forEach(cookie => {
        // 找到第一个 '=' 的位置
        const index = cookie.indexOf('=');
        if (index > -1) {
            const key = cookie.slice(0, index).trim();  // 取出 '=' 之前的部分作为 key
            const value = cookie.slice(index + 1).trim();  // 取出 '=' 之后的所有内容作为 value
            cookieDict[key] = value;
        }
        // const keyValue = cookie.split('=',2);
        // if (keyValue.length === 2) {
        //     const key = keyValue[0].trim();
        //     const value = keyValue[1].trim();
        //     cookieDict[key] = value;
        // }
    });
    const reorderedCookies = [];

    order.forEach(key => {
        if (cookieDict.hasOwnProperty(key)) {
            reorderedCookies.push(`${key}=${cookieDict[key]}`);
        }
    });

    return reorderedCookies.join(';') + ';';
}

function _0x389941(_0x1daaab) {
    let _0x59299c = "";

    for (let [_0x7cf76, _0x5050e8] of _0x1daaab) {
        _0x59299c += _0x7cf76 + "=" + _0x5050e8 + ";";
    }

    return _0x59299c;
}
function _0x34bc10(_0x11bd1a) {
    var _0x36192b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_",
        _0x2bf93d = "";

    for (var _0x4fef5b = _0x11bd1a; _0x4fef5b > 0; --_0x4fef5b) {
        _0x2bf93d += _0x36192b[Math.floor(Math.random() * _0x36192b.length)];
    }

    return _0x2bf93d;
}

async function addUmtIfMissing(context) {
    let msg ="umt="+_0x34bc10(36)+";";
    // 检查是否已经存在 'umt='
    if (!context.includes('umt=')) {
        return msg + context;
    }
    return context;
}

async function _0x179175(data, context, options) {
    //判断是否有umt
    context = await addUmtIfMissing(context);

    let result1 = await runOne(context, options);
    console.log(context,options)
    const msg = result1.msg;
    const responseData = result1.result;

    if (responseData) {
        if (responseData.code === 3000) {
            let parsedData = JSON.parse(responseData.returnValue.data);
            let sid_now = parsedData.loginServiceExt;
            let sid_eleExt = JSON.parse( sid_now.eleExt);
            let sid_value = sid_eleExt.find((o)=>o.name === 'SID').value
            let userId_value = sid_eleExt.find((o)=>o.name === 'USERID').value
            let token = parsedData.autoLoginToken;
            let cookie2 = responseData.returnValue.sid;
            let cookies = JSON.parse(responseData.returnValue.data).cookies;
            let sgcookie = cookies[4].split(';')[0].split('=')[1];

            let unb = responseData.returnValue.hid;
            const expiryTimestamp = parsedData.expires;
            const expiryDate = _0x11f78e(expiryTimestamp * 1000).format("YYYY-MM-DD HH:mm:ss");

            let cookieMap = getCookieMap(context);
            // let updatedContext = await runOne(context, cookieMap.get("SID"));

            // if (!updatedContext) {
            //     return;
            // }

            cookieMap.set('cookie2', cookie2);
            cookieMap.set('token', token);
            cookieMap.set('unb', unb);
            cookieMap.set('SID',sid_value);
            cookieMap.set("USERID",userId_value);
            cookieMap.set("sgcookie",sgcookie);
            // cookieMap.set("umt",);

            let ck666 = _0x389941(cookieMap);
            let updatedEnvironment = reorderCookie(ck666);

            if (data.id) {
                await updateEnv11(updatedEnvironment, data.id, data.remarks);
            } else {
                await updateEnv(updatedEnvironment, data._id, data.remarks);
            }

            let userID = cookieMap.get("USERID");
            let userEnvironment = await getEnvByUserId(userID);

            let successMessage = `${msg}: ${expiryDate}`;
            console.log(successMessage);
            return successMessage;
        } else {
            if (responseData.message) {
                console.log(responseData.message);
            } else {
                console.log(response.ret[0]);
            }
            return null;
        }
    } else {
        console.log(msg);
    }
}


(async function _0x1f3fe2() {
    const aleo = process.env.ELE_CARME;
    await validateCarmeWithType(aleo, 1);
    const pragati = await getEnvsByName("elmck");
    for (let mackala = 0; mackala < pragati.length; mackala++) {
        let athel = pragati[mackala].value;
        if (!athel) {
            console.log(" ❌无效用户信息, 请重新获取ck");
        } else {
            try {
                var houda = 0;
                if (pragati[mackala]._id) {
                    houda = pragati[mackala]._id;
                }
                if (pragati[mackala].id) {
                    houda = pragati[mackala].id;
                }
                athel = athel.replace(/\s/g, "");
                let lavante = await checkCk(athel, mackala);
                if (!lavante) {
                    let deshaune = await _0x179175(pragati[mackala], athel);
                    if (deshaune && deshaune.indexOf("刷新成功") !== -1) {
                        await EnableCk(houda);
                        console.log("第", mackala + 1, "账号正常😁\n");
                    } else {
                        const lakeyah = await DisableCk(houda);
                        if (lakeyah.code === 200) {
                            console.log("第", mackala + 1, "账号失效！已🈲用");
                        } else {
                            console.log("第", mackala + 1, "账号失效！请重新登录！！！😭");
                        }
                        await invalidCookieNotify(athel, pragati[mackala].remarks);
                    }
                } else {
                    let amirr = await getUserInfo(athel);
                    if (!amirr.encryptMobile) {
                        let rudolphe = await _0x179175(pragati[mackala], athel);
                        if (rudolphe && rudolphe.indexOf("刷新成功") !== -1) {
                            await EnableCk(houda);
                            console.log("第", mackala + 1, "账号正常😁\n");
                        } else {
                            const jericca = await DisableCk(houda);
                            if (jericca.code === 200) {
                                console.log("第", mackala + 1, "账号失效！已🈲用");
                            } else {
                                console.log("第", mackala + 1, "账号失效！请重新登录！！！😭");
                            }
                        }
                        await invalidCookieNotify(athel, pragati[mackala].remarks);
                    } else {
                        await _0x179175(pragati[mackala], athel, getCookieMap(athel).get("SID"));
                        await EnableCk(houda);
                        console.log("第", mackala + 1, "账号正常🎉🎉\n");
                    }
                }
            } catch (hannelore) {
                console.log(hannelore);
            }
        }
        await wait(_0x543ec4(1, 3));
    }
    process.exit(0);
}());

