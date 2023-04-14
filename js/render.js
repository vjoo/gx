let init = function () {
  // 第一部分渲染

  $('.left-box1-inner li h1 b').each((index,item)=>{
    $(item).numScroll({number:~~(1000* Math.random())})
  })

  $('.left-box2-title-right strong').each((index,item)=>{
    $(item).numScroll({number:index== 1 ? ~~(100* Math.random()) :~~(1000* Math.random())})
  })

  /*$('.left-box3-inner li h1 span').each((index,item)=>{
    $(item).numScroll({number:~~(1000* Math.random())})
  })*/
  // 第二部分渲染
  $('.middle-box1 .white').each((index,item)=>{
    $(item).numScroll({number:~~(1000* Math.random())})
  })
  $('.middle-box1 .title strong').each((index,item)=>{
    $(item).numScroll({number:~~(1000* Math.random())})
  })
  $('.part3-info span').each((index,item)=>{
    $(item).numScroll({number:32 - (index * 2) })
  })

  // 第三部分渲染
  $('.right-box2-part li h4').each((index,item)=>{
    $(item).numScroll({number:~~(1000* Math.random()) })
  })

  $('.right-decorate-part li h4').each((index,item)=>{
    if(index !== 4 ) {
      $(item).numScroll({number:~~(1000* Math.random()) })
    } else {
      if($(item).attr('number')== 11 ){
        $(item).numScroll({number:11 })
      }else{
        $(item).numScroll({number:18 })
      }
    }
  })
};

$(function () {
  setInterval(()=>{
    init();
  },0.5 * 60 * 1000 )
  init();
})
