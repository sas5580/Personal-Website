var addActive = function(section){
	$('#navbar-items li[data-id]').each(function(index){
		$(this).removeClass("active");
	});	

	if (section) $(section+"-btn").addClass('active');
}

var scrollToID = function(id, speed){
	var offset = 70;
	var targetOffset = $(id).offset().top - offset;	
	if (id==="#about") targetOffset -= 250;	

	//addActive(id);

	$('html,body').animate({scrollTop:targetOffset}, speed);
}

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
	$('*[data-text]').each(function(index){
		$(this).html(data[$(this).attr('data-text')]);
	});

	//Add projects
	
	$('.carousel-indicators').empty();
	$('.carousel-inner').empty();

	for (i in data.projects){
		var proj = data.projects[i];
		var ind = i.toString();
		var active = i==0 ? 'active':'';		

		$('<li/>',{			
			"data-target": "#projects",
			"data-slide-to": ind,
			"class": active,
		}).appendTo(".carousel-indicators");



		$('<div/>', {
			"id": "project"+ind,
			"class": "item "+active,
		}).appendTo(".carousel-inner");



		$('<img>', {
			"src": proj.img,
		}).appendTo('#project'+ind);

		$('<div/>', {
			"id": "caption"+ind,
			"class": "carousel-caption",
		}).appendTo('#project'+ind);



		$('<h3/>',{
			"text": proj.name,
		}).appendTo("#caption"+ind);

		$('<p/>',{
			"text": proj.description,
		}).appendTo("#caption"+ind);

		$('<a/>',{
			"class" : "btn btn-project btn-lg",
			"href" : proj.link,
			"target" : "_blank",
			"text": "View",
		}).appendTo("#caption"+ind);
	}
	

	addActive("#intro");
	newArt(false);	

	$('#navbar-items li[data-id]').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr('data-id');
		scrollToID(sectionID, 750);
	});

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll<200)
			addActive("#intro");
		else if(scroll<780)
			addActive('#about');
		else if(scroll<1775)
			addActive('#projects');
		else
			addActive('#contact');		
	});
});
