var nextButton = document.getElementById("next-btn");
var prevButton = document.getElementById('prev-btn');
var yelpCamp = document.getElementById('yelpcamp');
var reactApp = document.getElementById('todo');







changeNavbarColor();
horizontalScroll();


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

function horizontalScroll(){
    $(nextButton).on('click',(e)=>{

        $(yelpCamp).toggleClass('active-project');
        $(reactApp).toggleClass('active-project');
    });
    
    $(prevButton).on('click',(e)=>{
    
        $(yelpCamp).toggleClass('active-project');
        $(reactApp).toggleClass('active-project');
    });
}