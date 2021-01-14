$(document).ready(function () {
    var scrollY;
    var timer = 0;

    var _gnb = $('#gnb')

    //문서 로딩 => #header.load 추가 후 브라우저 상단에서 아래로 내려오는 처리
    $('#header').addClass('on');
    $('#content .top_visual').addClass('on');
    $('.sub_tit.effect').addClass('effect');

    $(window).on('scroll', function () {
        clearTimeout(timer);

        timer = setTimeout(function () {
            scrollT = $(this).scrollTop();

            if (scrollT > $('.top_visual').outerHeight() - $('#header').outerHeight()) $('#header').addClass('bgchange');
            else $('#header').removeClass('bgchange');
            
            $('.fade').each(function () {
                if(scrollT > $(this).offset().top - 500) $(this).addClass('on');
            });
        }, 50);
    });
    $(window).trigger('scroll');

    //메뉴열기 클릭
    $('.btn_menu').on('click', function () {
        if($(this).hasClass('active')) {
            _gnb.stop().animate({left: '100%'}, 300, function () {
                $(this).css({display: 'none'}).find('ul li.on').removeClass('on').children('ul').stop().slideUp();
            });

        $(this).removeClass('active').find('blind-b').text('메뉴 열기');
        } else {
            var scrollMove = scrollT;
            console.log(scrollMove);

            $(this).addClass('active').find('blind-b').text('메뉴 닫기');
            var $first = _gnb.find('[data-link=first]');
            var $last = _gnb.find('[data-link=last]');

            _gnb.css({display: 'block'}).stop().animate({left: 0}, 300, function () {
                $first.focus();
            });

            $first.on('keydown', function (e) {
                console.log(e.keycode);
                if(e.shiftKey && e.keyCode == 9) {
                    e.preventDefault();
                    $last.focus();
                }
            });

            $last.on('keydown', function (e) {
                if(!e.shiftKey && e.keyCode == 9) {
                    e.preventDefault();
                    $('.btn_menu').focus();
                }
            });
        }

        //depth1 a click
        _gnb.find('>ul>li>a').on('click', function () {
            if($(this).next().size() === 0) {
                location.href=$(this).attr('href');
            } else {
                $(this).parent().siblings().removeClass('on').find('ul').stop().slideUp("fast");
                $(this).next().stop().slideToggle("fast").parent().toggleClass('on');
            }
            return false;
        });
    });



    //gotoUp
    $(window).on('scroll', function () {
        var scrollY = $(this).scrollTop();

        //스크롤이 100px 이상 움질일 경우
        if (scrollY >= 100) $('#btnTop').addClass('active');
        else $('#btnTop').removeClass('active');
        
        return false;
    });

    $('#goBtnUp').on('click', function () {
        var _target = $( $(this).attr('href'))
        var targetTop = _target.offset().top;

        $('html, body').stop().animate({scrollTop: targetTop});
        return false;
    });
});




