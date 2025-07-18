//ВІДКЛАДАННЯ ЗАКАДРОВИХ ФОТО
// lozad.js - v1.9.0 - 2019-02-09
// https://github.com/ApoorvSaxena/lozad.js
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.lozad = e() }(this, function () {
  "use strict"; var g = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var r = arguments[e]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]) } return t }, n = "undefined" != typeof document && document.documentMode, l = { rootMargin: "0px", threshold: 0, load: function (t) { if ("picture" === t.nodeName.toLowerCase()) { var e = document.createElement("img"); n && t.getAttribute("data-iesrc") && (e.src = t.getAttribute("data-iesrc")), t.getAttribute("data-alt") && (e.alt = t.getAttribute("data-alt")), t.appendChild(e) } if ("video" === t.nodeName.toLowerCase() && !t.getAttribute("data-src") && t.children) { for (var r = t.children, o = void 0, a = 0; a <= r.length - 1; a++)(o = r[a].getAttribute("data-src")) && (r[a].src = o); t.load() } t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")), t.getAttribute("data-srcset") && t.setAttribute("srcset", t.getAttribute("data-srcset")), t.getAttribute("data-background-image") && (t.style.backgroundImage = "url('" + t.getAttribute("data-background-image") + "')"), t.getAttribute("data-toggle-class") && t.classList.toggle(t.getAttribute("data-toggle-class")) }, loaded: function () { } };
  // Detect IE browser
  function f(t) { t.setAttribute("data-loaded", !0) } var b = function (t) { return "true" === t.getAttribute("data-loaded") }; return function () { var r, o, a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".lozad", t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, e = g({}, l, t), n = e.root, i = e.rootMargin, d = e.threshold, c = e.load, u = e.loaded, s = void 0; return window.IntersectionObserver && (s = new IntersectionObserver((r = c, o = u, function (t, e) { t.forEach(function (t) { (0 < t.intersectionRatio || t.isIntersecting) && (e.unobserve(t.target), b(t.target) || (r(t.target), f(t.target), o(t.target))) }) }), { root: n, rootMargin: i, threshold: d })), { observe: function () { for (var t = function (t) { var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document; return t instanceof Element ? [t] : t instanceof NodeList ? t : e.querySelectorAll(t) }(a, n), e = 0; e < t.length; e++)b(t[e]) || (s ? s.observe(t[e]) : (c(t[e]), f(t[e]), u(t[e]))) }, triggerLoad: function (t) { b(t) || (c(t), f(t), u(t)) }, observer: s } }
});
/* var observer = lozad();
observer.observe(); */

const observer = lozad(); // Ініціалізація lozad
observer.observe();




// Відкладене завантаження відео
//---------- початок ----------
document.addEventListener("DOMContentLoaded", function () {
  // Масив з інформацією про відео
  const videoData = [
    { containerId: 'video-container', videoSrc: 'https://www.youtube.com/embed/OblHMGHYza0?si=twSTX8_9vqoBAgXU' },
    { containerId: 'video-container1', videoSrc: 'https://www.youtube.com/embed/sjh0fUDfcJg?si=yo7XJp4lk-92gDK5&start=40' },
    { containerId: 'video-container2', videoSrc: 'https://www.youtube.com/embed/gp5415_1zHQ?si=o1C8JWfoIiUd6jL8&start=29' },
    { containerId: 'video-container3', videoSrc: 'https://www.youtube.com/embed/sW_2jFQqbsI?si=B8QAhfAL9PlHmwea' }
  ];

  // Додаємо відео в усі вказані контейнери
  videoData.forEach(({ containerId, videoSrc }) => {
    const videoContainer = document.getElementById(containerId);
    if (videoContainer) {
      const lazyVideo = document.createElement('iframe');
      lazyVideo.setAttribute('data-src', videoSrc);
      lazyVideo.setAttribute('allow', 'autoplay; encrypted-media');
      lazyVideo.setAttribute('allowfullscreen', '');
      lazyVideo.classList.add('lazy-video');
      videoContainer.appendChild(lazyVideo);
    }
  });
  // Функція, що відкладає завантаження відео
  function loadLazyVideo() {
    const lazyVideos = document.querySelectorAll('.lazy-video');
    lazyVideos.forEach(function (lazyVideo) {
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




//БІГУЧИЙ РЯДОК
Zepto(function ($) {
  $(window).on('load', function () {
    $.each($(".roller"), function (index, item) {
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

$(document).ready(function () {

  // Burger-main
  $('.drop-btn').click(function () {
    let dropdown = document.getElementById("dropdown");
    let container = document.querySelector(".blok");
    dropdown.classList.toggle("show");
    container.classList.toggle("change");
  });

  window.addEventListener("click", function (event) {
    let dropdowns = document.getElementsByClassName("nav-main-box");
    let containers = document.getElementsByClassName("blok");

    if (!event.target.matches('.drop-btn') && !event.target.matches('.bar1') && !event.target.matches('.bar2') && !event.target.matches('.bar3') && !event.target.matches('.blok')) {
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        let container = containers[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          container.classList.remove('change');
        }
      }
    }
  });

  // Scroll
  $('.scroll').click(function (e) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 10
    }, 1500);
  });

  //ВІДГУКИ
  $('#slider01').slick({
    dots: true,
    arrows: true,
    // autoplay: true,
    adaptiveHeight: true,
    speed: 2000,
    autoplaySpeed: 4000,
    // slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024, // Для ширини до 1024px
        settings: {
          slidesToShow: 2, // Показувати 2 слайди
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, // Для ширини до 768px
        settings: {
          slidesToShow: 1, // Показувати 1 слайд
          slidesToScroll: 1
        }
      }
    ],
    customPaging: function (slider, i) {
      return '<button class="dot"></button>'; // Генерація крапок
    }
  });

  //КЛУБ
  $('#slider02').slick({
    dots: true,
    arrows: true,
    // autoplay: true,
    // adaptiveHeight: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1440, // Для ширини до 1440px
        settings: {
          slidesToShow: 3, // Показувати 3 слайди
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024, // Для ширини до 1024px
        settings: {
          slidesToShow: 2, // Показувати 2 слайди
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, // Для ширини до 768px
        settings: {
          slidesToShow: 1, // Показувати 1 слайд
          slidesToScroll: 1
        }
      }
    ],
    customPaging: function (slider, i) {
      return '<button class="dot"></button>'; // Генерація крапок
    }
  });

  //головний слайдер фото
  $('#slider1').slick({
    dots: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true
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


  //accardion
  const accordions = document.querySelectorAll(".accordion");
  const contents = document.querySelectorAll(".accordion-content");
  const arrows = document.querySelectorAll(".arrow");
  const textColor1 = document.querySelectorAll(".accordion");
  const textColor2 = document.querySelectorAll(".tc");
  // const bgArrows = document.querySelectorAll(".bg-arrow");
  const bgArrows = document.querySelectorAll(".answers-border ");

  // Функція для зміни стилів активного елемента
  const setActiveStyle = (index) => {

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

  // Додали обробник кліку на всі кнопки акордеону
  accordions.forEach((accordion, i) => {
    accordion.addEventListener("click", () => active(contents[i], i));
  });


  //ТАЙМЕР ЦІНИ
  const timers = document.querySelectorAll('.timer');

  timers.forEach((timer) => {
    const hoursDisplay = timer.querySelector('.hours span');
    const minutesDisplay = timer.querySelector('.minutes span');
    const secondsDisplay = timer.querySelector('.seconds span');

    function getTimeRemaining() {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0); // Наступна опівніч
      const timeRemaining = Math.floor((midnight - now) / 1000);
      return timeRemaining;
    }

    function updateTimerDisplay(timeRemaining) {
      const hours = Math.floor(timeRemaining / 3600);
      const minutes = Math.floor((timeRemaining % 3600) / 60);
      const seconds = timeRemaining % 60;

      hoursDisplay.textContent = hours.toString().padStart(2, '0');
      minutesDisplay.textContent = minutes.toString().padStart(2, '0');
      secondsDisplay.textContent = seconds.toString().padStart(2, '0');
    }

    function updateTimer() {
      const timeRemaining = getTimeRemaining();
      updateTimerDisplay(timeRemaining);
    }

    function startTimer() {
      updateTimer();
      setInterval(updateTimer, 1000);
    }

    startTimer();
  });


})


$('.reviews-slider, .club-slider, .speaker-slider').on('init reInit afterChange', function (event, slick, currentSlide) {
  const totalDots = 5; // Скільки крапок показати
  const $slider = $(this); // Поточний слайдер
  const $dots = $slider.find('.slick-dots li'); // Крапки цього слайдера
  const current = currentSlide || 0;

  $dots.each(function (index) {
    if (index >= current - Math.floor(totalDots / 2) && index <= current + Math.floor(totalDots / 2)) {
      $(this).show(); // Показуємо крапки
    } else {
      $(this).hide(); // Ховаємо зайві крапки
    }
  });
});

// коли використовується "adaptiveHeight: true" текст на сторінці не "тремтить"
$('#slider01.reviews-slider').on('setPosition', function () {
  const slickList = $(this).find('.slick-list');
  slickList.height(slickList.height()); // Фіксує висоту
});
