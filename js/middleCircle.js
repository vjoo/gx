$(function () {

  let middlleMapData = {
    锦城街道:{left:575,top:158,total:80,serviceNumber:77,rented:54},
    玲珑街道:{left:549,top:208,total:17,serviceNumber:17,rented:34},
    青山湖街道:{left:659,top:95,total:26,serviceNumber:39,rented:3},
    锦南街道:{left:620,top:207,total:35,serviceNumber:11,rented:19},
    锦北街道:{left:611,top:130,total:0,serviceNumber:14,rented:5},
    板桥镇:{left:669,top:230,total:16,serviceNumber:26,rented:12},
    高虹镇:{left:590,top:74,total:33,serviceNumber:2,rented:45},
    太湖源镇:{left:503,top:85,total:7,serviceNumber:43,rented:2},
    於潜镇:{left:379,top:158,total:16,serviceNumber:1,rented:23},
    天目山镇:{left:440,top:196,total:25,serviceNumber:31,rented:18},
    太阳镇:{left:307,top:165,total:42,serviceNumber:15,rented:40},
    潜川镇:{left:361,top:321,total:11,serviceNumber:42,rented:7},
    昌化镇:{left:230,top:173,total:24,serviceNumber:18,rented:12},
    龙岗镇:{left:124,top:167,total:26,serviceNumber:42,rented:45},
    河桥镇:{left:246,top:272,total:30,serviceNumber:36,rented:4},
    湍口镇:{left:225,top:340,total:32,serviceNumber:17,rented:7},
    清凉峰镇:{left:40,top:275,total:9,serviceNumber:35,rented:33},
    岛石镇:{left:44,top:120,total:80,serviceNumber:77,rented:54},
  }

  let string = ''

  let temp = `<li style="left:{{left}}px;top:{{top}}px;"><span>{{key}}</span><div class="map-tips map-tips1"><h3>{{key}}</h3>
                <p>安置房（限价房）总量：{{total}} 套</p>
                <p>分布小区数量：{{rented}} 个</p>
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