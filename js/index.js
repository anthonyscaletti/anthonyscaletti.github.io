$(document).ready(function(){
    $("#begin").click(function(){
        $('html, body').animate({scrollTop: $("#bio").offset().top}, 2000);
    });

    $("#covid19-global-tracker-back").click(function(){
        window.open('https://covid19-global-tracker.herokuapp.com/', '_blank');
    });

    $("#martis-hastam-back").click(function(){
        window.open('https://martis-hastam.herokuapp.com/', '_blank');
    });

    $("#taskfly-back").click(function(){
        window.open('https://taskfly-io.herokuapp.com/', '_blank');
    });
});
