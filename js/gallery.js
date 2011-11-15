$(function() {
  $('.gallery li a').bind('click', function(event) {
    $(event.target)
      .closest('.gallery')
      .find('a.active')
      .toggleClass('active');

    var previewPath  = $(event.target).closest('a').data('preview-url');
    var originalPath = $(event.target).closest('a').attr('href');

    $(event.target)
      .closest('.gallery')
      .find('.display-wrapper img')
      .attr({'src': previewPath});

    $(event.target)
      .closest('.gallery')
      .find('.display-wrapper a')
      .attr({'href': originalPath});

    $(event.target).closest('a').toggleClass('active');

    return false;
  });
});
