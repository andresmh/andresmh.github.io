$(document).ready(function () {
  $("#portrait a").hover(function () {
    var thumbOver = $(this).find("img").attr("src");
    $(this).css({
      'background': 'url(' + thumbOver + ') no-repeat center bottom'
    });
    $(this).find("span").stop().fadeTo('normal', 0, function () {
      $(this).hide()
    });
  }, function () {
    $(this).find("span").stop().fadeTo('normal', 1).show();
  });

  function filterPath(string) {
    return string.replace(/^\//, '').replace(/(index|default).[a-zA-Z]{3,4}$/, '').replace(/\/$/, '');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
  $('a[href*=#]').each(function () {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
      var $target = $(this.hash),
        target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function (event) {
          event.preventDefault();
          $(scrollElem).animate({
            scrollTop: targetOffset
          }, 400, function () {
            location.hash = target;
          });
        });
      }
    }
  });

  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i < argLength; i++) {
      var el = arguments[i],
        $scrollElement = $(el);
      if ($scrollElement.scrollTop() > 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop() > 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
});