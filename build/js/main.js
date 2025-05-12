//переопределение дефолтных настроек fancybox
$.fancybox.defaults.hash = false;
$.fancybox.defaults.smallBtn = false;
$.fancybox.defaults.toolbar = false;
$.fancybox.defaults.touch = false;

function menuClose() {
  $('.js-menu-toggler').removeClass('is-active');
  $('.js-menu-toggler').find('use').attr('xlink:href', 'images/sprite.svg#menu');
  $('.personal-menu').removeClass('is-open');
  setTimeout(function() {
    $('.personal-menu').slideUp();
    $('body').removeClass('overflow');
    $('.personal__left').removeClass('is-open');
  }, 300);
}

//тогглер главного меню на мобильных
$(document).on('click', '.js-menu-toggler', function () {
  let _this = $(this);
  if(!_this.hasClass('is-active')) {
    _this.addClass('is-active');
    _this.find('use').attr('xlink:href', 'images/sprite.svg#close');
    $('body').addClass('overflow');
    $('.personal__left').addClass('is-open');
    $('.personal-menu').css('display', 'flex');
    setTimeout(function() {
      $('.personal-menu').addClass('is-open');
    }, 300);
  } else {
    menuClose();
  }

  return false;
});

//тогглер пароля
$(document).on('click', '.js-toggle-password', function () {
  if($(this).hasClass('is-toggled')) {
    $(this).closest('.input').find('input').attr('type', 'password');
    $(this).removeClass('is-toggled');
    $(this).attr('title', 'Показать символы');
    $(this).find('use').attr('xlink:href', 'images/sprite.svg#show_pass');
  } else {
    $(this).closest('.input').find('input').attr('type', 'text');
    $(this).addClass('is-toggled');
    $(this).attr('title', 'Скрыть символы');
    $(this).find('use').attr('xlink:href', 'images/sprite.svg#hide_pass');
  }

  return false;
});

$(document).ready(function () {
  //следящее меню
  if ($('.js-main-menu').length) {
    $('.js-main-menu').ddscrollSpy({
      highlightclass: 'is-active',
      scrolltopoffset: -120
    });
  }

  //тултипы
  tippy('.info-button', {
    theme: 'custom-dark',
    trigger: 'click',
    maxWidth: 360
  });

  //кастомный селект
  $('.js-select').each(function() {
    var $p = $(this).closest('.select-wrapper');
    $(this).select2({
      minimumResultsForSearch: Infinity,
      //dropdownPosition: 'below',
      dropdownParent: $p,
    });
	}).on("select2:open", function (e) {
    var $p = $(this).closest('.select-wrapper');
    $p.addClass('open');
	}).on("select2:close", function (e) {
    var $p = $(this).closest('.select-wrapper');
    $p.removeClass('open');
	});

  $('.js-calendar').each(function( index ) {
    console.log( index + ": " + $( this ).text() );
  });

  //календарь
  let dp = new AirDatepicker('.js-calendar-start', {
    onSelect({date}) {
      dp.hide();
    }
  });

  let dp_2 = new AirDatepicker('.js-calendar-end', {
    onSelect({date}) {
      dp_2.hide();
    }
  });
});

//закрытие fancybox
$(document).on('click', '.js-popup-closer', function () {
  $.fancybox.close();
  return false;
});

//открытие меню в личном кабинете на мобильных
$(document).on('click', '.js-personal-menu-opener', function () {
  $('body').addClass('overflow');
  $('.personal-menu').addClass('is-open');
  setTimeout(function() {
    $('.personal-menu__inner').addClass('is-open');
  }, 100);
  return false;
});

//закрытие меню в личном кабинете на мобильных
$(document).on('click', '.js-personal-menu-closer', function () {
  $('.personal-menu__inner').removeClass('is-open');
  setTimeout(function() {
    $('body').removeClass('overflow');
    $('.personal-menu').removeClass('is-open');
  }, 400);
  return false;
});

//аккордион
$(document).on('click', '.accordion__toggler', function () {
  $(this).closest('.accordion').toggleClass('is-open');
  $(this).closest('.accordion').find('.accordion__body').slideToggle();
  return false;
});

//табы
$(document).on('click', '.tabs-menu__link', function () {
  $(this).closest('.tabs').find('.tabs-menu__link.is-active').removeClass('is-active');
  $(this).addClass('is-active');

  $(this).closest('.tabs').find('.tab.is-active').removeClass('is-active');
  $(this).closest('.tabs').find('.tab[data-target="'+ $(this).attr('data-target') +'"]').addClass('is-active');
  return false;
});

//копирование текста
$(document).on("click", ".js-copy-text", function() {
  let _this = $(this);
  let text = _this.closest('.input').find('input').val();
  navigator.clipboard.writeText(text);
});
