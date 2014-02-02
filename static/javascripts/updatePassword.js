
function matchPassword(password, confirmPassword)
{
	return password == confirmPassword;							
}

$(function() {	
	$('#confirmPassword').keyup(function() {
		var password = $('#newPassword').val();
		var confirmPassword = $('#confirmPassword').val();
		$('#statusText').removeClass('hiddenDiv');
		if(!matchPassword(password, confirmPassword))
		{
			$('#updatePassword').addClass('disableOpacity');
			$('#updatePassword').prop('disabled',true);
			$('#statusText').addClass('colorOrange');
			$('#statusText').removeClass('colorWhite');
			$('#statusText').text("Password didn't match");
		}
		else
		{
			$('#updatePassword').removeClass('disableOpacity');
			$('#updatePassword').prop('disabled',false);
			$('#statusText').addClass('colorWhite');
			$('#statusText').removeClass('colorOrange');
			$('#statusText').text("Password matched");
		}
	});
	
	$('#updatePassword').click(function() {
		var password = $('#newPassword').val();
		var confirmPassword = $('#confirmPassword').val();
		var emailId=$('#userEmail').val();
		var token=$('#userPassToken').val();
		if(password.length>0 && matchPassword(password, confirmPassword))
		{
			$('#updatePassword').addClass('disableOpacity');
			$('#updatePassword').prop('disabled',true);
			$.post('/user/resetPassword',{"emailId":emailId,"token":token,"password":password, "confirmPassword":confirmPassword},function(data){
				console.log("status: "+data.status);
   				if(data.status == "success")
   				{   					
   					$('#passwordResetForm').addClass('hiddenDiv');
   					$('#passwordUpdatedStatus').fadeIn();
   					setTimeout(function(){
   						window.location.href="/";
   					},1000);
   				}
   				else
   				{
   					$('#updatePassword').removeClass('disableOpacity');
					$('#updatePassword').prop('disabled',false);
   					alert("Something wrong happened!Try again!");   					
   				}
   			},'json');
		}
	});
});