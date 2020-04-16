var projectsContainer = document.getElementsByClassName("projects")[0];
var nextButton = document.getElementById("next-btn");
var prevButton = document.getElementById('prev-btn');
var yelpCamp = document.getElementById('yelpcamp');
var reactApp = document.getElementById('todo');
var profileImage = document.getElementsByClassName('profile-image');

var projects = [
    {
        name : 'YelpCamp',
        image : 'https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        link : 'https://intense-wildwood-29706.herokuapp.com',
        github : 'https://github.com/krishnath-24/yelpCamp',
        summary : 'The App was developed using Node.js, Express and mongoDB for the back-end and html, css, bootstrap, javascript for the front-end part and deployed on heroku. The app contains user login and auth using passport.js, user can add, edit or delete campgorunds and view all other campgrounds. User can also add or view comments and give reviews.'
    },
    {
        name : 'Task Manager',
        link : 'https://github.com/krishnath-24/React/tree/master/poketimes/src',
        github : 'https://github.com/krishnath-24/React/tree/master/poketimes/src'
    }
]




changeNavbarColor();
horizontalScroll();
addProjectsToContainer();






function changeNavbarColor(){
    $(window).scroll(function () {
        
        
        if ($(window).scrollTop() >= 30) {

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

function addProjectsToContainer(){
    
    var projectContainer = document.createElement('div');
    
    projectContainer.classList.add('project-content');


}