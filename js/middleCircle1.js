$(function () {

  let middlleMapData = {
    新碶街道:{left:225,top:103,total:80,serviceNumber:77,rented:54},
    小港街道:{left:51,top:149,total:17,serviceNumber:17,rented:34},
    大碶街道:{left:189,top:222,total:26,serviceNumber:39,rented:3},
    霞浦街道:{left:313,top:181,total:35,serviceNumber:11,rented:19},
    柴桥街道:{left:383,top:239,total:0,serviceNumber:14,rented:5},
    戚家山街道:{left:148,top:36,total:16,serviceNumber:26,rented:12},
    大榭街道:{left:449,top:115,total:33,serviceNumber:2,rented:45},
    白峰街道:{left:474,top:266,total:7,serviceNumber:43,rented:2},
    春晓街道:{left:328,top:377,total:16,serviceNumber:1,rented:23},
    梅山街道:{left:497,top:372,total:372,serviceNumber:31,rented:18},
    郭巨街道:{left:613,top:214,total:214,serviceNumber:15,rented:40}
  }

  let string = ''

  let temp = `<li style="left:{{left}}px;top:{{top}}px;"><span>{{key}}</span><div class="map-tips"><h3>{{key}}</h3>
                <p>房间总量：{{total}} 套</p>
                <p>已配租：{{rented}} 套</p>
                <p>服务人数：{{serviceNumber}} 人</p>
              </div>
            </li>`

  for(let key in middlleMapData ){
    let obj = middlleMapData[key];
    string += temp.replace(/{{key}}/gi,key)
      .replace("{{total}}",obj.total)
      .replace("{{left}}",obj.left)
      .replace("{{top}}",obj.top)
      .replace("{{rented}}",obj.rented)
      .replace("{{serviceNumber}}",obj.serviceNumber)
  }

  $('#middleMap').html(string)
})