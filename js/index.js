$(document).ready(function(){
    $("#begin").click(function(){
        $('html, body').animate({scrollTop: $("#bio").offset().top}, 2000);
    });

    $("#martis-hastam-back").click(function(){
        window.open('https://martis-hastam.herokuapp.com/', '_blank');
    });

    $("#taskfly-back").click(function(){
        window.open('https://taskfly-io.herokuapp.com/', '_blank');
    });
});
