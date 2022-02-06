
Date.prototype.format = function (format) {
    var date = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
}
// 2019-12-19T11:30:53.000+0000格式转换为2019-12-19
function getTransformTime1(datatime){
    datatime = datatime.replace(/-/g, '/');// 2019-12-19这种会容易NaNaNaN   换成/就能解决
    var date = new Date(datatime);
    // let date_value=date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();//hh:mm这样0分也是显示12:00而不是12:0
    let date_value=date.getFullYear() + '.'+date.format('MM.dd');//hh:mm这样0分也是显示12:00而不是12:0
    return date_value;
}
function getTransformTime2(datatime){
    datatime = datatime.replace(/-/g, '/');// 2019-12-19这种会容易NaNaNaN   换成/就能解决
    var date = new Date(datatime);
    let date_value=date.getFullYear() + '年'+date.format('MM')+'月'+date.format('dd')+'日';//hh:mm这样0分也是显示12:00而不是12:0
    return date_value;
}
function getTransformDate(datatime){
    datatime = datatime.replace(/-/g, '/');// 2019-12-19这种会容易NaNaNaN   换成/就能解决
    var date = new Date(datatime);
    let date_value=date.format('MM')+'/'+date.format('dd');//hh:mm这样0分也是显示12:00而不是12:0
    return date_value;
}
function getTransformDate2(datatime){
    datatime = datatime.replace(/-/g, '/');// 2019-12-19这种会容易NaNaNaN   换成/就能解决
    var date = new Date(datatime);
    let date_value=date.format('MM')+'-'+date.format('dd');//hh:mm这样0分也是显示12:00而不是12:0
    return date_value;
}
