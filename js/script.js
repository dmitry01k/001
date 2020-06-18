
/*проверка на поддержку webp */
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});
/* //проверка на поддержку webp */


document.addEventListener('DOMContentLoaded', function () {
   /* Главный экран карусель */
   $("#main-news-slider").owlCarousel({
      items: 2,
      loop: true,
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      stagePadding: 0,
      margin: 30,
      nav: false,
      dots: true,
      responsive: {
         0: {
            items: 1,
            margin: 0,

         },
         630: {
            items: 1,
            margin: 0,
            center: true,
            stagePadding: 100,
            margin: 30,


         },
         770: {
            items: 2,
            margin: 15,
            center: true,


         },
         1165: {
            items: 2,
         },
      }


   });

   $("#main-big-slider").owlCarousel({
      items: 1,
      nav: true,
      navText: [],
      loop: true,
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true
   });

   $("#main-bestseller-slider").owlCarousel({
      items: 4,
      nav: true,
      navText: [],
      loop: true,
      smartSpeed: 1000,
      dots: false,
      responsive: {
         0: {
            items: 1,
         },
         450: {
            items: 1,
            stagePadding: 80,

         },
         500: {
            items: 1,
            stagePadding: 100,

         },
         560: {
            items: 2,
         },
         900: {
            items: 3,
            center: true,

         },
         1170: {
            items: 4,

         }
      },

   });

   $("#main-stock-slider").owlCarousel({
      items: 4,
      nav: true,
      navText: [],
      loop: true,
      smartSpeed: 1000,
      dots: false,
      responsive: {
         0: {
            items: 1,
         },
         450: {
            items: 1,
            stagePadding: 80,
         },
         500: {
            items: 1,
            stagePadding: 100,
         },
         560: {
            items: 2,
         },
         900: {
            items: 3,
            center: true,
         },
         1170: {
            items: 4,
         }
      },
   });
   /* Главный экран карусель */


   /* Каталог товаров хедер десктоп */
   let menu = document.querySelector('.header-catalog');
   let catalog = document.querySelector('.header-nav__list__catalog');
   let catalogBig = document.querySelector('.header-nav__list__catalog-wrapper');

   catalogBig.addEventListener('mouseout', function (event) {
      menu.classList.add('hidden');
   });
   catalogBig.addEventListener('mouseover', function (event) {
      menu.classList.remove('hidden');
   });
   /* /Каталог товаров хедер десктоп */


   /* Выравнивание по высоте главного блока с товарами (Акции, Хиты продаж)*/
   (function () {
      var maxHeight = 0;
      $('.carousel-bestseller-card__title ').each(function () {
         if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
         }
      });
      $('.carousel-bestseller-card__title').each(function () {
         $(this).css('height', maxHeight);
      });
   })();

   /* /Выравнивание по высоте главного блока с товарами (Акции, Хиты продаж)*/


   /* Фиксированый хедер */
   $(document).scroll(function () {
      if ($(this).scrollTop() > 0) {
         $("#header-mobile-wrapper").addClass("header-small");


      } else if ($(this).scrollTop() < 1) {
         $("#header-mobile-wrapper").removeClass("header-small");
      }
   });
   /* /Фиксированый хедер */


   /* Бургер */
   $('.burger-wrap').on('click', function (e) {
      e.preventDefault();
      $('.sidebar-menu').toggleClass('sidebar-menu-hidden');
      $('body').toggleClass('lock');
   });
   /* /Бургер */


   /* Поиск мобильная версия */
   $('.mobile-search').on('click', function (e) {
      e.preventDefault();
      $('.search-container').toggleClass('hidden-search');
   });
   /* Поиск мобильная версия */


   /* Телефонов мобильная версия*/
   $('#mobile-phone-svg').on('click', function (e) {
      e.preventDefault();
      $('.mobile-phone-block').toggleClass('hidden');
   });
   /* Телефонов  мобильная версия*/



   !function (e) { "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) { for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;)++n; return Boolean(o[n]) }), "function" != typeof e.closest && (e.closest = function (e) { for (var t = this; t && 1 === t.nodeType;) { if (t.matches(e)) return t; t = t.parentNode } return null }) }(window.Element.prototype);



/* Записываем в переменные массив элементов-кнопок и подложку.
   Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
var modalButtons = document.querySelectorAll('.js-open-modal'),
   overlay = document.querySelector('.js-overlay-modal'),
   closeButtons = document.querySelectorAll('.js-modal-close');


/* Перебираем массив кнопок */
modalButtons.forEach(function (item) {

   /* Назначаем каждой кнопке обработчик клика */
   item.addEventListener('click', function (e) {

      /* Предотвращаем стандартное действие элемента. Так как кнопку разные
         люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
         Нужно подстраховаться. */
      e.preventDefault();

      /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
         и будем искать модальное окно с таким же атрибутом. */
      var modalId = this.getAttribute('data-modal'),
         modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


      /* После того как нашли нужное модальное окно, добавим классы
         подложке и окну чтобы показать их. */
      modalElem.classList.add('active');
      overlay.classList.add('active');
   }); // end click

}); // end foreach


closeButtons.forEach(function (item) {

   item.addEventListener('click', function (e) {
      var parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
      overlay.classList.remove('active');
   });

}); // end foreach


document.body.addEventListener('keyup', function (e) {
   var key = e.keyCode;

   if (key == 27) {

      document.querySelector('.modal.active').classList.remove('active');
      document.querySelector('.overlay').classList.remove('active');
   };
}, false);


overlay.addEventListener('click', function () {
   document.querySelector('.modal.active').classList.remove('active');
   this.classList.remove('active');
});







   /* Табы на jQuery */
$(".payment-delivery-tabs-block>a").click(function () {

   $(".payment-delivery-tabs-block>a").removeClass("acive");
   $(this).addClass("acive");

   $(".payment-delivery-main-block>div").hide();
   t_content = $(this).attr("href");
   $(t_content).show();

   return false
})
$(".payment-delivery-tabs-block>a:first").trigger("click");
/* /Табы на jQuery */



});





