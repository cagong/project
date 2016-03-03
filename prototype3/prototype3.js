//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function(){
    console.log('ready');
    
      $('#begin img').hover(
        function() {
            $(this).attr('src', 'images/beginh.png')}, 
        function() {
        $(this).attr('src', 'images/begin.png')
            });
    
    
    $('#begin img').click(function() {
        $(this).animate({
                opacity: 0
            }, 500, 'linear');
        
        $('header#start').animate({
                opacity: 0
            }, 500, 'linear');
        
        $('footer#login').animate({
                opacity: 0
            }, 500, 'linear');
        
        $('main').css("background-image", "url('images/background.png')");
        
        $('div#search').css("visibility", "visible").animate({ opacity: 1}, 500, 'linear');
            });
    
})