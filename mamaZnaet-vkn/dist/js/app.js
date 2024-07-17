$(document).ready(function() {
  // сховати-показати ВІДЕО-БЛОКИ
  let currentDate2 = new Date();
  let targetDate2 = new Date("2023-08-17T14:37:00"); // субота 21:00

  if (currentDate2.getTime() >= targetDate2.getTime()) {
    // document.getElementById("video-1").style.display = "none";
    // document.getElementById("video-2").style.display = "none";
    document.getElementById("video-3").style.display = "block";
  }
});

// Функція для оновлення ціни відносно дати
function updateTextBasedOnDateAndTime(currentDate, datePrices) {
  let text = ""; // Текст за замовчуванням, якщо не співпадає з жодною датою
  for (const [date, price] of datePrices) {
    if (currentDate >= date) {
      text = price;
    } else {
      break;
    }
  }
  return text;
}
const currentDate = new Date();
const samostDates = [
  [new Date('2023-07-25 19:00'), "2299\u00A0₴"],
  [new Date('2023-07-26 19:00'), "2399\u00A0₴"],
  [new Date('2023-07-27 19:00'), "2499\u00A0₴"],
  [new Date('2023-07-28 21:00'), "2699\u00A0₴"],
  [new Date('2023-07-30 21:00'), "5000\u00A0₴"]
];
const psyhDates = [
  [new Date('2023-07-25 19:00'), "2999\u00A0₴"],
  [new Date('2023-07-26 19:00'), "3099\u00A0₴"],
  [new Date('2023-07-27 19:00'), "3199\u00A0₴"],
  [new Date('2023-07-28 21:00'), "3499\u00A0₴"],
  [new Date('2023-07-30 21:00'), "6400\u00A0₴"]
];
const maxDates = [
  [new Date('2023-07-25 19:00'), "3499\u00A0₴"],
  [new Date('2023-07-26 19:00'), "3599\u00A0₴"],
  [new Date('2023-07-27 19:00'), "3699\u00A0₴"],
  [new Date('2023-07-28 21:00'), "3999\u00A0₴"],
  [new Date('2023-07-30 21:00'), "7000\u00A0₴"] // ці дати ОДНАКОВІ
];
const element1 = document.getElementById("todaySamost");
element1.textContent = updateTextBasedOnDateAndTime(currentDate, samostDates);
const element2 = document.getElementById("todayPsyh");
element2.textContent = updateTextBasedOnDateAndTime(currentDate, psyhDates);
const element3 = document.getElementById("todayMax");
element3.textContent = updateTextBasedOnDateAndTime(currentDate, maxDates);

// зняти закреслення з "Повна ціна *000 ₴"
let currentDate1 = new Date();
let targetDate = new Date("2023-07-30T21:00:00"); // ці дати ОДНАКОВІ
if (currentDate1.getTime() >= targetDate.getTime()) {
  document.getElementById("price-update1").style.textDecoration = "none";
  document.getElementById("price-update2").style.textDecoration = "none";
  document.getElementById("price-update3").style.textDecoration = "none";
}


!function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()};return this.checkElements=function(){var b,f;c.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),f=b+e.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),f=b+e.height),d.each(function(){var d=a(this),g={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(g,c),a.extend(g,h),!d.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*e.height);var i=g.scrollHorizontal?d.offset().left:d.offset().top,j=g.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+d.width():k+d.height();g.invertBottomOffset&&(l-=2*g.offset),k<f&&l>b?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),j<=f&&i>=b?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data("vp-animated",!0),g.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);

$( document ).ready(function() {

  $('.head').addClass("hidden_animation").viewportChecker({
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

  //фіксована кнопка desctop
  window.addEventListener('scroll', function() {
    let a = document.querySelector('.banner-float-btn');
    let priceBlock = document.getElementById('price');
    let bannerBlock = document.getElementById('banner');
    let scrollY = window.scrollY;
    let priceBlockTop = priceBlock.offsetTop;
    let priceBlockHeight = priceBlock.offsetHeight;
    let priceBlockBottom = priceBlockTop + priceBlockHeight;
    let bannerBlockTop = bannerBlock.offsetTop;
    let bannerBlockHeight = bannerBlock.offsetHeight;
    let bannerBlockBottom = bannerBlockTop + bannerBlockHeight;

    //стає на місце при знаходженні на блоці "banner"
    if (scrollY < bannerBlockBottom) {
      a.style.position = 'static';
      a.style.bottom = '0px';
      a.style.left = '0';
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
      scrollTop: top - -20
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
})