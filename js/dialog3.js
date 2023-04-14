// 已拆迁未安置情况统计
var arr =  ['锦城街道', '玲珑街道', '青山湖街道', '锦南街道', '锦北街道', '板桥镇', '高虹镇', '太湖源镇', '於潜镇', '天目山镇', '太阳镇', '潜川镇', '昌化镇', '龙岗镇', '河桥镇', '湍口镇', '清凉峰镇', '岛石镇'];

var dialogUnit3 = ['套','套','套','套']
// 对话框1 的数组
let dataArr9 = []
for (let i = 0; i < 18; i++) {
  dataArr9.push(50 * Math.random())
}
let dataArr10 = []
for (let i = 0; i < 18; i++) {
  dataArr10.push(100 * Math.random())
}


var getDailog3Option = function (dataArr9,dataArr10) {
 return  {
   tooltip: {
     trigger: 'axis',
     backgroundColor:'#fff',
     textStyle:{
       color:'#000',
       lineHeight:'24px',
     },
     padding:[15,25,15,20],
     //label格式化
     formatter : function(params){
       if(params.length > 0 ){
         let h1 = `<div style="font-size:18px;font-weight:600;margin-bottom:6px">${params[0].name}</div>`;
         params.forEach((item,index)=>{
           h1+= `<div style="padding-top:5px;padding-bottom:5px;">${item.marker} ${item.seriesName}: ${parseInt(item.data)}${dialogUnit3[index]}</div>`
         })
         return h1;
       }else{
         return ''
       }
     },
     axisPointer: {
       // 坐标轴指示器，坐标轴触发有效
       type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
     },
   },
   legend: {
     data: ["总户数", "总人数"],
     orient: 'horizontal',
     x:40,
     y:0,
     icon: "circle",
     itemGap:25,
     textStyle: {
       color: '#fff',
       fontSize:14,
       fontWeight: 400
     },
   },
   color:['#0D33FF','#FD5353'],
   grid: {
     left: "3%",
     right: "4%",
     bottom: "3%",
     containLabel: true,
   },
   xAxis: [
     {
       type: "category",
       data: arr,
       axisLabel: {
         color: '#fff',
         fontSize: 14,
         rotate: 20,
         margin: 20,
         align: 'center'
       },
       axisLine: {
         show: false,
         lineStyle: {
           color: 'RGBA(67, 236, 255, 0.5)'
         }
       },
       axisTick: {
         show: false
       },
       splitLine: {
         show: true,
         lineStyle: {
           width: 1,
           type:"dashed",
           color:  '#2A2A2A',
         }
       }
     }
   ],
   yAxis: [
     {
       type: "value",
       // name: "总价(万元)",
       // nameTextStyle:{
       //   padding:[0,0,20,0],
       //   color:'#fff'
       // },
       axisLabel: {
         formatter: "{value}",
         color: '#fff',
         fontSize: 14,
         margin: 20,
         align: 'center'
       },
       splitLine: {
         show: true,
         lineStyle: {
           width: 1,
           type:"dashed",
           color:  '#2A2A2A',
         }
       },
       axisLine: {
         show: true,
         lineStyle: {
           width: 1,
           type:"dashed",
           color:  '#2A2A2A',
         }
       },
     },
   ],
   series: [
     {
       barWidth:13,
       name: "总户数",
       type: "bar",
       data: dataArr9,
     },
     {
       barWidth:13,
       name: "总人数",
       type: "bar",
       data: dataArr10,
     },
   ]
 }
}

var dialog3BoxDom = document.getElementById('dialog3Box');
let dialog3BoxChart = echarts.init(dialog3BoxDom);

$(function () {
  dialog3BoxChart.setOption(getDailog3Option(dataArr9,dataArr10))
})


