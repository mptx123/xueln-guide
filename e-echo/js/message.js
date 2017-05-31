/* 
* @Author: Marte
* @Date:   2016-09-27 13:23:30
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-27 13:54:36
*/

var sendContent=document.getElementById('sendContent')
var sendPerson=document.getElementsByClassName('sendPerson')[0]
var sendBtn=document.getElementById('sendBtn')
var oDiv=document.getElementById("content");
var str=["img/girl.jpg","img/boy.jpg"];
var j=0;
sendContent.focus();
function fn(){
sendPerson.setAttribute("src",str[j]);
}
sendPerson.onclick=function(){
if(j==0){j=1;}
else{j--;}
fn();
}

sendBtn.onclick=function(){
var oDiv1=document.createElement("div");
var oF=oDiv.firstChild;
oDiv.insertBefore(oDiv1,oF);

if(j==0){
oDiv1.innerHTML='<span>'+sendContent.value+'</span><img class="sendPerson" src="'+str[j]+'"/>';
oDiv1.className="right";
}
else{
oDiv1.innerHTML='<img class="sendPerson" src="'+str[j]+'"/><span>'+sendContent.value+'</span>';
oDiv1.className="left";
}

}
