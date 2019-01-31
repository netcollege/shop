$(".bag").click(function() {
    $(".bag .cart").slideToggle();
});
$(".slider .next").click(function() {
    var slideLen = $(".slider .slide").length;
    var active = $(".slide.active").data("slide");
    if (active < slideLen) {
        var next = active + 1;
        $(".slide.active").removeClass("active");
        $(".slide[data-slide="+next+"]").addClass("active");
    } else if (active == slideLen) {
        var next = 1;
        $(".slide.active").removeClass("active");
        $(".slide[data-slide="+next+"]").addClass("active");
    }
})
$(".slider .prev").click(function() {
    var slideLen = $(".slider .slide").length;
    var active = $(".slide.active").data("slide");
    if (active < slideLen && active >= 1) {
        var prev = active - 1;
        $(".slide.active").removeClass("active");
        $(".slide[data-slide="+prev+"]").addClass("active");
    } else if (active == slideLen) {
        var prev = slideLen;
        $(".slide.active").removeClass("active");
        $(".slide[data-slide="+next+"]").addClass("active");
    }
})