$(function() {
	
	$(document).ajaxStart(function() {
        
             $('#loadingIcon').removeClass('hiddenDiv');
   	});
   	
   	$(document).ajaxStop(function() {
         
     		 $('#loadingIcon').addClass('hiddenDiv');  	
   	});
   	
   	$('#confirmEmail').click(function() {
   		var emailId = $('#userEmail').val();
   		console.log("emailId: "+emailId);
   		if(emailId.length>0)
   		{
   			$('#forgetPasswordEmailSendingForm').hide();
   			$.post('/user/forgotPassword/init',{"userEmail":emailId},function(data){
   				if(data.status == "success")
   				{
   					$('#mailSentConfirmation').fadeIn();
   				}
   				else
   				{
   					alert("Either email not confirmed or something wrong happened!");
   					$('#forgetPasswordEmailSendingForm').show();
   				}
   			},'json');
   		}
	});
});	