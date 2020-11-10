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
  
  //본문3 슬라이더
  var mySwiper1 = new Swiper('.consulting .swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      //clickable: true, //bullet 타입일 경우 버튼 클릭시 이동 가능함
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  //본문4 슬라이더
  var mySwiper2 = new Swiper('.casestudy .swiper-container', {
    spaceBetween: 10, //각 슬라이더 사이 공간
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
  })
});