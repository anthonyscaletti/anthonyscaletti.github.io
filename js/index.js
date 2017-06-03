$(document).ready(function(){
    $("#logoImg").addClass("animated bounce");
    //Button clicks
    $("#aboutBtn").click(function(){
        $('html, body').animate({scrollTop: $("#about").offset().top}, 2000);
    });
    $("#aboutBtn").click(function(){
        $('html, body').animate({scrollTop: $("#about").offset().top}, 1000);
    });
    $("#portfolioBtn").click(function(){
        $('html, body').animate({scrollTop: $("#portfolio").offset().top}, 1000);
    });
    $("#linksBtn").click(function(){
        $('html, body').animate({scrollTop: $("#links").offset().top}, 1000);
    });
});
