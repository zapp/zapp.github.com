$(function() {
  var embedRegEx   = /^https?:\/\/(\w+\.)?(youtube.com|vimeo.com)\/.+/;

  var resizeEmbeds = function() {
    $('iframe').each(function(index, el) {
      if (el.src && el.src.match(embedRegEx)) {
        var width     = parseInt(el.width, 10)
          , height    = parseInt(el.height, 10)
          , ratio     = height / width
          , newHeight = ratio * $(el).closest('.columns').width();
        $(el).height(newHeight);
      }
    })
  };

  $(window).bind('resize', resizeEmbeds);

  resizeEmbeds();
})

