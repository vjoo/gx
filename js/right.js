$(function () {

  var dataLeft3 = [
      {name: '全部', id: 1},
      {name: '未响应', id: 2},
      {name: '处理中', id: 3},
      {name: '已完成', id: 4}
    ],
    fnBackLeft3= function (result) {
      console.log(result.name + ' ' + result.id);
    };
  new SelectBox($('#leftSelect3'), dataLeft3, fnBackLeft3,
    {
      color: '#fff',//输入框字体颜色
      optionColor: '#fff',//下拉框字体颜色
      arrowColor: '#fff',//箭头颜色
      backgroundColor: '#0A1D56',//背景色颜色
      borderColor: '#02A7F0',//边线颜色
      hoverColor: '#02A7F0',//下拉框HOVER颜色
      borderWidth: 1,//边线宽度
      defalut: 'firstData',//默认显示内容。如果是'firstData',则默认显示第一个
      arrowBorderWidth: 0,//箭头左侧分割线宽度。如果为0则不显示
      borderRadius: 2,//边线圆角
      height: 30,//高
      width:100,
      textIndent:7,
      placeholder: 'box6',//默认提示
    }
  );
   
});