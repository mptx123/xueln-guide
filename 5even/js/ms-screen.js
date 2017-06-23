$(function(){
	$('.click-bar').click(function(){
		var that=this;
		$('.nav-slide-down').slideToggle('normal',function(){
			if($('.nav-slide-down').css('display')=="block"){
				$(that).html('&#xe645;')
			}else{
				$(that).html('&#xe654;')
			}
		});
		
		
	});
})
