function isScrolledIntoView(elem) {
    
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};


$(window).scroll(function () {
    if (isScrolledIntoView($("title"))) {
        $('title').addClass('animationTop');
    }
    
});

/*
if (isScrolledIntoView($("headline"))) {
        $('headline').addClass('animationA');
    }
    if (isScrolledIntoView($("text"))) {
        $('text').addClass('animationRight');
    }
    if (isScrolledIntoView($("next_section"))) {
        $('next_section').addClass('animationBottom');
    }
    */