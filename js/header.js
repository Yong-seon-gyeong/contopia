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

    $(window).scroll(function () {
        var nowScrollTop = $(window).scrollTop();
    
        if (nowScrollTop > 100) {
            if (nowScrollTop > prevScrollTop) {
                $("#header").addClass("active");
            } else {
                $("#header").removeClass("active");
            }
            prevScrollTop = nowScrollTop;
        }
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
