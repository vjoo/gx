var dom = document.getElementById("gh");
var myChart = echarts.init(dom);
var app = {};

// var option;

/**
 * 图标所需数据
 */
// var data = {
//   id: "echartPieyyyy",
//   value: [10, 22, 22,],
//   legend: ["未响应", "处理中", "已完成"],
//   color: ["#D9001B", "#F59A23", "#70B603"],
//   // tooltipShow:false,    //设置悬浮提示显示              --默认显示true
//   // hoverAnimation:false, //设置鼠标悬浮点击饼图动画效果  --默认开启动画true
//   title: "",
// };


////////////////////////////////////////

// var option = {
//   title: {
//     x: "2%",
//     y: "2%",
//     textStyle: {
//       fontWeight: 400,
//       fontSize: 14,
//       color: "#ffffff",
//     },
//     text: data.title || "",
//   },
//   tooltip: {
//     trigger: "item",
//     show: data.tooltipShow === false ? false : true,
//     //   formatter: "{b}: {c} ({d}%)"
//   },
//   legend: {
//     orient: "horizontal",
//     top: 10,
//     icon: "circle",
//     selectedMode: false,
//     itemWidth: 6,
//     itemHeight: 6,
//     itemGap: 6,
//     borderRadius: 6,
//     data: data.legend,
//   },
//   series: [
//     {
//       type: "pie",
//       top: '14%',
//       // clickable:false,
//       // selectedMode: 'single',//单点击设置
//       hoverAnimation: data.hoverAnimation === false ? false : true,
//       radius: ["40%", "90%"],
//       color: data.color,
//       label: {
//         normal: {
//           position: "inner",
//           // formatter: '{d}%',
//           formatter: function (param) {
//             if (!param.percent) return "";
//             var f = Math.round(param.percent * 10) / 10;
//             var s = f.toString();
//             var rs = s.indexOf(".");
//             if (rs < 0) {
//               rs = s.length;
//               s += ".";
//             }
//             while (s.length <= rs + 1) {
//               s += "0";
//             }
//             return s + "%";
//           },
//           textStyle: {
//             color: "#ffffff",
//             fontSize: 16,
//           },
//         },
//       },
//       labelLine: {
//         normal: {
//           show: false,
//         },
//       },
//       data: seriesData,
//     },
//   ],
// };
option = {
  tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    top:'10%',
    y: 'top',
    data: ['未响应', '处理中', '已完成'],
    textStyle: {
      color: '#fff'
    }
  },
  
  series: [
      {
          name: '半径模式',
          type: 'pie',
          radius: [30, 68],
          center: ['50%', '60%'],
          color: ["#D9001B", "#F59A23", "#70B603"],
          data: [
              { value: 10, name: '未响应' },
              { value: 22, name: '处理中' },
              { value: 22, name: '已完成' },
          ]
      }
  ]
};

  myChart.setOption(option);


// $(function () {
  $('#dian').click(function () {
    $('#phone').show();
    // $('#dialog1').css('visibility','visible')
  })
// })

