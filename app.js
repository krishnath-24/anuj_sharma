var projectsContainer = document.getElementsByClassName("projects")[0];
var nextButton = document.getElementById("next-btn");
var prevButton = document.getElementById('prev-btn');
var yelpCamp = document.getElementById('yelpcamp');
var reactApp = document.getElementById('todo');
var profileImage = document.getElementsByClassName('profile-image');
var quoteDiv = document.getElementById('quote');


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
        github : 'https://github.com/krishnath-24/React/tree/master/poketimes/src',
        summary : `The App was built using React, react components, Jsx, hooks and much more, a user-friendly app designed efficiently to manage all todos.It's heavily focused on tasks, and that's what the tool does best. Under each task, you can sub-tasks, additional notes, priority ratings, due dates, and add reminders.'`
    }
]


crackAQuote();
changeNavbarColor();
horizontalScroll();
addProjectsToContainer();




function crackAQuote(){
    fetch('https://type.fit/api/quotes').then(function(response){

        return response.json();

    }).then(function(data){

        populateQuote(data);

        
    }).catch(function(err){
        console.log(err);
    });
}

function populateQuote(data){

        let index = Math.floor(data.length * Math.random());
        var quote = data[index].text;
        var author = data[index].author;

        var quotePara = document.createElement('h5');
        var authorSpan = document.createElement('span');

        $(quotePara).css({
            'font-family' : 'muli',
            'font-style' : 'italic',
            'font-weight' : '300'
        })

        $(authorSpan).css({
            'text-align' : 'right',
            'width' : '90%',
            'font-family' : 'sans-serif',
            'font-weight' : '300'

        })

        quotePara.textContent = quote;
        authorSpan.textContent = author;

       
        quoteDiv.appendChild(quotePara);
        if(author) quoteDiv.appendChild(authorSpan);
        $(quoteDiv).css({
            'display': 'block'
        })
}




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