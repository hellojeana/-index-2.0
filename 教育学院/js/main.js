// GoUP - a scroll-to-top jQuery plugin deeveloped by Roger Vila (@_rogervila) //

$(document).ready(function () {
    
    //////GoUP/////////
    $('#goup').goup();
    ///////////////////
    
    
    //example of changing default values
    
    /*
    $('#goup').goup({
        width: "100px",
        scrolltime: 3000,
        appear: 800,
        imgsrc: '/Data/SiteImages/goup.png',
        place: "top-left",
        fadein: 3000,
        fadeout: 5000,
        opacity: "0.1"
        }
    );
    */
    
    
    //the rest of the script doesn't begin to the GoUP plugin, it's just for the web design
    var h = $(window).height();
    $('#scroll a').click(function () {
        $("html, body").animate({ scrollTop: h }, 900);
        return false;
    });
    $('#divheader').height(h);
    
    var h6 = parseInt(h / 6);
    $('#title').height(h6);
    $('#twitter').height(h6);
    $('#downloadbuttons').height(h6);
    $('#scroll').height(h6);
});