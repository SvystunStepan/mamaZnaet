//ВІДКЛАДАННЯ ЗАКАДРОВИХ ФОТО
// lozad.js - v1.9.0 - 2019-02-09
// https://github.com/ApoorvSaxena/lozad.js
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.lozad = e() }(this, function () {
  "use strict"; var g = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var r = arguments[e]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]) } return t }, n = "undefined" != typeof document && document.documentMode, l = { rootMargin: "0px", threshold: 0, load: function (t) { if ("picture" === t.nodeName.toLowerCase()) { var e = document.createElement("img"); n && t.getAttribute("data-iesrc") && (e.src = t.getAttribute("data-iesrc")), t.getAttribute("data-alt") && (e.alt = t.getAttribute("data-alt")), t.appendChild(e) } if ("video" === t.nodeName.toLowerCase() && !t.getAttribute("data-src") && t.children) { for (var r = t.children, o = void 0, a = 0; a <= r.length - 1; a++)(o = r[a].getAttribute("data-src")) && (r[a].src = o); t.load() } t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")), t.getAttribute("data-srcset") && t.setAttribute("srcset", t.getAttribute("data-srcset")), t.getAttribute("data-background-image") && (t.style.backgroundImage = "url('" + t.getAttribute("data-background-image") + "')"), t.getAttribute("data-toggle-class") && t.classList.toggle(t.getAttribute("data-toggle-class")) }, loaded: function () { } };
  // Detect IE browser
  function f(t) { t.setAttribute("data-loaded", !0) } var b = function (t) { return "true" === t.getAttribute("data-loaded") }; return function () { var r, o, a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".lozad", t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, e = g({}, l, t), n = e.root, i = e.rootMargin, d = e.threshold, c = e.load, u = e.loaded, s = void 0; return window.IntersectionObserver && (s = new IntersectionObserver((r = c, o = u, function (t, e) { t.forEach(function (t) { (0 < t.intersectionRatio || t.isIntersecting) && (e.unobserve(t.target), b(t.target) || (r(t.target), f(t.target), o(t.target))) }) }), { root: n, rootMargin: i, threshold: d })), { observe: function () { for (var t = function (t) { var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document; return t instanceof Element ? [t] : t instanceof NodeList ? t : e.querySelectorAll(t) }(a, n), e = 0; e < t.length; e++)b(t[e]) || (s ? s.observe(t[e]) : (c(t[e]), f(t[e]), u(t[e]))) }, triggerLoad: function (t) { b(t) || (c(t), f(t), u(t)) }, observer: s } }
});
const observer = lozad(); // Ініціалізація lozad
observer.observe();


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
          duration: 10000
        },
        loop: true,
        easing: 'linear'
      });
    });
  })
});

//АНІМАЦІЯ
!function (a) { a.fn.viewportChecker = function (b) { var c = { classToAdd: "visible", classToRemove: "invisible", classToAddForFullView: "full-visible", removeClassAfterAnimation: !1, offset: 100, repeat: !1, invertBottomOffset: !0, callbackFunction: function (a, b) { }, scrollHorizontal: !1, scrollBox: window }; a.extend(c, b); var d = this, e = { height: a(c.scrollBox).height(), width: a(c.scrollBox).width() }; return this.checkElements = function () { var b, f; c.scrollHorizontal ? (b = Math.max(a("html").scrollLeft(), a("body").scrollLeft(), a(window).scrollLeft()), f = b + e.width) : (b = Math.max(a("html").scrollTop(), a("body").scrollTop(), a(window).scrollTop()), f = b + e.height), d.each(function () { var d = a(this), g = {}, h = {}; if (d.data("vp-add-class") && (h.classToAdd = d.data("vp-add-class")), d.data("vp-remove-class") && (h.classToRemove = d.data("vp-remove-class")), d.data("vp-add-class-full-view") && (h.classToAddForFullView = d.data("vp-add-class-full-view")), d.data("vp-keep-add-class") && (h.removeClassAfterAnimation = d.data("vp-remove-after-animation")), d.data("vp-offset") && (h.offset = d.data("vp-offset")), d.data("vp-repeat") && (h.repeat = d.data("vp-repeat")), d.data("vp-scrollHorizontal") && (h.scrollHorizontal = d.data("vp-scrollHorizontal")), d.data("vp-invertBottomOffset") && (h.scrollHorizontal = d.data("vp-invertBottomOffset")), a.extend(g, c), a.extend(g, h), !d.data("vp-animated") || g.repeat) { String(g.offset).indexOf("%") > 0 && (g.offset = parseInt(g.offset) / 100 * e.height); var i = g.scrollHorizontal ? d.offset().left : d.offset().top, j = g.scrollHorizontal ? i + d.width() : i + d.height(), k = Math.round(i) + g.offset, l = g.scrollHorizontal ? k + d.width() : k + d.height(); g.invertBottomOffset && (l -= 2 * g.offset), k < f && l > b ? (d.removeClass(g.classToRemove), d.addClass(g.classToAdd), g.callbackFunction(d, "add"), j <= f && i >= b ? d.addClass(g.classToAddForFullView) : d.removeClass(g.classToAddForFullView), d.data("vp-animated", !0), g.removeClassAfterAnimation && d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () { d.removeClass(g.classToAdd) })) : d.hasClass(g.classToAdd) && g.repeat && (d.removeClass(g.classToAdd + " " + g.classToAddForFullView), g.callbackFunction(d, "remove"), d.data("vp-animated", !1)) } }) }, ("ontouchstart" in window || "onmsgesturechange" in window) && a(document).bind("touchmove MSPointerMove pointermove", this.checkElements), a(c.scrollBox).bind("load scroll", this.checkElements), a(window).resize(function (b) { e = { height: a(c.scrollBox).height(), width: a(c.scrollBox).width() }, d.checkElements() }), this.checkElements(), this } }(jQuery)

$(document).ready(function () {
  // Scroll
  $('.scroll').click(function (e) {
    e.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;

    $('html, body').animate({
      scrollTop: top - 10
    }, 1500);
  });



  //АНІМАЦІЯ
  $('.up').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInUp',
    offset: '20%'
  });
  $('.up-1').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-1 fadeInUp',
    offset: '20%'
  });
  $('.up-2').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-2 fadeInUp',
    offset: '20%'
  });
  $('.up-3').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-3 fadeInUp',
    offset: '20%'
  });
  $('.up-4').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-4 fadeInUp',
    offset: '20%'
  });
  $('.up-5').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-5 fadeInUp',
    offset: '0%'
  });
  $('.down').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInDown',
    offset: '0%'
  });
  $('.right').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInRight',
    offset: '20%'
  });
  $('.right-1').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-1 fadeInRight',
    offset: '20%'
  });
  $('.right-2').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-2 fadeInRight',
    offset: '20%'
  });
  $('.left').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInLeft',
    offset: '20%'
  });
  $('.left-1').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-1 fadeInLeft',
    offset: '20%'
  });
  $('.left-2').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-2 fadeInLeft',
    offset: '20%'
  });
  $('.in').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-2 fadeIn',
    offset: '10%'
  });
  $('.in-1').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-3 fadeIn',
    offset: '30%'
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
  $('.bounce-up-1').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-1 bounceInUp',
    offset: '20%'
  });
  $('.bounce-up-2').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-2 bounceInUp',
    offset: '20%'
  });
  $('.bounce-down').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated bounceInDown',
    offset: '1%'
  });
  $('.rotate').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated rotateIn',
    offset: '30%'
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
        breakpoint: 1200,
        settings: { slidesToShow: 3, slidesToScroll: 1, arrows: false }
      },
      {
        breakpoint: 1024, // Для ширини до 1024px
        settings: { slidesToShow: 2, slidesToScroll: 1, arrows: false }
      },
      {
        breakpoint: 768, // Для ширини до 768px
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false }
      }
    ],
    customPaging: function (slider, i) {
      return '<button class="dot"></button>'; // Генерація крапок
    }
  });


  // 1️⃣ Ініціалізація Slick
  $('#slider02').slick({
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    speed: 600,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3, slidesToScroll: 1, arrows: false }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, arrows: false }
      },
      {
        breakpoint: 991,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false }
      }
    ],
    customPaging: function (slider, i) {
      return '<button class="dot"></button>';
    }
  });
  // 2️⃣ Клік для запуску відео, зупинка інших
  $(document).on('click', '.video-wrapper', function () {
    const videoId = $(this).data('video');
    // Зупиняємо інші відео
    $('.video-wrapper').each(function () {
      if ($(this).find('iframe').length) {
        const otherVideoId = $(this).data('video');
        $(this).html(`
          <img src="https://img.youtube.com/vi/${otherVideoId}/hqdefault.jpg" alt="video thumbnail" loading="lazy">
          <button class="play-btn"></button>
        `);
      }
    });
    // Запускаємо вибране відео
    $(this).html(`
      <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1"
        allow="autoplay; encrypted-media"
        allowfullscreen=""
        style="width:100%; height:100%; border-radius:10px;">
      </iframe>
    `);
  });
  // 3️⃣ Зупинка відео при гортанні слайдера
  $('#slider02').on('beforeChange', function () {
    $('.video-wrapper').each(function () {
      if ($(this).find('iframe').length) {
        const videoId = $(this).data('video');
        $(this).html(`
          <img src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg" alt="video thumbnail" loading="lazy">
          <button class="play-btn"></button>
        `);
      }
    });
  });

  /* 
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
    }); */


  // Таймер 4 дні, що оновлюється щодня опівночі за Польщею
  const timers = document.querySelectorAll('.timer');
  timers.forEach((timer) => {
    const daysDisplay = timer.querySelector('.days span');
    const hoursDisplay = timer.querySelector('.hours span');
    const minutesDisplay = timer.querySelector('.minutes span');
    const secondsDisplay = timer.querySelector('.seconds span');

    const fourDaysInSeconds = 4 * 24 * 60 * 60; // 345600

    function getPolandNow() {
      const polandDate = new Date().toLocaleString("en-US", { timeZone: "Europe/Warsaw" });
      return new Date(polandDate);
    }

    function getTodayMidnightPoland() {
      const now = getPolandNow();
      return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
    }

    function getTimeRemaining() {
      const now = getPolandNow();
      const cycleStart = getTodayMidnightPoland(); // Щодня опівночі

      const elapsedSeconds = Math.floor((now - cycleStart) / 1000);
      const timeRemaining = fourDaysInSeconds - elapsedSeconds;

      return timeRemaining > 0 ? timeRemaining : 0;
    }

    function updateTimerDisplay(timeRemaining) {
      const days = Math.floor(timeRemaining / (24 * 60 * 60));
      const hours = Math.floor((timeRemaining % (24 * 60 * 60)) / 3600);
      const minutes = Math.floor((timeRemaining % 3600) / 60);
      const seconds = timeRemaining % 60;

      daysDisplay.textContent = days.toString().padStart(2, '0');
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



