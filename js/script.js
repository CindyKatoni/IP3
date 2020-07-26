(function ($) {
    // console.log("About to start jQuery");
    //scroll-down



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
    $("#port-2").hover(function(){
        $("#white-box-2").toggle();
    });
    $("#port-3").hover(function(){
        $("#white-box-3").toggle();
    });
    $("#port-4").hover(function(){
        $("#white-box-4").toggle();
    });
    $("#port-5").hover(function(){
        $("#white-box-5").toggle();
    });
    $("#port-6").hover(function(){
        $("#white-box-6").toggle();
    });
    $("#port-7").hover(function(){
        $("#white-box-7").toggle();
    });
    $("#port-8").hover(function(){
        $("#white-box-8").toggle();
    });

    /*Mail Chimp*/
    $("#send-mail").submit(function(){
        console.log("Send email");
    });
    
})(jQuery);