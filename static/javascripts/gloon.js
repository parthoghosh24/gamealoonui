function openLoginModal()
  {
    	$(".signupOrLogin").modal({
    			onOpen : function(dialog) {
					dialog.overlay.fadeIn('slow', function() {
						dialog.container.slideDown('slow', function() {
							dialog.data.fadeIn('slow');
						});
					});
				},
				containerCss:{
					width:800,
					height:600,
					padding:0
				}
			});
  }


 
$(function() {			
   
   $('#platform').click(function() {
   		$('.platformMenu').removeClass('hiddenDiv');
   		$('.platformMenu').hide();
   		$('.platformMenu').fadeIn("slow");
      });
    
	$("#login").click(function(e) {
	
			openLoginModal();
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
				$("#userAvatarImage").css("display","none");
				var currentUrl =$(location).attr('href');
				if(currentUrl.indexOf("profile")!=-1)
				{
					window.location.href='/';
				}
				else
				{
					location.reload();
				}
					
						
			
		});	
			return false;
		});	
	
	$('#loginForm').unbind('submit').submit(function(e) {
		var loginBotCatcher = $('#loginBotCatcher').val();
		if(loginBotCatcher.length==0)
		{
				$.post('/login/', $("#loginForm").serialize(), function(data) {			
				if (data.status=="success") {
					$.modal.close();
					$("#userdetailsbox span").text("" + data.username + "");
					var url="/profile/"+data.userid
					$("#userdetailsbox span").wrap('<a href='+url+' class="colorWhite"></a>');		
							
					$("#login").css("display","none");
					$("#logout").css("display","block");
					$("#userAvatarImage").attr("src",data.userAvatar);
					location.reload();
	
				} else {
					$("#errorMessage").css("display", "block");
					$("#errorMessage").hide();
					$("#errorMessage").fadeIn("slow");
					
				}
			}, 'json');
		}		
		return false;
	});
	
	
	function validateEmail(email)
	{
		if(isValidEmailAddress(email))
		{
			$('#emailErrorMessage').text('');
			$('#emailErrorMessage').removeClass('validationFailed');
			
			$.get('/user/validateEmail',{'email':email}, function(data){
				if(data.status =='fail')
				{
					$('#emailErrorMessage').text('Email exists!');
					$('#emailErrorMessage').addClass('validationFailed');
				}
				else
				{
					$('#emailErrorMessage').text('');
					$('#emailErrorMessage').removeClass('validationFailed');
				}
				disableSignUpButtonOnError();
			},'json');
		}
		else
		{
			$('#emailErrorMessage').text('Not a valid email!');
			$('#emailErrorMessage').addClass('validationFailed');
		}
		disableSignUpButtonOnError();		
	}
	
	function validateUsername(username)
	{
		$.get('/user/validateUsername',{'username':username},function(data){
			if(data.status =='fail')
			{				
				$('#usernameErrorMessage').text('Username exists!');
				$('#usernameErrorMessage').addClass('validationFailed');				
			}
			else
			{
				$('#usernameErrorMessage').text('');
				$('#usernameErrorMessage').removeClass('validationFailed');
			}
			disableSignUpButtonOnError();
		},'json');
		
	}
	
	/**
	 * Email Regex checker: http://stackoverflow.com/questions/2855865/jquery-regex-validation-of-e-mail-address
	 * 
 	 * @param {Object} emailAddress
	 */
	function isValidEmailAddress(emailAddress) {
    	var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    	return pattern.test(emailAddress);
		};
		
	$('#email').change(function() {
		var email = $(this).val();
		validateEmail(email);			
		
		});
		
	$('#signupUsername').change(function() {
		var username = $(this).val();		
		validateUsername(username);		
		});		
	
	function disableSignUpButtonOnError()
	{				
		if($('#usernameErrorMessage').hasClass('validationFailed') || $('#emailErrorMessage').hasClass('validationFailed'))
		{
		       		$('#signUp').prop('disabled',true);
		       		$('#signUp').addClass('disableOpacity');
		}
		else
		{
		       		$('#signUp').prop('disabled',false);
		       		$('#signUp').removeClass('disableOpacity');
		}   		
		       		       	
	}
	$('#signupForm').unbind('submit').submit(function(e) {	
		       	   var registerBotCatcher =$('#registerBotCatcher').val();
		       	   if(registerBotCatcher.length == 0)
		       	   {
		       	   		$.post('/signup/', $("#signupForm").serialize(), function(data) {					
						if (data.status=='success') 
						{
							$('#signUpStatusMessage').addClass('success');
							$('#signUpStatusMessage').text('Registration Successful');			
											
						}
						else
						{
							$('#signUpStatusMessage').addClass('error');
							$('#signUpStatusMessage').text('Something Went Wrong.Try again!');
						}
						$('#signUpStatusMessage').hide();
						$('#signUpStatusMessage').fadeIn("slow");
					}, 'json');
		       	   }
		       		
		
				return false;
			});
	
	

});

