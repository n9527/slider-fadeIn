$.fn.slider = function (number, T) {
  var sliderBox = $(this),
      sliderList = sliderBox.find('.slider-list-item'),
      prev = sliderBox.find('.slider-control-prev'),
      sliderControl = sliderBox.find('.slider-control'),
      next = sliderBox.find('.slider-control-next'),
      indicatorBtn = sliderBox.find('.slider-indicator-btn'),
      index = 0,
      number = number-1;
      timer = null,
      time = T ? T : 3000;
  //开启自动轮播
  autoPlay();
  
  function autoPlay() {
    timer = setInterval(nextHandler, time)
  }
  
  //鼠标进入停止自动轮播
  sliderBox.on('mouseenter', function () {
    if (sliderControl) {
      sliderControl.show();
    }
    clearInterval(timer);
  })
  //鼠标离开继续自动轮播
  sliderBox.on('mouseleave', function () {
    if (sliderControl) {
      sliderControl.hide();
    }
    autoPlay();
  })
  //前后鼠标点播
  prev.on('click', prevHandler)
  next.on('click', nextHandler)
  //小圆点控制器鼠标进入选择显示;
  indicatorBtn.on('mouseenter', function () {
    index = $(this).index();
    MyShow();
  })
  
  function nextHandler() {
    index++;
    if (index > number) {
      index = 0;
    }
    MyShow();
  }
  
  function prevHandler() {
    index--;
    if (index < 0) {
      index = number;
    }
    MyShow();
  }
  
  function MyShow() {
    sliderList.eq(index).fadeIn().siblings().fadeOut();
    indicatorBtn.removeClass('active').eq(index).addClass('active');
  }
  
}


