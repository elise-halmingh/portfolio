$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });
});

(function () {
    var btn = document.getElementsByClassName("feedback-body__submit")[0];
    btn.onclick = function(e) {
        e.preventDefault()
    }
 })()