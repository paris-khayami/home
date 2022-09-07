var state = false//false->hide
function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
}
function my_scroll_to(id){
    //if(!window.location.href.slice(window.location.href.length-'index/'.length,window.location.href.length).includes('index.html')){
    if(window.location.href.includes('.html')){
        window.location.href='/home';
    }
    $('html, body').animate({
        scrollTop: $(id).offset().top - vh(9)
      }, 20); 
}
$('#navbar').click((e)=>{
    console.log(e.target.classList.contains('tab'),e.target.id,e.target.classList);
    if($(window). width() > 1070) return;
    if(e.target.classList.contains('tab')==true || (e.target.classList.contains('my-logo')==true && state==true)){
        console.log('in');
        $('.navbar-content .links').toggleClass('show-links');
        $('#bars i').toggleClass('fa-bars').toggleClass('fa-times');
        state=false;
    }
});
$('#bars').click(()=>{
    if($(window). width() > 1070) return;
    $('.navbar-content .links').toggleClass('show-links');
    $('#bars i').toggleClass('fa-bars').toggleClass('fa-times');
    state=!state;
});
$('.tab').click((e)=>{
    $('.tab.active').toggleClass('active');
    // console.log(e.target);
    e.target.classList.add('active');
});
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 150) {
        $('#goToTop').attr('style','visibility:visible;opacity:1;')
    } else {
        $('#goToTop').attr('style','visibility:hidden;opacity:0;')
    }
});
$('#goToTop').click(()=>{
    $(window).scrollTop(0);
});
