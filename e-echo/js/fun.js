window.onload=function(){
	//document.getElementsByTagName('html')[0].style.fontSize=100*document.documentElement.offsetWidth/960+'px';
	var forImg=document.getElementsByClassName('forImg');
	var type=document.getElementsByClassName('iType')[0];
	var oLi=type.getElementsByTagName('li');
	for(var i=0;i<oLi.length;i++){
		oLi[i].index=i;
		oLi[i].style.background='url(img/nav_bg.png) no-repeat '+(-9-66*i)+'px top';
		oLi[i].onmouseover=function(){
			this.style.background='url(img/nav_bg.png) no-repeat '+(-9-66*this.index)+'px -70px';
		}
		oLi[i].onmouseout=function(){
			this.style.background='url(img/nav_bg.png) no-repeat '+(-9-66*this.index)+'px top';
		}
	};
	
	
	for(var j=0;j<forImg.length;j++){
		forImg[j].src='img/content/hot'+(j+1)+'.gif';
		
	};
	
	
	
	//导航交互
	var str=['例如：麻辣小龙虾','昌平区百善镇','万达影城优惠券','美食攻略','北京九月的雨']
	var oINav=document.getElementsByClassName('iNav')[0];
	var NavLi=oINav.getElementsByTagName('li');
	for(var i=0;i<NavLi.length;i++){
		NavLi[i].index=i;
		NavLi[i].onclick=function(){
			for(var j=0;j<NavLi.length;j++){
				NavLi[j].className=''
			}
			this.className='active';
			oNavinput.placeholder=str[this.index]
		}
		
	};
	var oNavinput=document.getElementsByClassName('navInput')[0];
	//文字弹性运动
	var oMove=document.getElementById('move');
	var liTimes=oMove.getElementsByTagName('li');
	
	var timer;
	var speed=0;
	var count=1;
	var times=liTimes.length;
	clearInterval(timer);
	clearInterval(timer2);
	var timer2;
	
	timer2=setInterval(function(){
	
		moveAll()
		
	},2000)
		function moveAll(){
			clearInterval(timer)
			timer=setInterval(function(){
				
		move(-25*(count%times))
		
		
		},50)
		function move(target){
			speed+=(target-oMove.offsetTop)/6;
			speed*=0.9
			oMove.style.top=oMove.offsetTop+speed+'px';
			if(Math.abs(oMove.offsetTop-target)<=1&&Math.abs(speed)<=1){
				clearInterval(timer);
				oMove.style.top=target+'px';
				speed=0;
				
			count++;
		
			
		
				
				
			}
		
	};
	
		}
		
		
	
	
//分离导航的交互
var oShop=document.getElementById('shop');
var oChangeLi1=oShop.getElementsByTagName('li');
for(var i=0;i<oChangeLi1.length;i++){
	oChangeLi1[i].onclick=function(){
		for(var j=0;j<oChangeLi1.length;j++){
		//oChangeLi1[j].className=oChangeLi1[j].className.substring(oChangeLi1[j].className.indexOf('a',5)-1)
		//console.log(oChangeLi1[j].className.indexOf('a',5))
		}
		this.className+=' active'
	}
	
}

//正则登录框
var oLogin=document.getElementsByClassName('messageInput');
var login=document.getElementById('userlogin');
var re=/\b[^_]\w{5,12}\b/;
var rePw=/.{8,}/
login.onclick=function(){
if(!re.test(oLogin[0].value)){
	
	alert('用户名不能空，不能以下划线开头，且长度大于5小于12')
}
if(!rePw.test(oLogin[1].value)){
	alert('请输入大于8位的密码')
}
};

//本地存储
if(window.localStorage.getItem('username')){
	oLogin[0].value=window.localStorage.getItem('username')
}
if(window.localStorage.getItem('password')){
	oLogin[1].value=window.localStorage.getItem('password')
}
var remember=document.getElementsByClassName('borderCheckbox')[0];
window.onunload=function(){
	
	if(remember.checked){
	if(oLogin[0].value){
		window.localStorage.setItem('username',oLogin[0].value)
		
	}
	if(oLogin[1].value){
		
		window.localStorage.setItem('password',oLogin[1].value)
	}
	
}
};
//页面共享 有bug
window.addEventListener('storage',function(ev){
	ev=event||ev;
	
	if(ev.key=='username'){
		if(ev.newValue==oLogin[0].value)
		{oLogin[0].value=ev.newValue}
	}
	if(ev.key=='password'){
		if(ev.newValue==oLogin[1].value){
			oLogin[1].value=ev.newValue
		}
		
	}
});
//图片切换
var picMove=document.getElementById('picMove');
var oImgpicMove=picMove.getElementsByTagName('img');
var oCurrent=document.getElementsByClassName('current')[0];
var timerPic;
var picNum=0;
	clearInterval(timerPic)
	timerPic=setInterval(function(){
		for(var j=0;j<oImgpicMove.length;j++){
			oImgpicMove[j].className="";
		}
		oImgpicMove[picNum%3].className="click";
		oCurrent.src='img/content/img'+(picNum%3+1)+'.gif'
		
		picNum++;


	},2000)
	var oStop=document.getElementById('stop');
	oStop.onmouseover=function(){
		clearInterval(timerPic)
	}
	oStop.onmouseout=function(){
		clearInterval(timerPic)
		timerPic=setInterval(function(){
		for(var j=0;j<oImgpicMove.length;j++){
			oImgpicMove[j].className="";
		}
		
		oCurrent.src='img/content/img'+(picNum%3+1)+'.gif';
		
		oImgpicMove[picNum%3].className="click";
		picNum++;
		
		

	},2000)
	};
	
	//鼠标移入变色
	var oAbove=document.getElementById('above');
	var mouseChange=document.getElementsByClassName('mouseChange');
	for(var m=0;m<mouseChange.length;m++){
		mouseChange[m].index=m;
		mouseChange[m].onmouseover=function(){
			oAbove.style.top=31*this.index+'px'
		
			
		}
	};
	//小遮罩
	var oHotImg=document.getElementById('hotImg');
	var zhezhaoLi=oHotImg.getElementsByTagName('li');
	var oZhezhao=document.getElementsByClassName('zhezhao');
	for(var i=1;i<zhezhaoLi.length;i++){
		zhezhaoLi[i].index=i;
		zhezhaoLi[i].onmouseover=function(){
			oZhezhao[this.index-1].style.zIndex=999;
		}
		zhezhaoLi[i].onmouseout=function(){
			oZhezhao[this.index-1].style.zIndex=-1;
		}
	}

//搜书
var oSearchWeb=document.getElementById('searchWeb')
var oNavInput=document.getElementsByClassName('navInput')[0];
var reBook=/书店/
oSearchWeb.onclick=function(){
	if(1){
		window.open('bookshop.html')
	}
}
}
	