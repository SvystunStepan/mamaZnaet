

//ВІДКЛАДАННЯ ЗАКАДРОВИХ ФОТО
// lozad.js - v1.9.0 - 2019-02-09
// https://github.com/ApoorvSaxena/lozad.js
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.lozad = e() }(this, function () {
  "use strict"; var g = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var r = arguments[e]; for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]) } return t }, n = "undefined" != typeof document && document.documentMode, l = { rootMargin: "0px", threshold: 0, load: function (t) { if ("picture" === t.nodeName.toLowerCase()) { var e = document.createElement("img"); n && t.getAttribute("data-iesrc") && (e.src = t.getAttribute("data-iesrc")), t.getAttribute("data-alt") && (e.alt = t.getAttribute("data-alt")), t.appendChild(e) } if ("video" === t.nodeName.toLowerCase() && !t.getAttribute("data-src") && t.children) { for (var r = t.children, o = void 0, a = 0; a <= r.length - 1; a++)(o = r[a].getAttribute("data-src")) && (r[a].src = o); t.load() } t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")), t.getAttribute("data-srcset") && t.setAttribute("srcset", t.getAttribute("data-srcset")), t.getAttribute("data-background-image") && (t.style.backgroundImage = "url('" + t.getAttribute("data-background-image") + "')"), t.getAttribute("data-toggle-class") && t.classList.toggle(t.getAttribute("data-toggle-class")) }, loaded: function () { } };
  // Detect IE browser
  function f(t) { t.setAttribute("data-loaded", !0) } var b = function (t) { return "true" === t.getAttribute("data-loaded") }; return function () { var r, o, a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".lozad", t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, e = g({}, l, t), n = e.root, i = e.rootMargin, d = e.threshold, c = e.load, u = e.loaded, s = void 0; return window.IntersectionObserver && (s = new IntersectionObserver((r = c, o = u, function (t, e) { t.forEach(function (t) { (0 < t.intersectionRatio || t.isIntersecting) && (e.unobserve(t.target), b(t.target) || (r(t.target), f(t.target), o(t.target))) }) }), { root: n, rootMargin: i, threshold: d })), { observe: function () { for (var t = function (t) { var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document; return t instanceof Element ? [t] : t instanceof NodeList ? t : e.querySelectorAll(t) }(a, n), e = 0; e < t.length; e++)b(t[e]) || (s ? s.observe(t[e]) : (c(t[e]), f(t[e]), u(t[e]))) }, triggerLoad: function (t) { b(t) || (c(t), f(t), u(t)) }, observer: s } }
});

var observer = lozad();
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
document.addEventListener("DOMContentLoaded", function () {
  var videoContainer = document.getElementById('video-container');
  var lazyVideo = document.createElement('iframe');
  lazyVideo.setAttribute('data-src', 'https://www.youtube.com/embed/S1f1AsTqDWQ?si=8md357rg5plRc_Hx');
  lazyVideo.setAttribute('allow', 'autoplay; encrypted-media');
  lazyVideo.setAttribute('allowfullscreen', '');
  lazyVideo.classList.add('lazy-video');
  videoContainer.appendChild(lazyVideo);

  // Функція, що відкладає завантаження відео
  function loadLazyVideo() {
    var lazyVideos = document.querySelectorAll('.lazy-video');
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


$(document).ready(function () {
  // Scroll
  $('.scroll').click(function (e) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 10
    }, 1500);
  });


  // Таймер відліку до 00:00
  const timers = document.querySelectorAll('.timer');

  timers.forEach((timer) => {
    const hoursDisplay = timer.querySelector('.hours span');
    const minutesDisplay = timer.querySelector('.minutes span');
    const secondsDisplay = timer.querySelector('.seconds span');

    function getTimeUntilMidnight() {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setHours(24, 0, 0, 0); // Встановлюємо на 00:00 наступного дня

      const timeDifference = tomorrow - now;
      return Math.floor(timeDifference / 1000);
    }

    function updateTimerDisplay() {
      let remainingTime = getTimeUntilMidnight();

      if (remainingTime <= 0) {
        hoursDisplay.textContent = '00';
        minutesDisplay.textContent = '00';
        secondsDisplay.textContent = '00';
        return;
      }

      const hours = Math.floor((remainingTime % 86400) / 3600);
      const minutes = Math.floor((remainingTime % 3600) / 60);
      const seconds = remainingTime % 60;

      hoursDisplay.textContent = hours.toString().padStart(2, '0');
      minutesDisplay.textContent = minutes.toString().padStart(2, '0');
      secondsDisplay.textContent = seconds.toString().padStart(2, '0');
    }

    setInterval(updateTimerDisplay, 1000);
  });


})

function toggleDetails(button) {
  const details = button.parentNode.parentNode.querySelector(".course-details");
  const icon = button.querySelector("img");

  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";
    icon.src = "images/arrow-up.svg";
  } else {
    details.style.display = "none";
    icon.src = "images/arrow-down.svg";
  }
}

