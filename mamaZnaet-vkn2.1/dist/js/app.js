//HEADER background
document.addEventListener("DOMContentLoaded", function() {
  let header = document.querySelector(".header");
  let mobileBg = header.getAttribute("data-bg-mobile");
  let desktopBg = header.getAttribute("data-bg-desktop");

  function lazyLoadBg(element) {
    if (window.innerWidth <= 991 && mobileBg) {
      element.style.backgroundImage = `url('${mobileBg}')`;
    } else if (desktopBg) {
      element.style.backgroundImage = `url('${desktopBg}')`;
    }
  }

  // Використання Intersection Observer для завантаження фонового зображення при його входженні в область видимості
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        lazyLoadBg(entry.target);
        observer.unobserve(entry.target); // Зупиняємо спостереження для цього елемента після завантаження
      }
    });
  });

  // Додаємо блок .header до Intersection Observer
  observer.observe(header);
});

//ВІДКЛАДАННЯ ЗАКАДРОВИХ ФОТО
/*! lozad.js - v1.9.0 - 2019-02-09
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2019 Apoorv Saxena; Licensed MIT */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.lozad=e()}(this,function(){"use strict";var g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},n="undefined"!=typeof document&&document.documentMode,l={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=document.createElement("img");n&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),t.appendChild(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var r=t.children,o=void 0,a=0;a<=r.length-1;a++)(o=r[a].getAttribute("data-src"))&&(r[a].src=o);t.load()}t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset")),t.getAttribute("data-background-image")&&(t.style.backgroundImage="url('"+t.getAttribute("data-background-image")+"')"),t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};
/**
   * Detect IE browser
   * @const {boolean}
   * @private
   */function f(t){t.setAttribute("data-loaded",!0)}var b=function(t){return"true"===t.getAttribute("data-loaded")};return function(){var r,o,a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=g({},l,t),n=e.root,i=e.rootMargin,d=e.threshold,c=e.load,u=e.loaded,s=void 0;return window.IntersectionObserver&&(s=new IntersectionObserver((r=c,o=u,function(t,e){t.forEach(function(t){(0<t.intersectionRatio||t.isIntersecting)&&(e.unobserve(t.target),b(t.target)||(r(t.target),f(t.target),o(t.target)))})}),{root:n,rootMargin:i,threshold:d})),{observe:function(){for(var t=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)}(a,n),e=0;e<t.length;e++)b(t[e])||(s?s.observe(t[e]):(c(t[e]),f(t[e]),u(t[e])))},triggerLoad:function(t){b(t)||(c(t),f(t),u(t))},observer:s}}});

   var observer = lozad();
  observer.observe();


!function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()};return this.checkElements=function(){var b,f;c.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),f=b+e.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),f=b+e.height),d.each(function(){var d=a(this),g={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(g,c),a.extend(g,h),!d.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*e.height);var i=g.scrollHorizontal?d.offset().left:d.offset().top,j=g.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+d.width():k+d.height();g.invertBottomOffset&&(l-=2*g.offset),k<f&&l>b?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),j<=f&&i>=b?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data("vp-animated",!0),g.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);

$( document ).ready(function() {

  $('.head .container').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated slideInUp',
    offset: '0%'
  });
  $('.right').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInRight',
    offset: '0%'
  });
  $('.left').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInLeft',
    offset: '0%'
  });
  $('.up').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInUp',
    offset: '20%'
  });
  $('.down').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInDown',
    offset: '20%'
  });
  $('.in').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeIn',
    offset: '20%'
  });
  $('.bounce-in').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated bounceIn',
    offset: '20%'
  });
  $('.bounce-left').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated bounceInLeft',
    offset: '20%'
  });
  $('.bounce-right').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated bounceInRight',
    offset: '20%'
  });
  $('.bounce-up').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated bounceInUp',
    offset: '20%'
  });
  $('.bounce-down').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated bounceInDown',
    offset: '20%'
  });
  $('.speaker-img').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated zoomIn',
    offset: '0%'
  });
  $('.bottom-info').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated rotateIn',
    offset: '20%'
  });

  //відкладене завантаження фону
  var body = document.querySelector("body");
  var dataSrc = body.getAttribute("data-src");

  if (dataSrc) {
    body.style.backgroundImage = "url(" + dataSrc + ")";
  }

  //фіксована кнопка desctop
  window.addEventListener('scroll', function() {
    let a = document.querySelector('.float-btn');
    let priceBlock = document.getElementById('price');
    let headerBlock = document.getElementById('header');
    let scrollY = window.scrollY;
    let priceBlockTop = priceBlock.offsetTop;
    let priceBlockHeight = priceBlock.offsetHeight;
    let priceBlockBottom = priceBlockTop + priceBlockHeight;
    let headerBlockTop = headerBlock.offsetTop;
    let headerBlockHeight = headerBlock.offsetHeight;
    let headerBlockBottom = headerBlockTop + headerBlockHeight;

    //стає на місце при знаходженні на блоці "banner"
    if (scrollY < headerBlockBottom) {
      a.style.position = 'static';
      a.style.transform = 'translateX(0%)';
    } else {
      a.style.position = 'fixed';
      a.style.top = 'auto';
      a.style.bottom = '20px';
      a.style.left = '50%';
      a.style.transform = 'translateX(-50%)';
    }

    //зникає при знаходженні на блоці "price"
    if (scrollY > priceBlockTop && scrollY < priceBlockBottom) {
      a.style.display = 'none';
    } else {
      a.style.display = 'block';
    }
  });

  // Scroll
  $('.scroll').click(function (e) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 0
    }, 1500);
  });

  //головний слайдер фото
  $('#slider1').slick({
    lazyLoad: 'ondemand',
    dots: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });

  //слайдер телеканали
  $('#slider2').slick({
    dots: false,
    arrows: true,
    speed: 3000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }]
  });

  //слайдер відгуків
  $('#slider3').slick({
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        speed: 500,
        arrows: false,
      }
    }]
  });


  //ТАЙМЕР ЦІНИ
  const timers = document.querySelectorAll('.timer');

  timers.forEach((timer, index) => {
  const hoursDisplay = timer.querySelector('.hours');
  const minutesDisplay = timer.querySelector('.minutes');
  const secondsDisplay = timer.querySelector('.seconds');

  function getTimeUntilMidnight() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);

    const timeDifference = midnight - now;
    return Math.floor(timeDifference / 1000);
  }

  let remainingTime = getTimeUntilMidnight();
  function updateTimerDisplay() {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    hoursDisplay.textContent = hours.toString().padStart(2, '0');
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
  }
  function updateTimer() {
    if (remainingTime > 0) {
      remainingTime--;
      updateTimerDisplay();
    }
  }
    setInterval(updateTimer, 1000);
  });


})