//检测输入的日期是否合法
function checkisNotDay(day) {
    //去除所有空格:
    day = day.replace(/\s+/g, "");
    let reg = /^[0-9]{8}$/;//检测是否是有8位数字组成
    return reg.test(day);
}

function clearTime(str) {
    str = str.replace(/-/g, "");//取消字符串中出现的所有逗号
    return str;
}

//获取当前日期
function getDay() {
    var date = new Date();
    var month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    var time = "" + date.getFullYear() + month + day;
    return clearTime(time);
}

//获取昨天的时间
function getYesterday() {
    var date = new Date();
    date.setTime(date.getTime() - 24 * 60 * 60 * 1000);

    var month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    var time = "" + date.getFullYear() + month + day;
    return clearTime(time);
}

//获取上周
function getPreWeek() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let week = getWeekFromDate(date);
    if (week === 0) {//第0周归于上月的最后一周
        month = date.getMonth();
        let dateLast = new Date();
        let dayLast = new Date(dateLast.getFullYear(), dateLast.getMonth(), 0).getDate();
        let timestamp = new Date(new Date().getFullYear(), new Date().getMonth() - 1, dayLast);
        week = getWeekFromDate(new Date(timestamp));
    }
    if (week > 1) {
        week = week - 1;
    } else {
        week = 4;
        month = month - 1;
    }
    let time = month + "月第" + week + "周";
    return time;
}

//获取今天是本月第几周
function getWeek() {
    // 将字符串转为标准时间格式
    let date = new Date();
    let month = date.getMonth() + 1;
    let week = getWeekFromDate(date);
    if (week === 0) {//第0周归于上月的最后一周
        month = date.getMonth();
        let dateLast = new Date();
        let dayLast = new Date(dateLast.getFullYear(), dateLast.getMonth(), 0).getDate();
        let timestamp = new Date(new Date().getFullYear(), new Date().getMonth() - 1, dayLast);
        week = getWeekFromDate(new Date(timestamp));
    }
    let time = month + "月第" + week + "周";
    return time;
}

function getWeekFromDate(date) {
    // 将字符串转为标准时间格式
    let w = date.getDay();//周几
    if (w === 0) {
        w = 7;
    }
    let week = Math.ceil((date.getDate() + 6 - w) / 7) - 1;
    return week;
}

//保留两位小数点，向下
function getFloorFloat2(price) {
    return Math.floor(price * 100) / 100;
}

//保留两位小数点，向下
function getFloorFloat6(price) {
    return Math.floor(price * 1000000) / 1000000;
}

//获取url里指定的参数
function getUrlParam(paraName) {
    var url = document.location.toString();
    var arrObj = url.split("?");
    if (arrObj.length > 1) {
        var arrPara = arrObj[1].split("&");
        var arr;

        for (var i = 0; i < arrPara.length; i++) {
            arr = arrPara[i].split("=");

            if (arr != null && arr[0] == paraName) {
                return decodeURI(arr[1]);
            }
        }
        return "";
    } else {
        return "";
    }
}

// function getQueryString(name) {
//     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
//     var r = window.location.search.substr(1).match(reg);
//     if (r != null) return decodeURI(r[2]);
//     return null;
// }



