document.addEventListener('DOMContentLoaded', function (event) {
  var dataText = ["Desenvolvimento Web", "Design Responsivo", "E-mail Marketing", "Marketing Digital"];

  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      document.querySelector("h2").innerHTML = text.substring(0, i + 1) + '<span class="blink" aria-hidden="true">_</span>';

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 3000);
    }
  }

  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 3000);
    }
    if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }
  StartTextAnimation(0);
});
//FILTRO TRABALHOS
$(function () {
  var filterList = {
    init: function () {
      $('#portfoliolist').mixItUp({
        selectors: {
          target: '.portfolio',
          filter: '.filter'
        },
        load: {
          filter: '.sites, .email, .social, .grafico'
        }
      });
    }
  };
  filterList.init();
});

// MENU FIXED
$(document).ready(function () {
  var altura = $('.menu').offset().top;

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > altura) {
      $('.menu').addClass('menu-fixed');
    } else {
      $('.menu').removeClass('menu-fixed');
    }
  });

});

// MENU RESPONSIVO
$(function () {
  menu = $('nav ul');

  $('#openup').on('click', function (e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function () {
    var w = $(this).width();
    if (w > 730 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', function (e) {
    var w = $(window).width();
    if (w < 730) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());
});

// PROGRESS - QUEM SOU
$("document").ready(function () {

  $('.progress').each(function () {
    var percent = $(this).attr('id');
    $(this).animate({
      width: percent
    }, 1000);
  });
});

// SCROLL PAGINA

// Cache selectors
var lastId,
  topMenu = $("#menu"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find('a'),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent().removeClass("active")
      .end().filter("[href='#" + id + "']").parent().addClass("active");
  }
});

// TITLE TAB WINDOW

$(function() {
	// Get page title
  	var pageTitle = $("title").text();

	// Change page title on blur
	$(window).blur(function() {
	  $("title").text("Hey! Não se vá... - " + pageTitle);
	});

	// Change page title back on focus
	$(window).focus(function() {
	  $("title").text(pageTitle);
	});
});

