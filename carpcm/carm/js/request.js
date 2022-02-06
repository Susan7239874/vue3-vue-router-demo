var baseurl='http://47.94.99.243:8080/carm';
var allUrl='http://47.94.99.243:8080/html/carm/';
var homeUrl='http://47.94.99.243:8080/html/carm/index.html';
var loginUrl='http://47.94.99.243:8080/html/carm/login.html';
var newUrl='http://47.94.99.243:8080/html/carm/new.html';
var memberDetailUrl='http://47.94.99.243:8080/html/carm/memberdetail.html';
var memberListUrl='http://47.94.99.243:8080/html/carm/memberlist.html';
function request(method,url,data){
    return new Promise((resolve,reject) => {
        $.ajax({
            type: method,
            contentType:'application/json',
            url:baseurl+url,
            data:data,
            success: function (res) {
                resolve(res);
            },
            error:function (res) {
                console.log('error:'+JSON.stringify(res));
            },
            complete:function (res) {
                // console.log('complete');
            }
        })
    })
}

// 数字转换为中文一、二、三
function  numberToUpperCase(textIndex) {
    let newString = '';
    let newTextIndex = (textIndex + 1) + '';

    function sum(value, index) {
        var newValue = '';
        if ((textIndex === 9)) {
            return !index ? '十' : '';
        }
        let isSeat = (~~textIndex > 9 && ~~textIndex < 19);
        switch (~~value) {
            case 1:
                newValue = !index ? (isSeat ? '' : '一') : '十一';
                break;
            case 2:
                newValue = !index ? (isSeat ? '' : '二') : '十二';
                break;
            case 3:
                newValue = !index ? (isSeat ? '' : '三') : '十三';
                break;
            case 4:
                newValue = !index ? (isSeat ? '' : '四') : '十四';
                break;
            case 5:
                newValue = !index ? (isSeat ? '' : '五') : '十五';
                break;
            case 6:
                newValue = !index ? (isSeat ? '' : '六') : '十六';
                break;
            case 7:
                newValue = !index ? (isSeat ? '' : '七') : '十七';
                break;
            case 8:
                newValue = !index ? (isSeat ? '' : '八') : '十八';
                break;
            case 9:
                newValue = !index ? (isSeat ? '' : '九') : '九十';
                break;
            case 0:
                newValue = '十';
                break;
            default:
                break;
        }
        return newValue;
    }

    for (let i = 0; i < newTextIndex.length; i++) {
        newString += sum(newTextIndex.substring(i, i + 1), i);
    }
    return newString;
}
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]); return null;
}
