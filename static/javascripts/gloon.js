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

function ajaxStartProcess(processMode)
{
	switch(processMode)
	{
     	
     	case 0:
     	        $('#signupSpinner').addClass('icon-spin1 animate-spin');
     	        $('#signUpStatusMessage').addClass('colorWhite');
				$('#signUpStatusMessage').text('Please wait...');				
			    $('#signUp').prop('disabled',true);
			    $('#signUp').addClass('disableOpacity');
     			break;
     	case 1:
     	        $('#usernameErrorMessage').text('Please Wait...');
     	        $('#usernameSpinner').addClass('icon-spin1 animate-spin');
				$('#usernameErrorMessage').addClass('colorWhite');
     			break;
     	case 2: 
     			$('#emailErrorMessage').text('Please Wait...');
     			$('#emailSpinner').addClass('icon-spin1 animate-spin');
				$('#emailErrorMessage').addClass('colorWhite');				
     			break;
     	case 3:
     	        $('#signInStatusMessage').addClass('colorWhite');
     	        $('#signInSpinner').addClass('icon-spin1 animate-spin');
     	        $('#signInStatusMessage').text('Signing in...');							    
     	        $('#signIn').prop('disabled',true);
			    $('#signIn').addClass('disableOpacity');
     			break;						
     	
     }
}

function ajaxStopProcess(processMode)
{
	switch(processMode)
	 {
     	 
     	case 0:     			
                $('#signUpStatusMessage').removeClass('colorWhite');	            
                $('#signupSpinner').removeClass('icon-spin1 animate-spin');    				
                $('#signUp').prop('disabled',false);
			    $('#signUp').removeClass('disableOpacity');					
     			break;
     	case 1: 
     	    	 		
     	        $('#usernameSpinner').removeClass('icon-spin1 animate-spin');
				$('#usernameErrorMessage').removeClass('colorWhite');
     			break;
     	case 2:     	        
     			$('#emailSpinner').removeClass('icon-spin1 animate-spin');
				$('#emailErrorMessage').removeClass('colorWhite');
     			break;
     	case 3:
     			$('#signInSpinner').removeClass('icon-spin1 animate-spin');
     			$('#signInStatusMessage').removeClass('colorWhite');
     	        $('#signInStatusMessage').text('');				
				$('#signIn').prop('disabled',false);
			    $('#signIn').removeClass('disableOpacity');
     			break;
     }
}
 
$(function() {			
   
   var processMode=0; //0 : Registration, 1: username validation, 2: email validation, 3: Signin
   
   $(document).ajaxStart(function() {
        
             ajaxStartProcess(processMode);
   });
   $(document).ajaxStop(function() {
         
     		ajaxStopProcess(processMode);   	
   });
    
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
			    processMode=3;
				$.post('/login/', $("#loginForm").serialize(), function(data) {			
				if (data.status=="success") {
					$.modal.close();					
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
			processMode=2;
			$('#emailErrorMessage').text('');
			$('#emailErrorMessage').removeClass('validationFailed');
			$('#emailErrorMessage').removeClass('error');
			
			$.get('/user/validateEmail',{'email':email}, function(data){
				if(data.status =='fail')
				{
					$('#emailErrorMessage').text('Email exists!');
					$('#emailErrorMessage').addClass('validationFailed');
					$('#emailErrorMessage').addClass('error');	
				}
				else
				{
					$('#emailErrorMessage').text('');
					$('#emailErrorMessage').removeClass('validationFailed');
					$('#emailErrorMessage').removeClass('error');	
				}
				disableSignUpButtonOnError();
			},'json');
		}
		else
		{
			$('#emailErrorMessage').text('Not a valid email!');
			$('#emailErrorMessage').addClass('validationFailed');
			$('#emailErrorMessage').addClass('error');	
		}
		disableSignUpButtonOnError();		
	}
	
	function validateUsername(username)
	{
		processMode=1;
		$.get('/user/validateUsername',{'username':username},function(data){
			if(data.status =='fail')
			{				
				$('#usernameErrorMessage').text('Username exists!');
				$('#usernameErrorMessage').addClass('validationFailed');
				$('#usernameErrorMessage').addClass('error');				
			}
			else
			{
				$('#usernameErrorMessage').text('');
				$('#usernameErrorMessage').removeClass('validationFailed');
				$('#usernameErrorMessage').removeClass('error');
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
		       	   	    processMode=0;
		       	   		$.post('/signup/', $("#signupForm").serialize(), function(data) {					
						if (data.status=='success') 
						{
							$('#signUpStatusMessage').addClass('success');
							$('#signUpStatusMessage').text('Registration Successful. We have sent a confirmation mail to the email provided.');			
							$('#signupForm').find("input[type=text],input[type=password]").val("");				
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

