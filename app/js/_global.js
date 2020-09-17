// Global
app.global = {
    init: function() {
        // Load all global functions here
        console.log("load global functions");
        app.global.slideMainMenuMobile();
        app.global.SlideFilters();
        app.global.showFilter();
        app.global.initCalendar();
        app.global.switchBtnStort();
        app.global.sliderDown();
        app.global.jaugeCpt();
        app.global.flipCard();
        app.global.animeInternalLink('a[href^="#"]');
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
    }

};

// Run the global stuff
app.global.init();