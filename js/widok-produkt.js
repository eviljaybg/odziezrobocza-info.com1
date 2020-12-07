$(function() {
    $("select#select_kolor").change(function() {
        eval($(this).val());
    });

    var indexUrl = $('#index-stan').attr('url');
    if (indexUrl.length > 20) {
        doAjax(indexUrl, '#stan', null);
    }

});

function pokazZdjecie(zdjecie, powiekszenie, url) {
    $("#zdjecie-big img").attr("src", zdjecie);
    $("#zdjecie-big a").attr("href", powiekszenie);
    if ('null' == url) {
        $("#stan").html('');
    } else {
        doAjax(url, '#stan', null);
    }
}