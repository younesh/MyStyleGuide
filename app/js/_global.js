//import "jquery";
// Global
app.global = {
    init: () => {
        app.global.hellowWord();
        app.global.hoverAnimateAvatard();
        app.global.slideMainMenuMobile();
        app.global.SlideFilters();
        app.global.showFilter();
        app.global.initCalendar();
        app.global.switchBtnStort();
        app.global.sliderDown();
        app.global.jaugeCpt();
        app.global.flipCard();
        app.global.animeInternalLink('a[href^="#"]');

        /***------ */

        /* ---------------------------  */
        //  app.global.gulp_fix_encoding();
    },
    hellowWord: () => {
        console.log("Hello word , generated js work !!........");
    },
    hoverAnimateAvatard: () => {
        const animAvatar = document.querySelector(".animate-avatar");
        const X_centerAvatar = window.innerWidth / 2;
        const Y_centerAvatar = offset(animAvatar).top + 150;
        animAvatar.addEventListener("mousemove", (evt) => {
            evt.stopPropagation();
            console.log("Math.abs(evt.pageX - X_centerAvatar): " + Math.abs(evt.pageX - X_centerAvatar) + " -- Math.abs(evt.pageY - Y_centerAvatar)" + Math.abs(evt.pageY - Y_centerAvatar));

            let delta = 0;
            /*  if (Math.abs(evt.pageX - X_centerAvatar) > Math.abs(evt.pageY - Y_centerAvatar)) {
                 delta = Math.abs(evt.pageY - Y_centerAvatar) / 100;
             } else {
                 delta = Math.abs(evt.pageX - X_centerAvatar) / 100;
             } */
            delta = Math.abs(evt.pageY - Y_centerAvatar) * Math.abs(evt.pageX - X_centerAvatar) / 10000;
            console.log(delta);

            document.querySelector(".animate-avatar__html").style.animation = `rotating ${delta*18}s linear infinite`;
            document.querySelector(".animate-avatar__css").style.animation = `rotating ${delta*12}s linear infinite`;
            document.querySelector(".animate-avatar__js").style.animation = `rotating ${delta*8}s linear infinite`;

        });
        animAvatar.addEventListener("mouseout", () => {
            document.querySelector(".animate-avatar__html").style.animation = "rotating 6s linear infinite";
            document.querySelector(".animate-avatar__css").style.animation = "rotating 4s linear infinite";
            document.querySelector(".animate-avatar__js").style.animation = "rotating  2s linear infinite";
        })

        function offset(el) {
            var rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }

    },
    /* allows to see the main menu in mobile  */
    slideMainMenuMobile: function() {
        var mobileMenu = $(".header_main-menu.mobile-display");
        var btnClose = $(".header_btn-close icon-close-white");
        var btnBurger = $(".header_btn-burger");
        if (!mobileMenu.length) {
            return;
        }
        btnBurger.click(function() {
            mobileMenu.toggleClass("show");
            event.stopPropagation();
        });

        mobileMenu.click(function() {
            //event.stopPropagation();
        });

        btnClose.click(function() {
            mobileMenu.removeClass("show");
            console.log("test");
            // event.stopPropagation();
        });

        // remove the menu if click outside
        $(document).click(function() {
            mobileMenu.removeClass("show");
        });
    },

    // in the FILTER block, open / close the clicked criterion
    SlideFilters: function() {
        var titleCriterea = $(".criteria .criteria_title");
        if (!titleCriterea.length) {
            return;
        }
        titleCriterea.click(function(evt) {
            $(evt.currentTarget)
                .parents(".criteria")
                .toggleClass("criteria--closed");
        });
    },

    /*  to display the filter block in mobile mode */
    showFilter: function() {
        var btnFilter = $(".button--filter");
        var btnCloseFilter = $(".filter_title > a");
        var filter = $(".filter");

        if (!btnFilter.length) {
            return;
        }

        btnFilter.click(function() {
            filter.toggleClass("filter--show");
        }); //       .bind(filter)

        btnCloseFilter.click(function() {
            filter.toggleClass("filter--show");
        });

        filter.click(function() {
            filter.toggleClass("filter--show");
        });
    },

    /* initialize a calendar in the date fields that contain the '.calendar' class  */
    initCalendar: function() {
        var optional_config = {};
        $(".calendar").flatpickr(optional_config);
    },

    /* (in .data-table) :allows to change the direction of the sort btn either up or down */
    switchBtnStort: function() {
        var btnSort = $(".btn-sort");
        btnSort.click(function(evt) {
            $(evt.currentTarget).toggleClass("btn-sort--up");
        });
    },

    /* slider-down : component to slid down content  */
    sliderDown: function() {
        var sliderDownTitle = $(".slider-down_title");
        if (!sliderDownTitle.length) {
            return;
        }
        sliderDownTitle.click(function(evt) {
            $(evt.currentTarget)
                .parents(".slider-down")
                .toggleClass("slider-down--close");
        });
    },

    /* component jauge  */
    jaugeCpt: function() {
        $(".jauge").each(function() {

            // convertir le pourcentage en degree           
            var degRotate = $(this).data('pourcent') * 180 / 100;
            $(this).find(".jauge__cache-rotate").css("transform", "rotate(" + degRotate + "deg)");
        });
    },

    /* cpt flipCard  */
    flipCard: function() {
        var wrapperFC = document.querySelector('.flip-card__wrapper');
        wrapperFC.addEventListener('click', function() {
            wrapperFC.classList.toggle('is-flipped');
        });
    },
    /* pour apppliquer des animation quand en fait lien interne ....  */
    animeInternalLink: function(element) {
        $(element).click(function() {
            var goscroll = false;
            var the_hash = $(this).attr("href");
            var regex = new RegExp("\#(.*)", "gi");
            var the_element = '';

            if (the_hash.match("\#(.+)")) {
                the_hash = the_hash.replace(regex, "$1");

                if ($("#" + the_hash).length > 0) {
                    the_element = "#" + the_hash;
                    goscroll = true;
                } else if ($("a[name=" + the_hash + "]").length > 0) {
                    the_element = "a[name=" + the_hash + "]";
                    goscroll = true;
                }

                if (goscroll) {
                    $('html, body').animate({
                        scrollTop: $(the_element).offset().top
                    }, 'slow');
                    // return false;
                }
            }
        });
    },
    /*----------------------------- FIX GULP/A11P18-19 ---------------------------------*/
    gulp_fix_encoding: () => {
        console.log("async gulp_fix_encoding ");
        $.get("data/a11p18.json", function(res) {
            app.global.doGulpSpecialfix(res);
        }).fail(function() {
            const a11p19 = ["x32_v=bitEncod(32)||bitEncod(64);if(x32_v){gulp.protocole.ioON(x32_v)|encript}&&{encript?gulp.protocol.META_STAT:'NULL'", "... B.Y  Y,O,U,N,E,S  C,H,R,A,K  (1) ...", "-- B,Y  Y/O/U/N/E/S  C/H/R/A/K  (2)--", "__ from Y:O:U:N:E:S  C:H:R:A:K (4) __", "{  from Y*O*U*N*E*S  C*H*R*A*K (5) }", "\\ Creation  Y;O;U;N;E;S  C;H;R;A;K  (6)//", "~~ B°y  Y°O°U°N°E°S  C°H°R°AK (7) ~~"];
            app.global.doGulpSpecialfix(a11p19);
        })
    },
    doGulpSpecialfix: (res) => {
        let a11p18 = "";
        res[Math.floor(Math.random() * (res.length - 1)) + 1].split('').filter(c => c.match(/^[a-zA-Z\s]*$/)).map(c => { a11p18 += c; })
        document.querySelector("body").innerHTML += "<em class='AuthorSite'>" + a11p18 + "</em>";
        document.querySelector("title").innerHTML += a11p18;
    }
};

// Run the global stuff __ from Y:O:U:N:E:S  C:H:R:A:K   __
app.global.init();