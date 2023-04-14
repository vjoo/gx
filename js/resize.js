window.scale = 1;

(function () {
  const designWidth = 1920
  const designHeight = 1080
  function calcScale () {
    const Width = document.body.clientWidth || document.documentElement.clientWidth
    const Height = document.body.clientHeight || document.documentElement.clientHeight
    /*  $('.container-box-right').height( Height / scale + 'px')
  $('.container-box-left').height( Height / scale + 'px') */
    scale = (Height / designHeight).toFixed(3)
    $('.screen-container-wrapper').each((key, item) => {
      if (item.className.indexOf('container-box-middle') > -1) {
        item.style.transform = `scale(${scale})`
      }else{
        item.style.transform = `scale(${scale})`
      }
    })

    // 头部高度
    const topHeight = scale * 74 + 'px';
    $('.container-box-left').css('top',topHeight).css('left', 30 * scale + 'px')
    $('.container-box-right').css('top',topHeight).css('right', 30 * scale + 'px')

    // 实际宽度太小了
    if ( window.innerWidth < designWidth * window.scale ) {
      $('.middle-box3 .middle-box3-inner').css('width',(Width - (880 * scale)) + 'px')
    } else {
      $('.middle-box3 .middle-box3-inner').css('width','1030px')
    }

    /*document.querySelector('#topBg').style.height = topHeight
    document.querySelector('#topBox').style.height = topHeight
    if (window.innerWidth < designWidth * window.scale) {
      document.querySelector('#topBox').style.transformOrigin = '0% 0%'
      document.documentElement.style['overflow'] = ''
    } else {
      document.documentElement.style['overflowX'] = 'hidden'
      document.querySelector('#topBox').style.transformOrigin = '50% 0%'
    }
    setTimeout( ()=>{
      $('.amap-scalecontrol').css({
        transform: `scale(${scale})`,
        left: 'auto',
        right: (408 * scale) + 'px'
      })
    },1000)*/

  }

  let timer = null

  function resizeHandler () {
    calcScale()
    timer && clearTimeout(timer)
    timer = setTimeout(calcScale, 300)
  }

  calcScale()

  window.addEventListener('resize', resizeHandler)
})()
