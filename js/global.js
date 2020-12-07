$(function () {

    $('[data-toggle=offcanvas]').click(function () {
        $('.row-offcanvas').toggleClass('active');
    });

    $("img.lazy").lazyload();

    $('#szukane').typeahead(
            {
                ajax: "/Ajax/szukaj"
            }
    );

    $('span.email').each(function () {
        var subject = $(this).attr('subject');
        var at = / at /;
        var dot = / dot /g;
        var addr = $(this).text().replace(at, "@").replace(dot, ".");
        if (null != subject) {
            $(this).after('<a href="mailto:' + addr + '?subject=' + subject + '" title="' + subject + '">' + addr + '</a>');
        } else {
            $(this).after('<a href="mailto:' + addr + '" title="' + addr + '">' + addr + '</a>');
        }
        $(this).remove();
    });

    console.log($.cookie("cookie"));
    if ($.cookie("cookie") == '1') {
        $('#cookie-div').hide();
    }

    $('#cookie-button').click(function (event) {
        event.preventDefault();
        $('#cookie-div').fadeOut('slow');
        $.cookie("cookie", "1", {expires: 365});
    });
});
