var newArt = function(anim){

	rand = Math.ceil(Math.random()*28);		

	if ($('#art').attr('data-ind')){
		rand = (parseInt($('#art').attr('data-ind'))+rand)%30+1;		
	}

	if (anim){
		$('#art').fadeOut(750, "swing" ,function() {			
	        $('#art').attr("src","assets/img/art/"+(rand)+".jpg");
	        $('#art').attr("data-ind", rand);
	        $('#art').fadeIn(100, "easeOutCubic", null);	        
	    });	
	}else{
		$('#art').attr("src","assets/img/art/"+rand+".jpg");
		$('#art').attr("data-ind", rand);
	}
}


$(function(){	
	newArt(false);	
});