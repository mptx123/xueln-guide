/**
 * Created by SHULIEKEJI on 2016/9/30.
 */

$(function(){

	/* var i=1;
	var w=$('.move li').width();
    var timer;
    clearInterval(timer)
	timer=setInterval(function(){
		$('.move').animate({left:-w*(i%3)},1000,'linear')
		$('.moveWord li').removeClass('active');
		$('.moveWord li').eq(i%2).addClass('active')
		if(i%2==0){
            $('.move').css('left',0)
            console.log($('.move').css('left'))
           
        }
        console.log(i)
            i++; 
        
       
	},2000) */
   var $left=0;
    $('.arrow').eq(0).click(function(){
        //clearInterval(timer);
       if($('.move').position().left==0){
         $('.move').animate({left:-1200},1000,'linear')
        $('.moveWord li').removeClass('active');
        $('.moveWord li').eq(1).addClass('active')
       }
       

    })
     $('.arrow').eq(1).click(function(){
        //clearInterval(timer);
       if($('.move').position().left<0){
        $('.move').animate({left:0},1000,'linear')
         $('.moveWord li').removeClass('active');
        $('.moveWord li').eq(0).addClass('active')
       }
        
    })
})