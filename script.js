
// FADE IN ANIMATION
window.addEventListener('scroll',()=>{
    


    if(window.scrollY > 600) {
        document.querySelector('.navbar').classList.add('fixed-top');
        document.querySelector('.navbar').classList.add('animate__slideInDown');
       
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
    } 

    else{
        document.querySelector('.navbar').classList.remove('animate__slideInDown');
        document.querySelector('.navbar').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
    } 
    
})



$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        center:true,
        loop:true,
        margin:10,
        nav:true,
        touchDrag:true,
        autoplay:true,
        responsive:{
            600:{
                items:4
            },
            400:{
                items:2
            }
        }
    })

});

