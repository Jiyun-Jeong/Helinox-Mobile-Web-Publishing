$(document).ready(function () {
  $(window).on('resize', function () {
    var winHei = $(this).height();

    //top_visual 높이 지정 : 창 한칸을 모두 차지 하기
    $('#content .main_visual').css('height', winHei); 
  });
  $(window).trigger('resize');

  $(window).on('scroll', function () {
    var scrollT = $(this).scrollTop();

    if (scrollT > $('.main_banner').offset().top - 500) {
      $('.main_banner').addClass('on');
    }
  });
  
  //본문2 marquee
/*   (function($) {
    $.fn.marquee=function(options) {
      return this.each(function () {
        var o = $.extend({}, $.fn.marquee.defaults, options),
        $this = $(this),
        $marqueeWrapper, containerWidth, animationCss, verticalDir, elWidth,
        loopCound = 3,
        palyState = 'animation-play-state',
        css3AnimationIsSupported = false, 

        //Private methods
        _prefixedEvent = function(element, type, callback) {
          var pfx = ["webkit", "moz", "MS", "o", ""];
          for (var p = 0; p <pfx.length; p++) {
            if(!pfx[p]) type = type.toLowerCase();
            element.addEventListener(pfx[p]+type, callback, false);
          }
        }
      })
    }

  }); */
/*   $(document).ready(function (){
    $('brandStory .marqueeWrap').on('scroll', function () {
      var scrollY = $(this).scrollTop();
      console.log(scrollY);

      if (scrollY >= 600 ) $(this).css({opacity: 0.7}).removeClass('animation');
    });
  }); */

  //본문3 슬라이더
  var mySwiper1 = new Swiper('.bestItem .swiper-container', {
    loop: true,
/*     autoplay: {
      delay: 2300,
    }, */
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      //clickable: true, //bullet 타입일 경우 버튼 클릭시 이동 가능함
    },
    /* spaceBetween: 30, */
    slidesPerView: 'auto',
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    a11y: {
      //prevSlideMessage: '이전 슬라이드',
      //nextSlideMessage: '다음 슬라이드',
      firstSlideMessage: '첫번째 슬라이드',
      lastSlideMessage: '마지막 슬라이드',
    }
  })

  //본문4 슬라이더
  var mySwiper2 = new Swiper('.category .swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    /* autoplay: {
      delay: 2300,
    }, */
    spaceBetween: 82, //각 슬라이더 사이 공간
    slidesPerView: 'auto', //한 화면에 보여질 슬라이더 개수 기본1
    centeredSlides: true, //슬라이더 가운데 중요 슬라이더 위치
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,    //스크롤바를 직접 드래그해서 이동가능
    },
    navigation: {
      prevEl: '.swiper-button-prev',
    },
    a11y: {
      //prevSlideMessage: '이전 슬라이드',
      //nextSlideMessage: '다음 슬라이드',
      firstSlideMessage: '첫번째 슬라이드',
      lastSlideMessage: '마지막 슬라이드',
    }
  })


//본문5 슬라이더
  var mySwiper2 = new Swiper('.lookbook .swiper-container', {
    pagination: {
      type: 'bullets',
      bulletElement: 'span',
      clickable: 'true',
    },
    spaceBetween: 20, //각 슬라이더 사이 공간
    slidesPerView: 'auto', //한 화면에 보여질 슬라이더 개수 기본1
    centeredSlides: true, //슬라이더 가운데 중요 슬라이더 위치
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,    //스크롤바를 직접 드래그해서 이동가능
    },
    a11y: {
      //prevSlideMessage: '이전 슬라이드',
      //nextSlideMessage: '다음 슬라이드',
      firstSlideMessage: '첫번째 슬라이드',
      lastSlideMessage: '마지막 슬라이드',
    }
  });
});