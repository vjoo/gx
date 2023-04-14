// 房源供需分析
var arr = ['安置房(限价房)', '公(廉)租房', '人才房', '保障性租赁住房', '共有产权房'];

var dialogUnit2 = ['户','人']

// 对话框2 的数组
let dataArr5 = []
for (let i = 0; i < 11; i++) {
  dataArr5.push(50 * Math.random())
}
let dataArr6 = []
for (let i = 0; i < 11; i++) {
  dataArr6.push(100 * Math.random())
}
let dataArr7 = []
for (let i = 0; i < 11; i++) {
  dataArr7.push(90 * Math.random())
}
let dataArr8 = []
for (let i = 0; i < 11; i++) {
  dataArr8.push(110 * Math.random())
}

var getDailog2Option = function (dataArr5,dataArr6,dataArr7,dataArr8) {
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
         let h1 = `<div style="font-size:11px;font-weight:600;margin-bottom:6px">${params[0].name}</div>`;
         params.forEach((item,index)=>{
           h1+= `<div style="padding-top:5px;padding-bottom:5px;">${item.marker} ${item.seriesName}: ${parseInt(item.data)}${dialogUnit2[index]}</div>`
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
     data: ['房源总量', '剩余量', '需求量', '缺口量'],
     orient: 'horizontal',
     x:40,
     y:0,
     icon: 'circle',
     itemGap:25,
     textStyle: {
       color: '#fff',
       fontSize:14,
       fontWeight: 400
     }
   },
   color:['#0D33FF','#FD5353','#09BD3C','#991BFA'],
   grid: {
     left: '3%',
     right: '4%',
     bottom: '3%',
     containLabel: true,
   },
   xAxis: [
     {
       type: 'category',
       data:  ['安置房(限价房)', '公(廉)租房', '人才房', '保障性租赁住房', '共有产权房'],
       axisLabel: {
         color: '#fff',
         fontSize: 14,
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
           type:'dashed',
           color:  '#2A2A2A',
         }
       }
     }
   ],
   yAxis: [
     {
       type: 'value',
       axisLabel: {
         formatter: '{value}',
         color: '#fff',
         fontSize: 14,
         margin: 20,
         align: 'center'
       },
       splitLine: {
         show: true,
         lineStyle: {
           width: 1,
           type:'dashed',
           color:  '#2A2A2A',
         }
       },
       axisLine: {
         show: true,
         lineStyle: {
           width: 1,
           type:'dashed',
           color:  '#2A2A2A',
         }
       },
     },
   ],
   series: [
     {
       barWidth:20,
       barGap:0,
       name: '房源总量',
       type: 'bar',
       data: dataArr5
     },
     {
       barWidth:20,
       barGap:0,
       name: '剩余量',
       type: 'bar',
       data: dataArr6
     },
     {
       barWidth:20,
       barGap:0,
       name: '需求量',
       type: 'bar',
       data: dataArr7
     },
     {
       barWidth:20,
       barGap:0,
       name: '缺口量',
       type: 'bar',
       data: dataArr8
     },
   ]
 }
}

var dialog2BoxDom = document.getElementById('dialog2Box');
let dialog2BoxChart = echarts.init(dialog2BoxDom);

$(function () {
  dialog2BoxChart.setOption(getDailog2Option(dataArr5,dataArr6,dataArr7,dataArr8))
})


