/* 
* @Author: Marte
* @Date:   2017-02-02 14:09:32
* @Last Modified by:   Marte
* @Last Modified time: 2017-02-07 19:54:26
*/

(function(){

    //目录高度自适应
    var headerHeight=tools.$('.header')[0].offsetHeight;
    var weiyunContent=tools.$('.weiyun-content')[0];
    function changeHeight(){
        var viewHeight=document.documentElement.clientHeight;
        weiyunContent.style.height=viewHeight-headerHeight+'px';
    }
    changeHeight();
    window.onresize=changeHeight;


    var datas=data.files;

    //初始化文件区域
    var fileList=tools.$('.file-list')[0];
    fileList.innerHTML= renderFile(datas,0);
    
    
   
    //初始化菜单区域
    var treeMenu=tools.$('.tree-menu')[0];
    treeMenu.innerHTML=treeHtml(data.files,-1);
    //定位菜单样式
    positionTreeById(0);
    

    
    function renderFileNavTree(datas,fileId){
        
        //点击，导航对应
        navMenu.innerHTML=navStructure(datas,fileId);

        //点击，文件区域对应
        fileList.innerHTML= renderFile(datas,fileId);
        //点击时树形菜单定位样式
        tools.removeClass(tools.$('.tree-nav')[0],'tree-nav');
        positionTreeById(fileId);
    }


    //点击树形菜单展开导航和文件区域
    var navMenu=tools.$('.path-nav')[0];
    tools.addEvent(treeMenu,'click',function(ev){
        var target=ev.target;
        target=tools.parents(target,'.tree-title');
        var fileId=target.dataset.fileId;
        //展开结构
        renderFileNavTree(datas,fileId);
        tools.removeClass(checkAll,'checked')
        });
    
 

    //点击文件区域 展开文件区域和导航
    var fileList=tools.$('.file-list')[0];
    tools.addEvent(fileList,'click',function(ev){
        var target=ev.target;
        target=tools.parents(target,'.item');
        var fileId=target.dataset.fileId;
        //展开结构
        renderFileNavTree(datas,fileId);
    });


    //点击导航区域，展开文件区域和导航
    var pathNav=tools.$('.path-nav')[0];
    tools.addEvent(pathNav,'click',function(ev){
        var target=ev.target;
        var fileId=target.dataset.fileId;
       
       //展开结构
        renderFileNavTree(datas,fileId);
    })

    
   
    
    //点击、拖动  选择取消选择
    
    //拖动：鼠标移入 同上但框是选中的，鼠标移出不用判断，就是消失，框是不选中的；
    //拖动的背景块
    //双向全选反选功能是独立功能，待封装
   
   
   var fileItem=tools.$('.file-item',fileList);
   var checkBoxSingle=tools.$('.checkbox',fileList);
   var checkAll=tools.$('.checked-all')[0];

   function isSelectAll(){//全选反选功能
        var singleChecked=tools.$('.checked',fileList);
        
        if(singleChecked.length==fileItem.length){

            tools.addClass(checkAll,'checked')
        }else{
            tools.removeClass(checkAll,'checked')
        }
    }
   tools.each(fileItem,function(item,index){
        var checkBox=tools.$('.checkbox',item)[0];
        //鼠标移入移出
        /*
        tools.addEvent(fileList,'mouseenter',function(ev){
            tools.addClass(ev.target,'file-checked');
        })*/
        tools.addEvent(item,'mouseenter',function(){
            tools.addClass(this,'file-checked');
        });
        //移出时判断是否选择，不选择时才隐藏、背景色
        tools.addEvent(item,'mouseleave',function(){

            if(!tools.hasClass(checkBox,'checked')){
                tools.removeClass(this,'file-checked');
            }
            
        });

        //点击时阻止冒泡。背景图片位置变化；
        tools.addEvent(checkBox,'click',function(ev){
            ev.stopPropagation();
            tools.toggleClass(this,'checked');
            //每点击一下判断checked的数量如果是满的则全选，反之则反选
            isSelectAll();

        });
        //点击一下全选按钮选中则都加checked类名，反之移除checked 有bug
        
        tools.addEvent(checkAll,'click',function(ev){

            alert('12')
            if(tools.toggleClass(this,'checked')){
                tools.each(fileItem,function(item,i){
                    tools.addClass(item,'file-checked');
                    tools.addClass(checkBoxSingle[i],'checked');
                })


            }else{
                tools.each(fileItem,function(item,i){
                    tools.removeClass(item,'file-checked')
                    tools.removeClass(checkBoxSingle[i],'checked');
                })
            }
        });

   });
   function whoSelect(){//tbd
        var arr=[];

   }

//鼠标按下，记录x/y。鼠标移动 记录x/y 相减得到div的宽高 插入document
//鼠标按下的条件下，碰撞检测
//鼠标松开 div消失 

    var disX=0;
    var disY=0;
    var oDiv=null;
    function move(ev){//用于鼠标松开时取消事件
            var ev=event||ev;
            var endX=ev.clientX;
            var endY=ev.clientY;
            console.log(disX);
            if(Math.abs( endX-disX)>5 &&Math.abs( endY-disY )>5){
                oDiv.style.width=Math.abs( endX-disX)+'px';
                oDiv.style.height=Math.abs( endY-disY )+'px';
                
                //div的起始位置 取决于最小的值
               
                oDiv.style.top=Math.min(endY,disY)+'px';
                oDiv.style.left=Math.min(endX,disX)+'px';
            }
            


            ev.preventDefault();
                 //
            tools.each(fileItem,function(item,i){
                //假如碰撞了 item加class 并且判断checked的数量如果是满的则全选，反之则反选。没碰撞 移除class
                if(tools.peng(oDiv,item) ){
                    tools.addClass(item,'file-checked');
                    tools.addClass(checkBoxSingle[i],'checked');

                    isSelectAll();

                }else{
                    tools.removeClass(item,'file-checked')
                    tools.removeClass(checkBoxSingle[i],'checked');
                }
            });
            //checked-all碰撞时 要给所有的fileItem加class ，没碰撞时，要所有的移除class
            /*if(tools.peng(oDiv,checkAll)){
                tools.addClass(this,'checked');
                tools.each(fileItem,function(item,i){
                    tools.addClass(item,'file-checked');
                    tools.addClass(checkBoxSingle[i],'checked');
                })


           
        }else{

        }*/
    }
    function mouseUp(){
        document.body.removeChild(oDiv);
        tools.removeEvent(document,'mousemove',move);//取消鼠标移动
        tools.removeEvent(document,'mouseup',mouseUp);
    }
    tools.addEvent(document,'mousedown',function(ev){//鼠标按下，记录x/y 创建div插入document
        var ev=event||ev;
        if(tools.parents(ev.target,'.nav')){
            return false;
        }
        disX=ev.clientX;
        disY=ev.clientY;

        oDiv=document.createElement('div');
        oDiv.className='selectTab';
        document.body.appendChild(oDiv);
       
        tools.addEvent(document,'mousemove',move);

        tools.addEvent(document,'mouseup',mouseUp)//鼠标松开 div消失 鼠标移动事件取消




    });

    

   //新建文件
   var createFile=tools.$('.create')[0];
   tools.addEvent(createFile,'mouseup',function(){
     var flag=true;//用来设置document的点击事件

    //新建一个不重复节点
    
     var addFile={
            id:new Date().getTime(),//将目前data的id组成数组，给出一个不重复的
            pid:parseInt(tools.$('.tree-nav')[0].dataset.fileId),//获取当前定位的树形id
            title:"",
            type:"file"}

    //以DOM对象的方式创建文本区域的BOM节点
    
    function fileDom(addFile){
        var fileDOM=document.createElement('div');
        fileDOM.className='file-item';
        fileDOM.innerHTML=filesHtmlInner(addFile);
        //显示输入框
        tools.$('.file-title',fileDOM)[0].style.display='none';
        tools.$('.file-edtor',fileDOM)[0].style.display='inline-block';

        return fileDOM;
    }

    //文件区域插入DOM节点
    tools.$('.g-empty')[0].style.display="none";   //同时把背景图隐藏 
    fileList.insertBefore(fileDom(addFile),fileItem[0]);

    //输入框获得焦点 
    tools.$('.edtor')[0].focus();
    //点击任意位置把填的内容加到title里，新增节点插入 找到第一个pid 在数组中插入到前面
    tools.addEvent(document,'mousedown',function(){
        if(flag){
            if(tools.$('.edtor')[0].value.trim()){//验证输入框是否为空,不为空提示成功
            tip('ok','创建文件成功');
           
            addFile.title=tools.$('.file-title')[0].innerHTML=tools.$('.edtor')[0].value;

            //隐藏输入框
            tools.$('.file-title')[0].style.display='inline-block';
            tools.$('.file-edtor')[0].style.display='none';
            console.log(addFile);

             //将不重复节点插入data数据最前面
            data.files.unshift(addFile);

            //创建添加树形菜单的DOM对象
            //var level=parseInt(tools.$('.tree-nav')[0].style.paddingLeft)+14;//根据父节点计算往里缩的值
            var treeHtmlDOM=treeHtmlNew(data.files,addFile);
            //tools.$('.tree-title',treeHtmlDOM)[0].style.paddingLeft=level+'px';
            tools.$('.tree-nav')[0].nextElementSibling.appendChild(treeHtmlDOM);
            //加小标
            if( ! tools.hasClass(tools.$('.tree-nav')[0],'tree-contro') ){
                tools.addClass(tools.$('.tree-nav')[0],'tree-contro');
                tools.removeClass(tools.$('.tree-nav')[0],'tree-contro-none')
            }
           
            //发送新节点给后台
            
        }else{

            //为空则删除新建的dom
            tip('err','创建文件失败');
            fileList.removeChild(fileItem[0]);
            if(!fileList.innerHTML){//如没有文件则把背景图显示
                
                tools.$('.g-empty')[0].style.display="block";
            }
            tools.removeEvent(document,'mousedown');
        }
        flag=false;
        }
        
    })
    
      
       
   })
})()