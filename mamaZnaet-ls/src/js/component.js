//ВІДКЛАДАННЯ ЗАКАДРОВИХ ФОТО
// lozad.js - v1.9.0 - 2019-02-09
// https://github.com/ApoorvSaxena/lozad.js
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.lozad=e()}(this,function(){"use strict";var g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},n="undefined"!=typeof document&&document.documentMode,l={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=document.createElement("img");n&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),t.appendChild(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var r=t.children,o=void 0,a=0;a<=r.length-1;a++)(o=r[a].getAttribute("data-src"))&&(r[a].src=o);t.load()}t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset")),t.getAttribute("data-background-image")&&(t.style.backgroundImage="url('"+t.getAttribute("data-background-image")+"')"),t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};
// Detect IE browser
function f(t){t.setAttribute("data-loaded",!0)}var b=function(t){return"true"===t.getAttribute("data-loaded")};return function(){var r,o,a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=g({},l,t),n=e.root,i=e.rootMargin,d=e.threshold,c=e.load,u=e.loaded,s=void 0;return window.IntersectionObserver&&(s=new IntersectionObserver((r=c,o=u,function(t,e){t.forEach(function(t){(0<t.intersectionRatio||t.isIntersecting)&&(e.unobserve(t.target),b(t.target)||(r(t.target),f(t.target),o(t.target)))})}),{root:n,rootMargin:i,threshold:d})),{observe:function(){for(var t=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)}(a,n),e=0;e<t.length;e++)b(t[e])||(s?s.observe(t[e]):(c(t[e]),f(t[e]),u(t[e])))},triggerLoad:function(t){b(t)||(c(t),f(t),u(t))},observer:s}}});

var observer = lozad();
observer.observe();

//БІГУЧИЙ РЯДОК
Zepto(function($) {
  $(window).on('load', function() {
    $.each($(".roller"), function(index, item) {
      const wrapper = $("<div />", {
        class: "roller-wrapper"
      });
      const roller = $(item);
      roller.append(wrapper);
      const span = roller.find('span').first();
      wrapper.append(span);

      const span_width = span.get(0).offsetWidth;
      const max_width = roller.width() + span_width;
      let inner_width = span_width;

      while (max_width > inner_width) {
        wrapper.append(span.clone());
        inner_width += span_width;
      }

      anime({
        targets: wrapper.get(0),
        translateX: {
          value: '-=' + span_width + 'px',
          duration: 4000
        },
        loop: true,
        easing: 'linear'
      });
    });
  })
});


// Відкладене завантаження відео
//---------- початок ----------
document.addEventListener("DOMContentLoaded", function() {
  var videoContainer = document.getElementById('video-container');
  var lazyVideo = document.createElement('iframe');
  lazyVideo.setAttribute('data-src', 'https://www.youtube.com/embed/ebjYjT26Q-c?si=Mch0Ry_1IHljRKHE');
  lazyVideo.setAttribute('allow', 'autoplay; encrypted-media');
  lazyVideo.setAttribute('allowfullscreen', '');
  lazyVideo.classList.add('lazy-video');
  videoContainer.appendChild(lazyVideo);

  // Функція, що відкладає завантаження відео
  function loadLazyVideo() {
    var lazyVideos = document.querySelectorAll('.lazy-video');
    lazyVideos.forEach(function(lazyVideo) {
      if (lazyVideo.getBoundingClientRect().top < window.innerHeight && lazyVideo.getBoundingClientRect().bottom >= 0) {
        lazyVideo.src = lazyVideo.dataset.src;
        lazyVideo.classList.remove('lazy-video');
      }
    });
  }

  // Викликаємо функцію loadLazyVideo() під час прокрутки сторінки та зміни розмірів вікна
  window.addEventListener('scroll', loadLazyVideo);
  window.addEventListener('resize', loadLazyVideo);

  // Викликаємо функцію loadLazyVideo() відразу при завантаженні сторінки
  loadLazyVideo();
});
//---------- кінець ----------


 $( document ).ready(function() {
  // Scroll
  $('.scroll').click(function (e) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 10
    }, 1500);
  });


  //слайдер відгуків
  $('#slider3').slick({
    lazyLoad: 'ondemand',
    // dots: true,
    dots: false,
    speed: 1000,
    slidesToShow: 2,
    arrows: true,
    // adaptiveHeight: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        // dots: true,
        // adaptiveHeight: true
      }
    }]
  });


    //accardion
  const accordions = document.querySelectorAll(".accordion");
  const contents = document.querySelectorAll(".accordion-content");
  const arrows = document.querySelectorAll(".arrow");
  const bgArrows = document.querySelectorAll(".bg-arrow");
  // Функція для зміни стилів активного елемента
  const setActiveStyle = (index) => {
    // Спочатку змінимо стилі всіх елементів .bg-arrow
    bgArrows.forEach((bgArrow, i) => {
      bgArrow.style.backgroundColor = i === index ? "#F1B678" : "#F1B678";
    });
    // Змінимо стилі всіх елементів .arrow
    arrows.forEach((arrow, i) => {
      if (i === index) {
        arrow.style.transform = "rotate(-135deg)";
        arrow.style.marginTop = "6px";
      } else {
        arrow.style.transform = "rotate(45deg)";
        arrow.style.marginTop = "-6px";
      }
    });
  };

  // Функція для обробки кліку на акордеон
  const active = (item, index) => {
    contents.forEach((content, i) => {
      if (i !== index) {
        content.style.height = 0;
      }
    });
    item.style.height = `${item.scrollHeight}px`;
    setActiveStyle(index);
  };

  // Встановлення фонового кольору при завантаженні сторінки
  bgArrows.forEach((bgArrow, i) => {
    bgArrow.style.backgroundColor = "#F1B678";
  });

  // Додали обробник кліку на всі кнопки акордеону
  accordions.forEach((accordion, i) => {
    accordion.addEventListener("click", () => active(contents[i], i));
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