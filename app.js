var nextButton = document.getElementById("next-btn");
var prevButton = document.getElementById('prev-btn');
var yelpCamp = document.getElementById('yelpcamp');
var reactApp = document.getElementById('todo');
var profileImage = document.getElementsByClassName('profile-image');





changeNavbarColor();
horizontalScroll();







function changeNavbarColor(){
    $(window).scroll(function () {
        
        
        if ($(window).scrollTop() >= 50) {

        $('header').css({
            'background':'lightgray',
            'z-index' : '2'
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