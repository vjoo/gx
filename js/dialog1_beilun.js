// 保障房年度申报统计
var arr = ['安置房(限价房)', '公(廉)租房', '人才房', '保障性租赁住房', '共有产权房'];

// dialogUnit 计件单位
var dialogUnit1 = ['户','人','户','人']

// 对话框1 的数组
let dataArr1 = []
for (let i = 0; i < 11; i++) {
  dataArr1.push(50 * Math.random())
}
let dataArr2 = []
for (let i = 0; i < 11; i++) {
  dataArr2.push(100 * Math.random())
}
let dataArr3 = []
for (let i = 0; i < 11; i++) {
  dataArr3.push(90 * Math.random())
}
let dataArr4 = []
for (let i = 0; i < 11; i++) {
  dataArr4.push(110 * Math.random())
}

var getDialog1Option = function (dataArr1,dataArr2,dataArr3,dataArr4) {
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
            h1+= `<div style="padding-top:5px;padding-bottom:5px;">${item.marker} ${item.seriesName}: ${parseInt(item.data)}${dialogUnit1[index]}</div>`
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
      data: ['项目数', '房源数', '已配租','未配租'],
      orient: 'horizontal',
      x:40,
      y:0,
      icon: 'circle',
      itemGap:25,
      textStyle: {
        color: '#fff',
        fontSize:14,
        fontWeight: 400
      },
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
        // name: '总价(万元)',
        // nameTextStyle:{
        //   padding:[0,0,20,0],
        //   color:'#fff'
        // },
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
        barWidth:13,
        name: '项目数',
        barGap:0,
        type: 'bar',
        data: dataArr1
      },
      {
        barWidth:13,
        name: '房源数',
        barGap:0,
        type: 'bar',
        data: dataArr2
      },
      {
        barWidth:13,
        name: '已配租',
        barGap:0,
        type: 'bar',
        data: dataArr3
      },
      {
        barWidth:13,
        name: '未配租',
        barGap:0,
        type: 'bar',
        data: dataArr4
      }
    ]
  }
}

var dialog1BoxDom = document.getElementById('dialog1Box');
let dialog1BoxChart = echarts.init(dialog1BoxDom);

var dataYears = [
    {name: '2022年度', id: 1},
    {name: '2021年度', id: 2},
    {name: '2020年度', id: 3},
    {name: '2019年度', id: 4}
  ],
  fnBack2 = function (result) {
    console.log(result.name + ' ' + result.id);
  };
new SelectBox($('#dialog1Select'), dataYears, fnBack2,
  {
    color: '#fff',//输入框字体颜色
    optionColor: '#fff',//下拉框字体颜色
    arrowColor: '#fff',//箭头颜色
    backgroundColor: '#7916ff',//背景色颜色
    borderColor: '#7916ff',//边线颜色
    hoverColor: '#7916ff',//下拉框HOVER颜色
    borderWidth: 1,//边线宽度
    defalut: 'firstData',//默认显示内容。如果是'firstData',则默认显示第一个
    arrowBorderWidth: 0,//箭头左侧分割线宽度。如果为0则不显示
    borderRadius: 5,//边线圆角
    height: 30,//高
    width:111,
    textIndent:7,
    placeholder: 'box6',//默认提示
  }
);

$(function () {
  dialog1BoxChart.setOption(getDialog1Option(dataArr1,dataArr2,dataArr3,dataArr4))
})


