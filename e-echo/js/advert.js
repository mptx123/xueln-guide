
var oAdvert=document.getElementById('advert');
var timer;
var speedL=10;
var speedT=10;

var dL=document.documentElement.clientWidth-oAdvert.offsetWidth;
var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
var dT=document.documentElement.clientHeight+scrollTop-oAdvert.offsetHeight;
window.onscroll=function(){
	scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	dT=document.documentElement.clientHeight+scrollTop-oAdvert.offsetHeight;
}
clearInterval(timer);
timer=setInterval(function(){

if(Math.abs(oAdvert.offsetLeft-dL)<=5){
speedL*=-1;
oAdvert.style.left=dL+'px';
}
if(Math.abs(oAdvert.offsetTop-dT)<=5){
speedT*=-1;
oAdvert.style.top=dT+'px';
}
if(oAdvert.offsetLeft<=1){
speedL=Math.abs(speedL);
}
if(oAdvert.offsetTop<=1){
speedT=Math.abs(speedT);
}
oAdvert.style.left=oAdvert.offsetLeft+speedL+'px';
oAdvert.style.top=oAdvert.offsetTop+speedT+'px';
},200)




 var atr=[];
   for(var i=20;i>0;i-=2){

    atr.push(i,-i);
   }
   atr.push(0);

   oAdvert.onclick=function(){
    
   var timer;
   var w=parseInt(getComputedStyle(oAdvert).left);

      var a=0;
       clearInterval(timer)
    timer=setInterval(function(){
oAdvert.style.left=w+atr[a]+'px';
a++;

    }, 50)
	setTimeout(function(){
			window.open('remark.html')
	},1000)
	
   }
   
   var oClose=document.getElementById('close');
   oClose.onclick=function(){
	   oAdvert.style.display='none';
	   oAdvert.onclick=null;
   }