window.onload = ()=>{
console.log("mem")
$('.mobile-nav-toggler').on('click', function () {
$('body').addClass('mobile-menu-visible');
});

setTimeout(() => {
    $(".main-header").addClass('mem-main-header');
    $(".main-header").removeClass('main-header')
    $(".mem-main-header").addClass('main-header')
    
    console.log($(".main-header")[0].style.width)
}, 5000);
$(window).on('click', (e)=>{
console.log(e)
})
}