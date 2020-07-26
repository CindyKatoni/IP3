(function ($) {
    // console.log("About to start jQuery");
    //design-card
    $("#design-img").click(function() {
        $(this).toggle();//hides image
        $("#design-card").toggle();//displays paragraph
    });
    $("#design-card").click(function() {
        $(this).toggle();//hides paragraph
        $("#design-img").toggle();//displays image
    });

    //dev-card
    $("#dev-img").click(function(){
        $(this).toggle();
        $("#dev-card").toggle();
    });
    $("#dev-card").click(function(){
        $(this).toggle();
        $("#dev-img").toggle();
    });

    // product-card
    $("#product-img").click(function(){
        $(this).toggle();
        $("#product-card").toggle();
    });
    $("#product-card").click(function(){
        $(this).toggle();
        $("#product-img").toggle();
    });

    /**Show white box when hovering over portfolio */
    $("#port-1").hover(function() {
        $("#white-box-1").toggle(); // Show white box;
    });

})(jQuery);