$(function () {

  var dataLeft1 = [
    { name: '全部', id: 1 },
    { name: '未响应', id: 2 },
    { name: '处理中', id: 3 },
    { name: '已完成', id: 4 }
  ],
    fnBackLeft1 = function (result) {
      console.log(result.name + ' ' + result.id);
    };
  new SelectBox($('#leftSelect1'), dataLeft1, fnBackLeft1,
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
      width: 80,
      textIndent: 5,
      placeholder: 'box6',//默认提示
    }
  );
  var dataLeft2 = [
    { name: '全部', id: 1 },
    { name: '更多名称', id: 2 },
    { name: '更多名称', id: 3 },
    { name: '更多名称', id: 4 }
  ],
    fnBackLeft2 = function (result) {
      console.log(result.name + ' ' + result.id);
    };
  new SelectBox($('#leftSelect2'), dataLeft2, fnBackLeft2,
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
      width: 80,
      textIndent: 5,
      placeholder: 'box6',//默认提示
    }
  );

  var dataLeft3 = [
    { name: '全部', id: 1 },
    { name: '未响应', id: 2 },
    { name: '处理中', id: 3 },
    { name: '已完成', id: 4 }
  ],
    fnBackLeft3 = function (result) {
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
      width: 80,
      textIndent: 5,
      placeholder: 'box6',//默认提示
    }
  );
  var dataLeft4 = [
    { name: '全部', id: 1 },
    { name: 'xxx', id: 2 },
    { name: 'xxx', id: 3 },
    { name: 'xxx', id: 4 }
  ],
    fnBackLeft4 = function (result) {
      console.log(result.name + ' ' + result.id);
    };
  new SelectBox($('#leftSelect4'), dataLeft4, fnBackLeft4,
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
      width: 80,
      textIndent: 5,
      placeholder: 'box6',//默认提示
    }
  );
  //地图
  var dataLeft5 = [
    { name: '全部', id: 1 },
    { name: '物资', id: 2 },
    { name: '人员', id: 3 },
    { name: '公司', id: 4 }
  ],
    fnBackLeft5 = function (result) {
      console.log(result.name + ' ' + result.id);
    };
  new SelectBox($('#leftSelect5'), dataLeft5, fnBackLeft5,
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
      width: 80,
      textIndent: 5,
      placeholder: 'box6',//默认提示
    }
  );
  //pop发送指令弹窗
  var dataLeft6 = [
    { name: '风险提示单', id: 1 },
    { name: '普通消息', id: 2 },
    { name: '防御通知', id: 3 },
    { name: '其他', id: 4 }
  ],
    fnBackLeft6 = function (result) {
      console.log(result.name + ' ' + result.id);
    };
  new SelectBox($('#leftSelect6'), dataLeft6, fnBackLeft6,
    {
      color: '#fff',//输入框字体颜色
      optionColor: '#fff',//下拉框字体颜色
      arrowColor: '#fff',//箭头颜色
      backgroundColor: '#14142B',//背景色颜色
      borderColor: '#02A7F0',//边线颜色
      hoverColor: '#02A7F0',//下拉框HOVER颜色
      borderWidth: 1,//边线宽度
      defalut: 'firstData',//默认显示内容。如果是'firstData',则默认显示第一个
      arrowBorderWidth: 0,//箭头左侧分割线宽度。如果为0则不显示
      borderRadius: 0,//边线圆角
      height: 42,//高
      width: 400,
      textIndent: 5,
      placeholder: 'box6',//默认提示
    }
  );
  var dataLeft7 = [
    { name: '接收人姓名', id: 1 },
    { name: '姓名', id: 2 },
    { name: '姓名', id: 3 },
    { name: '姓名', id: 4 }
  ],
    fnBackLeft7 = function (result) {
      console.log(result.name + ' ' + result.id);
    };
  new SelectBox($('#leftSelect7'), dataLeft7, fnBackLeft7,
    {
      color: '#fff',//输入框字体颜色
      optionColor: '#fff',//下拉框字体颜色
      arrowColor: '#fff',//箭头颜色
      backgroundColor: '#14142B',//背景色颜色
      borderColor: '#02A7F0',//边线颜色
      hoverColor: '#02A7F0',//下拉框HOVER颜色
      borderWidth: 1,//边线宽度
      defalut: 'firstData',//默认显示内容。如果是'firstData',则默认显示第一个
      arrowBorderWidth: 0,//箭头左侧分割线宽度。如果为0则不显示
      borderRadius: 0,//边线圆角
      height: 42,//高
      width: 400,
      textIndent: 5,
      placeholder: 'box6',//默认提示
    }
  );
  //pop启动响应
  var dataLeft8 = [
    { name: 'I级', id: 1 },
    { name: 'II级', id: 2 },
    { name: 'III级', id: 3 },
    { name: 'IV级', id: 4 }
  ],
    fnBackLeft8 = function (result) {
      console.log(result.name + ' ' + result.id);
    };
  new SelectBox($('#leftSelect8'), dataLeft8, fnBackLeft8,
    {
      color: '#fff',//输入框字体颜色
      optionColor: '#fff',//下拉框字体颜色
      arrowColor: '#fff',//箭头颜色
      backgroundColor: '#14142B',//背景色颜色
      borderColor: '#02A7F0',//边线颜色
      hoverColor: '#02A7F0',//下拉框HOVER颜色
      borderWidth: 1,//边线宽度
      defalut: 'firstData',//默认显示内容。如果是'firstData',则默认显示第一个
      arrowBorderWidth: 0,//箭头左侧分割线宽度。如果为0则不显示
      borderRadius: 0,//边线圆角
      height: 42,//高
      width: 400,
      textIndent: 5,
      placeholder: 'box6',//默认提示
    }
  );
  var dataLeft9 = [
    { name: '应急管理预案', id: 1 },
    { name: '灭火和应急疏散预案', id: 2 },
    { name: '水开公司防汛防台预案', id: 3 },
   
  ],
    fnBackLeft9 = function (result) {
      console.log(result.name + ' ' + result.id);
    };
  new SelectBox($('#leftSelect9'), dataLeft9, fnBackLeft9,
    {
      color: '#fff',//输入框字体颜色
      optionColor: '#fff',//下拉框字体颜色
      arrowColor: '#fff',//箭头颜色
      backgroundColor: '#14142B',//背景色颜色
      borderColor: '#02A7F0',//边线颜色
      hoverColor: '#02A7F0',//下拉框HOVER颜色
      borderWidth: 1,//边线宽度
      defalut: 'firstData',//默认显示内容。如果是'firstData',则默认显示第一个
      arrowBorderWidth: 0,//箭头左侧分割线宽度。如果为0则不显示
      borderRadius: 0,//边线圆角
      height: 42,//高
      width: 400,
      textIndent: 5,
      placeholder: 'box6',//默认提示
    }
  );
  //pop调整响应
  var dataLeft10 = [
    { name: 'I级', id: 1 },
    { name: 'II级', id: 2 },
    { name: 'III级', id: 3 },
    { name: 'IV级', id: 4 }
  ],
    fnBackLeft10 = function (result) {
      console.log(result.name + ' ' + result.id);
    };
  new SelectBox($('#leftSelect10'), dataLeft10, fnBackLeft10,
    {
      color: '#fff',//输入框字体颜色
      optionColor: '#fff',//下拉框字体颜色
      arrowColor: '#fff',//箭头颜色
      backgroundColor: '#14142B',//背景色颜色
      borderColor: '#02A7F0',//边线颜色
      hoverColor: '#02A7F0',//下拉框HOVER颜色
      borderWidth: 1,//边线宽度
      defalut: 'firstData',//默认显示内容。如果是'firstData',则默认显示第一个
      arrowBorderWidth: 0,//箭头左侧分割线宽度。如果为0则不显示
      borderRadius: 0,//边线圆角
      height: 42,//高
      width: 400,
      textIndent: 5,
      placeholder: 'box6',//默认提示
    }
  ); 
});