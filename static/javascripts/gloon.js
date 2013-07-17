$(window).load(function() {
	$(".slider").each(function() {
		$(this).cycle({
			fx : 'scrollUp, scrollDown, scrollLeft, scrollRight',
			randomizeEffects : true,
			speed : 400,
			timeout : 5000,
			delay : $(this).data('value')
		});
	});
});

$(function() {
	$("#tabs").tabs({
		fx : {
			width : 'toggle',
			duration : '500'
		}
	});

	$("#login").click(function(e) {
	
			$(".signuplogin").modal({
				containerCss:{
					width:800,
					height:600,
				}
			});
			return false;
		});
	$("#logout").click(function(e) {
		 
		    $.get('/logout/', function(data) {	
		    	var spanTag=$("#userdetailsbox span")		    	
		    	if(spanTag.parent().is("a")){
		    		$("#userdetailsbox span").unwrap();
		    	}			    								    
				
				$("#userdetailsbox span").text("Guest");				
				$("#logout").css("display","none");
				$("#login").css("display","block");	
				$("#userAvatar").css("display","none");
				var currentUrl =$(location).attr('href');
				if(currentUrl.indexOf("profile")!=-1)
				{
					window.location.href='/';
				}
					
						
			
		});	
			return false;
		});	
	

	
	$("#createpost").click(function(e) {
			$(".userpost").modal({
	
				onOpen : function(dialog) {
					dialog.overlay.fadeIn('slow', function() {
						dialog.container.slideDown('slow', function() {
							dialog.data.fadeIn('slow');
						});
					});
				},
				onShow: function()
				{
					iFrameOn();
				},
				containerCss:{
					width:1280,
					height:800,
				}
			});
	
			return false;
		});
	
	
	$('#loginForm').unbind('submit').submit(function(e) {
		$.post('/login/', $("#loginForm").serialize(), function(data) {
			if (data.available) {
				$.modal.close();
				$("#userdetailsbox span").text("" + data.username + "");
				var url="/profile/"+data.userid
				$("#userdetailsbox span").wrap('<a href='+url+' class="colorWhite"></a>');		
						
				$("#login").css("display","none");
				$("#logout").css("display","block");
				$("#userAvatar").css("display","inline");

			} else {
				$("#errormessage").css("display", "block");
			}
		}, 'json');

		return false;
	});
	
	
	$('#signupForm').unbind('submit').submit(function(e) {				
				$.post('/signup/', $("#signupForm").serialize(), function(data) {
					if (data.Success) {
						$.modal.close();								
					}
				}, 'json');
		
				return false;
			});
	
	

});

