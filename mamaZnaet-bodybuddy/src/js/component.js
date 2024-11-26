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



$(document).ready(function () {

  // Функція для таймера
  function startTimer(timerId, duration) {
    const minutesElement = document.querySelector(`#${timerId} .minutes span`);
    const secondsElement = document.querySelector(`#${timerId} .seconds span`);
    const millisecondsElement = document.querySelector(`#${timerId} .milliseconds span`);

    let totalTime = duration * 60 * 2500; // тривалість в мілісекундах
    let startTime = Date.now();

    const updateTimer = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = totalTime - elapsedTime;

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        millisecondsElement.textContent = '000';
        return;
      }

      const minutes = Math.floor(remainingTime / (60 * 1000));
      const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
      const milliseconds = remainingTime % 1000;

      minutesElement.textContent = String(minutes).padStart(2, '0');
      secondsElement.textContent = String(seconds).padStart(2, '0');
      millisecondsElement.textContent = String(milliseconds).padStart(3, '0');
    };

    const timerInterval = setInterval(updateTimer, 10);
  }

  // Запуск таймерів
  startTimer("timer1", 2); // Таймер 1 на 2 хвилини
  startTimer("timer2", 2); // Таймер 2 на 2 хвилини


})