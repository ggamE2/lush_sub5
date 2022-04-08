
$(function(){
//menu
$(".gnb>li").on("mouseover focus", function(){
 $(this).find(".sub").slideDown(300);     
});
    
$(".gnb>li").on("mouseleave blur", function(){
 $(this).find(".sub").slideUp(300);     
});   

    
    
//user
$(".user_icon").on("click",function(){
$(".user_in").fadeIn();
});
$(".user_in .close").on("click",function(){
$(".user_in").fadeOut();    
});    
  
//search
$(".search_icon").on("click",function(){
$(".search_box").slideToggle(300);
$(".header").css("background","rgba(255,255,255,0.6)");
    
});    
    
});   //function end