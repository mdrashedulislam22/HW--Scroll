$(function () {
    //Window Scroll Event Start here
    $(window).on('scroll', function () {
        var scrollSize = $(window).scrollTop()
        //Show/Hide Bact To Top Button
        
        if (scrollSize > 500) {
            $('#up-arrow').slideDown()
           
        } else {
            $('#up-arrow').slideUp()
            
        }})

    $('#up-arrow').on('click', function () {
        $('html, body').animate({
            scrollTop:0,
        },1000)
    })
//Window Scroll Event End here
})
