$(document).ready(function () {
    $(window).on('scroll', function () {
        var targetTop = $(this).scrollTop();
        var fixTop = $('.sub_visual').offset().top - 200;

        console.log(targetTop, fixTop);

        /* 985 */
        if ( targetTop >= fixTop  ) {
            console.log(targetTop);
            $('.about_visual > .txtwrap').find('h3').css({color: '#1C98D6'}).parent().css({position: 'absolute', top: fixTop + 200});
        }
    });
});