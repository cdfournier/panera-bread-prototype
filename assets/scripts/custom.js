
//Mobile Navigation
$("#open-nav").animatedModal({
  modalTarget:'nav-modal',
  animatedIn:'slideInLeft',
  animatedOut:'slideOutLeft',
  color:'#ffffff'
});

//Pin Order Setup Bar
$.fn.isOnScreen = function () {
    var win = $(window);
    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

$(window).scroll(function () {
    if ($('#footer').isOnScreen() == true) {
        $('.order-setup').addClass('expand');
    }
    else{
        $('.order-setup').removeClass('expand');
    }
});

// Adaptive Color
var stickyOffset = $("#btn-open-modal.open-nav-modal, #nav-color li.menu-item a, nav#a11y-menu ul.nav.level-1 li a, .user a.btn-primary").offset();
var $contentDivs = $(".bg");
$(document).scroll(function() {
  $contentDivs.each(function(k) {
    var _thisOffset = $(this).offset();
    var _actPosition = _thisOffset.top - $(window).scrollTop();
    if (_actPosition < stickyOffset.top && _actPosition + $(this).height() > 0) {
      $("#btn-open-modal.open-nav-modal, #nav-color li.menu-item a, nav#a11y-menu ul.nav.level-1 li a, .user a.btn-sign-in, .user.is-authenticated .name a, .user.is-authenticated .rewards a, .user.is-authenticated .name a span.icon-dribbble, .user.is-authenticated .rewards a span.icon-award").removeClass("light dark").addClass($(this).hasClass("light") ? "light" : "dark");
      return false;
    }
  });
});
