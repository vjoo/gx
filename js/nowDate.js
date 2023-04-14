var weekNameArr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']

$(function () {
  setInterval(function () {
    var date = new Date();
    var year = date.getFullYear(); //获取当前年份
    var mon = addZero(date.getMonth() + 1); //获取当前月份
    var da = addZero(date.getDate()); //获取当前日
    var day = date.getDay(); //获取当前星期几
    var h = addZero(date.getHours()); //获取小时
    var m = addZero(date.getMinutes()); //获取分钟
    var s = addZero(date.getSeconds()); //获取秒
    var d = document.getElementById('Date');
    d.innerHTML =  year + '年' + mon + '月' + da + '日<b></b>' + weekNameArr[day - 1] + '<b></b>' + h + ':' + m +
      ':' +
      s;
  }, 1000)
})

function addZero(num){
  if(parseInt(num) < 10){
    num = '0'+num;
  }
  return num;
}