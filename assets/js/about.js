$(document).ready(function () {
    $('.top_visual .twtwrap').on('scroll', function () {
        var targetTop = $(this).offset().top;
        console.log(targetTop);

        985
        if ( targetTop >= 985 ) {
            $(this).find('p').css({color: '#1C98D6'}).parent().attr({position: absolute, top: 985});
        }
    });
});