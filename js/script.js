$(function () {
    // business_introduce
    var defaultIndex = 0;
    $('.business_bg li').slice(1).hide();

    $('.business_menu>li').mouseenter(function () {
        var index = $(this).index();
        if (index !== defaultIndex) {
            $('.business_bg li').eq(defaultIndex).fadeOut(300);
            defaultIndex = index;
            $('.business_bg li').eq(index).fadeIn(300);
        }
    });

    $('.business_menu>li').mouseleave(function () {
        $('.business_bg li').eq(defaultIndex).fadeIn(0);
        $('.business_bg li').not(':eq(' + defaultIndex + ')').fadeOut(0);
    });

    //swiper
    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // portfolio_video_play
    var videos = document.querySelectorAll(".video_wrap video");

    videos.forEach(function (video) {
        video.addEventListener("mouseover", playVideo);
        video.addEventListener("mouseout", stopVideo);

        function playVideo() {
            video.play();
        }

        function stopVideo() {
            video.pause();
            video.currentTime = 0;
            video.src = "" // <video> 요소의 소스(src)를 빈문자열로 설정하여 비어있는 상태로 만듬 브라우저가 이전 소스를 더 이상 로드하지 않도록 함. => 속성 값을 빈 문자열로 설정하여 제거
            video.removeAttribute("src")// <video> 요소의 소스(src)속성을 제거 함. 브라우저가 해당 비디오를 로드할 수 없게 됨. => 명시적으로 'src'속성을 삭제
        }
    });

    // contact_banner_typing
    var ContactOptions = {
        stringsElement: '#contact_banner .title',
        typeSpeed: 80,
        startDelay: 1000,
        loop: false,
    }

    var ContactTyped = new Typed('#contact_banner .typing02', ContactOptions);
    ContactTyped.stop();

    if ($(this).scrollTop() > $('.footer').offset().top - $(window).innerHeight() - $('#contact_banner').height()) {
        ContactTyped.start();
    }

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > $('.footer').offset().top - $(window).innerHeight() - $('#contact_banner').height()) {
            ContactTyped.start();
        }
    });
});

