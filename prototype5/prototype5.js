//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function () {
    console.log('ready');

    $('#begin img').hover(
        function () {
            $(this).attr('src', 'images/beginh.png')
        },
        function () {
            $(this).attr('src', 'images/begin.png')
        });

    $('#begin img').click(function () {
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

        $('div#search').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');

        $('footer#mainnav ul').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');

        $('footer#mainnav ul li#searchicon img').attr('src', 'images/searchiconon.png');

        $('footer#mainnav ul li#calendaricon img').attr('src', 'images/calendaricon.png');

        $('footer#mainnav ul li#addicon img').attr('src', 'images/addicon.png');
    });

    $('nav#searchnav ul li#sorg').click(function () {
        $('div#search').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#organization').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');

        $('footer#mainnav ul li#searchicon img').attr('src', 'images/searchiconon.png');

        $('footer#mainnav ul li#calendaricon img').attr('src', 'images/calendaricon.png');

        $('footer#mainnav ul li#addicon img').attr('src', 'images/addicon.png');
    });

    $('nav#searchnav ul li#sevent').click(function () {
        $('div#search').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#events').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');

        $('footer#mainnav ul li#searchicon img').attr('src', 'images/searchiconon.png');

        $('footer#mainnav ul li#calendaricon img').attr('src', 'images/calendaricon.png');

        $('footer#mainnav ul li#addicon img').attr('src', 'images/addicon.png');
    });

    $('form#orgcheck div.submitnav li.submit').click(function () {
        $('div#organization').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#calendar').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');

        $('footer#mainnav ul li#searchicon img').attr('src', 'images/searchicon.png');

        $('footer#mainnav ul li#calendaricon img').attr('src', 'images/calendariconon.png');

        $('footer#mainnav ul li#addicon img').attr('src', 'images/addicon.png');
    });

    $('form#orgcheck div.submitnav li.cancel').click(function () {
        $('div#organization').animate({
            opacity: 0
        }, 500, 'linear');
        $('div#organization').css("visibility", "hidden");
        $('div#search').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');

        $('footer#mainnav ul li#searchicon img').attr('src', 'images/searchiconon.png');

        $('footer#mainnav ul li#calendaricon img').attr('src', 'images/calendaricon.png');

        $('footer#mainnav ul li#addicon img').attr('src', 'images/addicon.png');
    });

    $('form#eventcheck div.submitnav li.submit').click(function () {
        $('table.calendar tr td').stop().animate({
            paddingBottom: 3
        }, 500, 'linear');
        $('div.calevents').css("visibility", "hidden").css('opacity', '0');
        $('div#events').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#calendar').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');

        $('footer#mainnav ul li#searchicon img').attr('src', 'images/searchicon.png');

        $('footer#mainnav ul li#calendaricon img').attr('src', 'images/calendariconon.png');

        $('footer#mainnav ul li#addicon img').attr('src', 'images/addicon.png');
    });

    $('form#eventcheck div.submitnav li.cancel').click(function () {
        $('table.calendar tr td').stop().animate({
            paddingBottom: 3
        }, 500, 'linear');
        $('div.calevents').css("visibility", "hidden").css('opacity', '0');
        $('div#events').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#search').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');

        $('footer#mainnav ul li#searchicon img').attr('src', 'images/searchiconon.png');

        $('footer#mainnav ul li#calendaricon img').attr('src', 'images/calendaricon.png');

        $('footer#mainnav ul li#addicon img').attr('src', 'images/addicon.png');
    });

    $('footer#mainnav ul li#searchicon').click(function(){
        $('table.calendar tr td').stop().animate({
            paddingBottom: 3
        }, 500, 'linear');
        $('div.calevents').css("visibility", "hidden").css('opacity', '0');
        $('div#search').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');
        $('div#organization').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#events').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#calendar').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#add').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#added').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        
         $('footer#mainnav ul li#searchicon img').attr('src', 'images/searchiconon.png');

        $('footer#mainnav ul li#calendaricon img').attr('src', 'images/calendaricon.png');

        $('footer#mainnav ul li#addicon img').attr('src', 'images/addicon.png');
    });
    
    $('footer#mainnav ul li#calendaricon').click(function(){
        $('table.calendar tr td').stop().animate({
            paddingBottom: 3
        }, 500, 'linear');
        $('div.calevents').css("visibility", "hidden").css('opacity', '0');
        $('div#calendar').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');
        $('div#organization').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#events').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#search').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#add').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#added').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        
         $('footer#mainnav ul li#searchicon img').attr('src', 'images/searchicon.png');

        $('footer#mainnav ul li#calendaricon img').attr('src', 'images/calendariconon.png');

        $('footer#mainnav ul li#addicon img').attr('src', 'images/addicon.png');
    });
    
    $('footer#mainnav ul li#addicon').click(function(){
        $('table.calendar tr td').stop().animate({
            paddingBottom: 3
        }, 500, 'linear');
        $('div.calevents').css("visibility", "hidden").css('opacity', '0');
        $('div#add').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');
        $('div#organization').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#events').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#calendar').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#search').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#added').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        
         $('footer#mainnav ul li#searchicon img').attr('src', 'images/searchicon.png');

        $('footer#mainnav ul li#calendaricon img').attr('src', 'images/calendaricon.png');

        $('footer#mainnav ul li#addicon img').attr('src', 'images/addiconon.png');
    });
    
    $('form#addevent div.submitnav li.submit').click(function () {
        $('div#add').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#added').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');

        $('footer#mainnav ul li#searchicon img').attr('src', 'images/searchicon.png');

        $('footer#mainnav ul li#calendaricon img').attr('src', 'images/calendaricon.png');

        $('footer#mainnav ul li#addicon img').attr('src', 'images/addiconon.png');
    });
    
    $('form#addevent div.submitnav li.cancel').click(function () {
        $('div#add').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#calendar').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');

        $('footer#mainnav ul li#searchicon img').attr('src', 'images/searchicon.png');

        $('footer#mainnav ul li#calendaricon img').attr('src', 'images/calendariconon.png');

        $('footer#mainnav ul li#addicon img').attr('src', 'images/addicon.png');
    });
    
    $('nav#addednav ul li#view').click(function () {
        $('div#added').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#calendar').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');

        $('footer#mainnav ul li#searchicon img').attr('src', 'images/searchicon.png');

        $('footer#mainnav ul li#calendaricon img').attr('src', 'images/calendariconon.png');

        $('footer#mainnav ul li#addicon img').attr('src', 'images/addicon.png');
    });
    
    $('nav#addednav ul li#add2').click(function () {
        $('div#added').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#add').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');

        $('footer#mainnav ul li#searchicon img').attr('src', 'images/searchicon.png');

        $('footer#mainnav ul li#calendaricon img').attr('src', 'images/calendaricon.png');

        $('footer#mainnav ul li#addicon img').attr('src', 'images/addiconon.png');
    });
    
    $('table.calendar tr').click(function(){
        $('table.calendar tr td').stop().animate({
            paddingBottom: 3
        }, 500, 'linear');
        
        $(this).children().animate({
            paddingBottom: 240
        }, 500, 'linear');
    });
    
    $('table.calendar tr td').click(function(){
        $('table.calendar tr td').css('background-image', 'url(images/calendardayback.png)');
        
        $('table.calendar tr td.no').css('background', 'transparent');
        
        $(this).css('background-image', 'url(images/calendardayclick.png)');
    });
    
    $('table.calendar tr td.no').click(function(){
        $(this).css('background-image', 'none');
    });
    
    $('table.calendar tr.row1').click(function(){
        $('div.calevents').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        
        $('div#event1').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');
    });
    
    $('table.calendar tr.row2').click(function(){
        $('div.calevents').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        
        $('div#event2').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');
    });
    
    $('table.calendar tr.row3').click(function(){
        $('div.calevents').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        
        $('div#event3').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');
    });
    
    $('table.calendar tr.row4').click(function(){
        $('div.calevents').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        
        $('div#event4').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');
    });
    
    $('table.calendar tr.row5').click(function(){
        $('div.calevents').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        
        $('div#event5').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');
    });
    
    $('table.calendar tr.row6').click(function(){
        $('div.calevents').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        
        $('div#event6').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');
    });
    
    $('table.calendar tr.row7').click(function(){
        $('div.calevents').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        
        $('div#event7').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');
    });
    
    $('table.calendar tr.row8').click(function(){
        $('div.calevents').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        
        $('div#event8').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');
    });
    
    $('table.calendar tr.row9').click(function(){
        $('div.calevents').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        
        $('div#event9').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');
    });
    
    $('table.calendar tr.row10').click(function(){
        $('div.calevents').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        
        $('div#event10').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');
    });
})