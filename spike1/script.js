$(document).ready(function() {
    $(".slide-toggle").click(function() {
        $(this).next(".content").slideToggle(250);
        if($(this).text() == 'Expand') {
            $(this).text('Collapse');
        } else {
            $(this).text('Expand');
        }
    });
  });
  