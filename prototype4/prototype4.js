//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function () {
    console.log('ready');
    alert("Hi User! Welcome to a prototype of the UC Davis MyEvents app. Feel free to click around. However, know that only the interface works and not any of the functions. It will refresh the page if you click the checkboxes or fill out any forms. (:");
    var faded = false;

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

    document.orgcheck.onsubmit = processForm1;
    document.orgcheck.onreset = returnPage1;

    document.eventcheck.onsubmit = processForm2;
    document.eventcheck.onreset = returnPage2;

    function processForm1() {
        $('div#organization').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#calendar').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');

        $('footer#mainnav ul li#searchicon img').attr('src', 'images/searchicon.png');

        $('footer#mainnav ul li#calendaricon img').attr('src', 'images/calendariconon.png');

        $('footer#mainnav ul li#addicon img').attr('src', 'images/addicon.png');
    };

    function returnPage1() {
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
    };

    function processForm2() {
        $('div#events').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#calendar').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');

        $('footer#mainnav ul li#searchicon img').attr('src', 'images/searchicon.png');

        $('footer#mainnav ul li#calendaricon img').attr('src', 'images/calendariconon.png');

        $('footer#mainnav ul li#addicon img').attr('src', 'images/addicon.png');
    };

    function returnPage2() {
        $('div#events').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#search').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');

        $('footer#mainnav ul li#searchicon img').attr('src', 'images/searchiconon.png');

        $('footer#mainnav ul li#calendaricon img').attr('src', 'images/calendaricon.png');

        $('footer#mainnav ul li#addicon img').attr('src', 'images/addicon.png');
    };

    $('footer#mainnav ul li#searchicon').click(function(){
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
    
    document.addevent.onsubmit = processForm3;
    document.addevent.onreset = returnPage3;
    
    function processForm3() {
        $('div#add').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#added').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');

        $('footer#mainnav ul li#searchicon img').attr('src', 'images/searchicon.png');

        $('footer#mainnav ul li#calendaricon img').attr('src', 'images/calendaricon.png');

        $('footer#mainnav ul li#addicon img').attr('src', 'images/addiconon.png');
    };
    
    function returnPage3() {
        $('div#add').animate({
            opacity: 0
        }, 500, 'linear').css("visibility", "hidden");
        $('div#calendar').css("visibility", "visible").animate({
            opacity: 1
        }, 500, 'linear');

        $('footer#mainnav ul li#searchicon img').attr('src', 'images/searchicon.png');

        $('footer#mainnav ul li#calendaricon img').attr('src', 'images/calendariconon.png');

        $('footer#mainnav ul li#addicon img').attr('src', 'images/addicon.png');
    };
    
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
        $('table.calendar tr td').animate({
            paddingBottom: 3
        }, 500, 'linear');
        
        $(this).children().animate({
            paddingBottom: 200
        }, 500, 'linear');
    });
    
    $('table.calendar tr td').click(function(){
        $('table.calendar tr td').css('background-image', 'url(images/calendardayback.png)');
        
        $('table.calendar tr td.no').css('background', 'transparent');
        
        $(this).css('background-image', 'url(images/calendardayclick.png)');
    });
})