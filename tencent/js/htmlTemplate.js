//准备文件区域的html结构
function filesHtml(fileData){
    var fileHtml=`
        <div class="file-item">${filesHtmlInner(fileData)}</div>
    `;
   return fileHtml;
}
function filesHtmlInner(fileData){
    
	var fileHtml = `
            <div class="item" data-file-id="${fileData.id}">
                <lable class="checkbox"></lable>
                <div class="file-img">
                    <i></i>
                </div>
                <p class="file-title-box">
                    <span class="file-title">${fileData.title}</span>
                    <span class="file-edtor">
                        <input class="edtor" value="${fileData.title}" type="text"/>
                    </span>
                </p>
            </div>
        `;

    return fileHtml;
}

//返回指定id下所有子数据的html结构
function createFilesHtml(datas,renderId){
	var childs = dataControl.getChildById(datas,renderId);
	var html = "";
	childs.forEach(function(item){
		html += filesHtml(item);
	});

	return html;
}

//准备树形菜单的html结构
function treeHtml(data,treeId){

	var childs = dataControl.getChildById(data,treeId);
	var html = "<ul>";

	childs.forEach(function (item){
		//获取到当前数据的层级 通过id获取
		var level = dataControl.getLevelById(data,item.id);
		/*tree-nav tree-contro*/

		//判断当前这个数据有没有子数据 通过id判断
		var hasChild = dataControl.hasChilds(data,item.id);
		var classNames = hasChild ? "tree-contro" : "tree-contro-none";

		html += `
            <li>
                <div class="tree-title ${classNames}" data-file-id="${item.id}" style="padding-left:${level*14}px">
                    <span>
                        <strong class="ellipsis">${item.title}</strong>
                        <i class="ico"></i>
                    </span>
                </div>
                ${treeHtml(data,item.id)}
            </li>
		`	
	})

		
	html += "</ul>";

	return html;
}
//准备树形菜单的DOM对象结构
function treeHtmlNew(data,item){
    var oLi=document.createElement('li');
    var level = dataControl.getLevelById(data,item.id);
    
    oLi.innerHTML=`
                <div class="tree-title tree-contro-none" data-file-id="${item.id}" style="padding-left:${level*14}px">
                    <span>
                        <strong class="ellipsis">${item.title}</strong>
                        <i class="ico"></i>
                    </span>
                </div>
                <ul></ul>
    `;
    return oLi;
}

//通过id得到当前这个id所有的父数据，得到一个结构
function createPathNavHtml(datas,fileId){
	//找到指定id所有的父数据
	var parents = dataControl.getParents(datas,fileId).reverse(); 
	var pathNavHtml = '';
	var len = parents.length;

	parents.forEach(function(item,index){
		if( index === parents.length-1 ) return;
		pathNavHtml += `
				<a href="javascript:;" style="z-index:${len--}" data-file-id="${item.id}">
					${item.title}
				</a>
			`;
	});
	//是当前这个一层的导航内容
	pathNavHtml += `
			<span class="current-path" style="z-index:${len--}">
				${parents[parents.length-1].title}
			</span>
		`;

	return pathNavHtml;
	
}
//渲染文件区域
function renderFile(data,renderId){
   
        var childs=dataControl.getChildById(data,renderId);
        var html="";
        if(childs.length){
            childs.forEach(function(item){
            html+=filesHtml(item);
                });
            tools.$('.g-empty')[0].style.display="none";
            
        }else{
            tools.$('.g-empty')[0].style.display="block";
           
        }
        
       return html;
    }


//根据id定位树形结构的当前文件,给其添加样式
function positionTreeById(positionId){
        var ele=document.querySelector(".tree-title[data-file-id='"+positionId+"']");
        tools.addClass(ele,'tree-nav');
    }
//渲染导航区域
function navStructure(datas,fileId){
    
        var parents=dataControl.getParents(datas,fileId);
        parents=parents.reverse();
        var pathNavHtml="";
        parents.forEach(function(item,i){
            if(i!==parents.length-1){
                 pathNavHtml+=`
                    <a href="javascript:;" style="z-index:${parents.length-i}" data-file-id="${item.id}">${item.title}</a>
                    `;
                }else{
                    pathNavHtml+=`
                        <span style="z-index:${parents.length-i}" data-file-id="${item.id}">${item.title}</span>
                        `; 
                }
           
            
        });
        return pathNavHtml;
}


function tip(classN,content){//提示文字动画
       
        var fullTip=tools.$('.full-tip-box')[0];
        //fullTip.style.top=0;
        clearInterval(fullTip.timer);
        var tipText=tools.$('.text',fullTip)[0];
        fullTip.style.top='-32px';
        fullTip.style.transition='none';
        setTimeout(function(){
            tools.addClass(fullTip,classN);
            fullTip.style.top='0px';
            fullTip.style.transition='.3s';
        },0)
        
        tipText.innerHTML=content;

        fullTip.timer=setTimeout(function(){
            fullTip.style.top='-32px';
            tools.removeClass(fullTip,classN);
        }, 3000)
}


