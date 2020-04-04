changeNavbarColor();


function changeNavbarColor(){
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 30) {
        $('header').css({
            'background':'lightgray'
        
        });
        } else{
            $('header').css({
                'background':'transparent'
            });
        }
    });
}