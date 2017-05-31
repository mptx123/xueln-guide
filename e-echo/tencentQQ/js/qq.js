window.onload=function(){
	var oNav=document.getElementsByClassName('nav')[0];
	var oMark=document.getElementsByClassName('mark')[0];
	var oLi=document.getElementsByClassName('tan');
	var oWord=document.getElementById('iWord');
	var oIpic=document.getElementById('iPic');
	var word=oWord.children;
	for(var i=0;i<oLi.length;i++){
	oLi[i].onmouseover=function(){
		alert('12')
		var timer;
		var t=108+136(i-1);
		tanMove(oMark,t);
		
		
	}
		
	}
	
	var timer;
	var speed=960;
	clearInterval(timer);
	var n=1;
	var j=1;
	function single(){
		var timer2;
		clearInterval(timer2);
		timer2=setInterval(function(){
			oIpic.style.left=oIpic.offsetLeft-96+'px';
			if(oIpic.offsetLeft=-960*n){
				clearInterval(timer2);
				n++
				
			}
		},50)
		
	}
	timer=setInterval(function(){
		
		if(oIpic.offsetLeft==-3840){
			oIpic.style.left=0;
		}
		else{
			single();
			
		}
		for(var i=0;i<word.length;i++){
			word[i].className='';
		}
		word[j%5].className='active';
		j++;
		
	},2000)
	
	
	
	for(var m=0;m<word.length;m++){
		word[m].index=m;
	word[m].onmouseover=function(){
		var index=this.index;
		for(var n=0;n<word.length;n++){
			word[n].className='';
		}
		this.className='active';
		clearInterval(timer);
		oIpic.style.left=-960*index+'px';
		
	}
	word[m].onmouseout=function(){
		j=this.index+1;
		timer=setInterval(function(){
		
		if(oIpic.offsetLeft==-3840){
			oIpic.style.left=0;
		}
		else{
			oIpic.style.left=oIpic.offsetLeft-speed+'px';
		}
		for(var i=0;i<word.length;i++){
			word[i].className='';
		}
		word[j%5].className='active';
		j++;
		
	},2000)
	}
	}
	
	
	function tanMove(obj,target){
	var speed=0;
	timer=setInterval(function(){
		speed+=(target-obj.offsetLeft)/8;
		speed*=7;
		obj.style.left=obj.offsetLeft+speed+'px';
		
	},500)
		
	}
	function move(){
		
		
	}
	}