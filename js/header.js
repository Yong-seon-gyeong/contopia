$(function () {
    // header scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#header").addClass("scroll");
        }
        else {
            $("#header").removeClass("scroll");
        }

    });

    var prevScrollTop = 0;

    document.addEventListener("scroll", function () {

        var nowScrollTop = $(window).scrollTop(); //현재 스크롤 위치를 nowScrollTop 에 저장

        if (nowScrollTop > prevScrollTop) { $('header').addClass('active'); }
        // 스크롤 방향(Down) 내릴때 -> 헤더에 active 클래스 추가
        else { $('header').removeClass('active'); } // 스크롤 방향(Up) 올릴때 -> 헤더에 active 클래스 제거
        prevScrollTop = nowScrollTop;  // prevScroll, nowScrollTop 조건 판단 후, 현재 스크롤값을 prevScrollTop 에 저장

    });

    // pc_submenu
    $(".gnb li").mouseover(function () {
        $(this).find(".submenu_wrap").stop().slideDown();
    });
    $(".gnb li").mouseout(function () {
        $(this).find(".submenu_wrap").stop().slideUp();
    });

    // mobile_menu
    var burger = $('.menu-trigger');

    burger.each(function (index) {
        var $this = $(this);

        $this.on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active-' + (index + 1));
            $('.m_menu').css('margin-right', $(this).hasClass('active-' + (index + 1)) ? '0' : '100vw');

            $('body').toggleClass('menu-open');

        });
    });

    $('.m_submenu li a').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('.m_menu').css('margin-right', '100vw');

        setTimeout(function () {
            window.location.href = target;
        }, 500);
    });

    $('.m_submenu li a').on('click', function () {
        $('.menu-trigger').toggleClass('active-1');
        $('body').removeClass('menu-open');
    });

    // m_menu toggle
    var currentButton = null;
    $('.m_gnb>ul>li').click(function () {
        if (currentButton && currentButton[0] !== this) {
            $(currentButton).children(".m_submenu").slideUp();
            $(currentButton).removeClass('rotate');
        }
        $(this).children(".m_submenu").slideToggle();
        $(this).toggleClass('rotate');
        if (currentButton && currentButton[0] === this) {
            currentButton = null;
        } else {
            currentButton = $(this);
        }
    });
});