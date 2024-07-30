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


/* // POPUP-вікно(fancybox) для 3-ох різних кнопок ---ПОЧАТОК---
function selectTariff(tariff, ...hideBlocks) {
  const popup = document.getElementById('popup');
  const blocksToHide = ['btn-1', 'btn-2', 'btn-3'];
  
  blocksToHide.forEach(block => {
    document.querySelectorAll(`.${block}`).forEach(element => {
      element.style.display = hideBlocks.includes(block) ? 'none' : 'block';
    });
  });
  
  // Відкриття popup (для прикладу використано Fancybox, змініть при необхідності)
  $.fancybox.open({
    src: '#popup',
    type: 'inline',
    opts: {
          afterClose: function() {
            // Закриття залишкових елементів після закриття
            $.fancybox.destroy();
          }
        }
      });
    }
    
    // Переконатися, що всі елементи Fancybox закриті під час завантаження сторінки
    $(document).ready(function() {
      $.fancybox.destroy();
    });
    // POPUP-вікно(fancybox) для 3-ох різних кнопок ---КІНЕЦЬ--- */




 $( document ).ready(function() {

  // Burger-main
  $('.drop-btn').click(function() {
    let dropdown = document.getElementById("dropdown");
    let container = document.querySelector(".blok");
    dropdown.classList.toggle("show");
    container.classList.toggle("change");
  });

  window.addEventListener("click", function(event) {
    let dropdowns = document.getElementsByClassName("nav-main-box");
    let containers = document.getElementsByClassName("blok");

    if (!event.target.matches('.drop-btn') && !event.target.matches('.bar1') && !event.target.matches('.bar2') && !event.target.matches('.bar3') && !event.target.matches('.blok')) {
      for (let i = 0; i <dropdowns.length; i++) {
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

  //головний слайдер фото
  $('#slider1').slick({
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
    lazyLoad: 'ondemand',
    dots: false,
    speed: 1000,
    slidesToShow: 3,
    // adaptiveHeight: true,//
    arrows: true,
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
    // Спочатку змінимо стилі всіх елементів .bg-arrow
    /* textColor1.forEach((textColor1, i) => {
      if (i === index) {
        textColor1.style.color = "#fff";
      } else {
        textColor1.style.color = "#222";
      }
    });

    textColor2.forEach((textColor2, i) => {
      if (i === index) {
        textColor2.style.color = "#fff";
      } else {
        textColor2.style.color = "#222";
      }
    }); */

    bgArrows.forEach((bgArrow, i) => {
      if (i === index) {
        bgArrow.style.backgroundColor = "#DAE5FD";
      } else {
        bgArrow.style.backgroundColor = "#F0F5FE";
      }
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

  // Додали обробник кліку на всі кнопки акордеону
  accordions.forEach((accordion, i) => {
    accordion.addEventListener("click", () => active(contents[i], i));
  });


  //ТАЙМЕР ЦІНИ ДО ПЕВНОЇ ДАТИ
  const timers = document.querySelectorAll('.timer');

  timers.forEach((timer) => {
    const targetDate = new Date(timer.getAttribute('data-date'));

    const daysDisplay = timer.querySelector('.days span');
    const hoursDisplay = timer.querySelector('.hours span');
    const minutesDisplay = timer.querySelector('.minutes span');
    const secondsDisplay = timer.querySelector('.seconds span');

    function updateTimer() {
      const now = new Date();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
          daysDisplay.textContent = '00';
          hoursDisplay.textContent = '00';
          minutesDisplay.textContent = '00';
          secondsDisplay.textContent = '00';
          return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      daysDisplay.textContent = days.toString().padStart(2, '0');
      hoursDisplay.textContent = hours.toString().padStart(2, '0');
      minutesDisplay.textContent = minutes.toString().padStart(2, '0');
      secondsDisplay.textContent = seconds.toString().padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  });


})