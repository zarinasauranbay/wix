$(document).ready(function(){
    AOS.init();

   $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });
    $(".toggle_mnu").click(function() {
        if ($( "#navid" ).hasClass( "active1" )){
            $("#navid").removeClass( "active1" ).addClass( "top_mnu");
        } else{
        $(".navb").removeClass( "top_mnu" ).addClass( "active1");
        };
    });
    $(".toggle_mnu").click(function() {
        if ($( "#navid" ).hasClass( "active1" )){
            $(".top_mnu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_mnu li a").addClass("fadeInUp animated");
        };
    });

});



