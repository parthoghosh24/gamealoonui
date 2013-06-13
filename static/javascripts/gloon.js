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

	/*
	 * Something is screwed up... will check later.
	 */	 
	$("#login").click(function(e) {
	
			$(".signuplogin").modal();
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
						
			
		});	
			return false;
		});	
	

	$(".basic").click(function(e) {
		$("#container").modal({

			onOpen : function(dialog) {
				dialog.overlay.fadeIn('slow', function() {
					dialog.container.slideDown('slow', function() {
						dialog.data.fadeIn('slow');
					});
				});
			},
			onShow : function() {
				tinymce.init({
					selector : "textarea#content",
					theme : "modern",
					width : 800,
					height : 400,
					plugins : ["advlist autolink link image lists charmap preview hr anchor pagebreak spellchecker", "searchreplace wordcount visualblocks visualchars insertdatetime media nonbreaking emoticons", "save contextmenu directionality emoticons template paste textcolor"],
					toolbar1 : "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
					toolbar2 : "preview media | forecolor emoticons",
					content_css : "css/content.css"
				});
			}
		});

		return false;
	});

	$('#loginForm').unbind('submit').submit(function(e) {
		$.post('/login/', $("#loginForm").serialize(), function(data) {
			if (data.available) {
				$.modal.close();
				$("#userdetailsbox span").text("" + data.username + "");
				$("#userdetailsbox span").wrap('<a href="#"></a>');				
				$("#login").css("display","none");
				$("#logout").css("display","block");

			} else {
				$("#errormessage").css("display", "block");
			}
		}, 'json');

		return false;
	});
	
	$('#signupForm').unbind('submit').submit(function(e) {
			$.post('/signup/', $("#signupForm").serialize(), function(data) {
				if (data.available) {
					$.modal.close();
					$("#userdetailsbox span").text("" + data.username + "");
					$("#userdetailsbox span").wrap('<a href="#"></a>');
	
				} else {
					$("#errormessage").css("display", "block");
				}
			}, 'json');
	
			return false;
		});
	

});

