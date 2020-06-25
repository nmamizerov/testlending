window.onload = ()=>{
    console.log("mem")
    $('.mobile-nav-toggler').on('click', function () {
    $('body').addClass('mobile-menu-visible');
    });
    
    // setTimeout(() => {
        let header = $(".main-header")
        $(".main-header").remove()
        $('.page-wrapper').prepend(header)
    // }, 5000);
    $(window).on('click', (e)=>{
    console.log(e)
    })
}