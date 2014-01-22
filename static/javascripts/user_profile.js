

function updateCountrySelector()
{
	$('#profileCountry').val($('#userSavedCountry').val());
}
function saveUser()
{	          	
	var userFirstName=$('#profileFirstname').val();
	if(userFirstName.length == 0)
	{
		userFirstName="First";
	}
	var userLastName=$('#profileLastname').val();	     
	if(userLastName.length == 0)
	{
		userLastName="Last";
	}     		
	var country=$('#profileCountry').val();
	var birthday=$('#profileDOB').val();
	if(birthday.length == 0)
	{
		var today = new Date();
		var date = today.getDate();
		var month = today.getMonth()+1;
		var year = today.getYear();
		
		birthday=month+"/"+day+"/"+year;
	} 
	
	var birthdayVisibility;
	if($('button#visibility').text().trim()=='PRIVATE')
	{
		birthdayVisibility=1;
	}
	else
	{
		birthdayVisibility=2;
	}
	          	
	var gameBio=$('#profileGamebio').val();
	if(gameBio.length == 0)
	{
		gameBio="I love gaming.";
	} 
	          	
	var userJson={}
		          	
	userJson['userFirstName']=userFirstName;
	userJson['userLastName']=userLastName;
	userJson['country']=country;
	userJson['birthday']=birthday;
	userJson['birthdayVisibility']=birthdayVisibility;
	userJson['gameBio']=gameBio;
	          	
	$.post("/user/save", userJson, function(data){
		if(data.status == "success")
		{
			$('.profileUpdateStatusNotification').text('Profile updated');
	        $('.profileUpdateStatusNotification').fadeIn().delay(2000).fadeOut();
		}
		else
		{
			$('.profileUpdateStatusNotification').text('Something went wrong!');
	        $('.profileUpdateStatusNotification').fadeIn().delay(2000).fadeOut();
		}
	},'json');
}

function platformCheckedCount()
{
			 	var count =$('input.platform:checked').length;
				   console.log('COunt: '+count);
				   if(count>=5)
				   {
				   	$('input.platform').not(':checked').attr('disabled',true);				   	
				   }
				   else
				   {
				   	$('input.platform').not(':checked').attr('disabled',false);
				   }
}

function saveInterest(type, interestArray)
{
			 	var interestJson={};			 				 	
			 	interestJson['type']=type;
			 	var interestContentText=interestArray+"";
			 	interestJson['content']=interestContentText;
			 	console.log("INTEREST JSON------>",interestJson);
			 	$.post("/user/interest",interestJson,function(data){
			 		console.log(data);
			 		if(data.status != "success")
			 		{
			 			alert("Something went wrong. Please try again!");
			 		}
			 		
			 	},'json');
			 	
}

function genreCheckedCount()
			{
					var count =$('input.genre:checked').length;
				   console.log('COunt: '+count);
				   if(count>=5)
				   {
				   	$('input.genre').not(':checked').attr('disabled',true);				   	
				   }
				   else
				   {
				   	$('input.genre').not(':checked').attr('disabled',false);
				   }
			}				 
$(function() {
                     
	        
	        	updateCountrySelector();
	        	$('#profileDOB').datepicker({
	          	  	 setDate:$(this).val(),
	          	  	 inline: true,  
            		 showOtherMonths: true,  
            		 dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],  	          	  	 
	          	  });  
	          	  
	          	$('#visibility').click(function() {
			 	   if($(this).hasClass('private'))
			 	   {
			 	   	  $(this).removeClass('private');
			 	   	  $(this).addClass('public');   
			 	   	  $(this).text('PUBLIC');
			 	   	  
			 	   }
			 	   else
			 	   {
			 	   	  $(this).removeClass('public');
			 	   	  $(this).addClass('private');
			 	   	  $(this).text('PRIVATE');   	
			 	   }			 	   
				 });	
	        
	          	$('.updatesButton').click(function() {	          		
	          		saveUser();	          		
				});
	        
				  	  	           
	     				
			 
			 //Platforms and Genres Begins
			 
			 $('#platformsButton').click(function() {
			 	$("#allPlatformSet a").each(function() {
				  	var platformId = $(this).attr('id');
				  	console.log('Platform id'+platformId);
				  	$('#'+platformId).attr('checked',true);				  	
				});
				platformCheckedCount()
				$(this).attr('disabled','disabled');				
				$('#genresButton').attr('disabled','disabled');
				$('#platformList').show();
				$('#platformList').animate({
					width:"400", height:"300"}, 500);
				});						
				
			$('#genresButton').click(function() {
				$("#allGenreSet span").each(function() {
				  	var genreId = $(this).attr('id');
				  	console.log('Genre id'+genreId);
				  	$('#'+genreId).attr('checked',true);				  	
				});
				genreCheckedCount()
				$(this).attr('disabled','disabled');
				$('#platformsButton').attr('disabled','disabled');
				$('#genreList').show();
				$('#genreList').animate({
					width:"400", height:"300"}, 500);
				});	
							
			 
			 
			 
			 
			$('input.platform').click(function(event) {
				   platformCheckedCount();
				});
				
			$('#platformSet').click(function() {							
				var platformSet = new Array();	
				var platformsHtml ="";					
				$('input.platform').each(function() {
					 if($(this).is(':checked'))
					 {
					 	platformSet.push($(this).val());
					 	var platformText=$(this)[0].nextSibling.nodeValue;					 						 	
					 	platformsHtml+="<a id='"+$(this).val()+"' href='/platform/"+$(this).val()+"/all' title='"+platformText+"'target='_blank'><span class='"+$(this).val()+" marginLeft10 blackBoxShadow interestUserProfileFontSize'>"+platformText+"</span></a>";					 	
					 }					 				     				     
					});
				console.log("Platform Set: "+platformSet);	
				console.log(platformsHtml);
				$('#platformList').animate({
					width:"0", height:"0"}, 500);				
				$('#platformList').hide();
				$("#platformsButton").removeAttr('disabled');
				$("#genresButton").removeAttr('disabled');			
				$('#allPlatformSet').empty();	
				console.log(platformSet.length);				
				if(platformSet.length!=0)
				{
					$('#noPlatforms').hide();
					$('#allPlatformSet').append(platformsHtml);
					
				}
				else
				{					
					$('#noPlatforms').show();
				}
				saveInterest(1, platformSet);
				return false;
				});
				
			
			
			
			$('input.genre').click(function(event) {
				   genreCheckedCount()
				});	
				
			$('#genreSet').click(function() {
				
				var genreSet = new Array();
				var genresHtml ="";		
				$('input.genre').each(function() {
					 if($(this).is(':checked'))
					 {
					 	genreSet.push($(this).val());	
					 	var genreText=$(this)[0].nextSibling.nodeValue;					 						 	
					 	genresHtml+="<span id='"+$(this).val()+"' class='genreStyle marginLeft10 blackBoxShadow interestUserProfileFontSize'>"+genreText+"</span>";				 					 
					 }					 				     				     
					});
				console.log("Genre Set: "+genreSet);	
				$('#genreList').animate({
					width:"0", height:"0"}, 500);				
				$('#genreList').hide();				
				$("#genresButton").removeAttr('disabled');
				$("#platformsButton").removeAttr('disabled');			
				$('#allGenreSet').empty();		
				if(genreSet.length!=0)
				{
					$('#noGenres').hide();
					$('#allGenreSet').append(genresHtml);					
				}
				else
				{
					$('#noGenres').show();
				}				
				
				saveInterest(2, genreSet);
				return false;
				});	
	
	        //Platforms and Genres End
	        
					
			
	$('input#updatePass').click(function() {
		 $.post('/user/password/reset',$('#resetPassword').serialize(),function(data){
		 	data =jQuery.parseJSON(data);
		 	console.log(data);
		 	if(data.type == '1')
		 	{
		 		alert('New Password and confirm didnt match');
		 		return false;
		 	}
		 	else
		 	{
		 		console.log(data.type);
		 		if(data.status =='fail')
		 		{
		 			alert("Something went wrong!!!");
		 			return false;
		 		}
		 		else
		 		{
		 			$.modal.close();
		 			$('.profileUpdateStatusNotification').text('User Password updated');
	        		$('.profileUpdateStatusNotification').fadeIn().delay(2000).fadeOut();
		 		}
		 			
		 	}
		 });
		 return false;
		});		
	
	$('#passwordButton').click(function() {		   
		   $("#changePasswordModal").modal({
		   	   onOpen : function(dialog) {
					dialog.overlay.fadeIn('slow', function() {
						dialog.container.slideDown('slow', function() {
							dialog.data.fadeIn('slow');
						});
					});
				},
				containerCss:{
					width:400,		
					height:200			
				}
		   });						  
		});
		
	/**
	 *User Avatar upload Begins
	 *  
	 */
	$('#userAvatarImageUpload').click(function() {
		$('#userAvatarUploadBox').modal({
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
				}
			});
		});
	
	$(document).ajaxStart(function() {
	  $('#selectedUserAvatar').addClass('disableOpacity');
	  $('#upload').addClass('disableOpacity');
	  $('#upload').prop('disabled',true);
	  
	});
	
	$(document).ajaxStop(function() {
	  $('#selectedUserAvatar').removeClass('disableOpacity');
	  $('#upload').removeClass('disableOpacity');
	  $('#upload').prop('disabled',false);
	});
	
	$('#upload').click(function() {		
		var avatarImage = $('#userAvatarFile').get(0).files[0];				
		var userName=$('#profileUsername').val(); 		
		if(avatarImage.type.indexOf("image") == 0 && avatarImage.size < 102400)
		{
			 var formdata = new FormData();
			 var userAvatarId=$('.selectAvatar').attr('id');
			 formdata.append('userAvatarFile',avatarImage);			
		     $.ajax({          
		     	url: "http://localhost:9000/user/saveOrUpdateUserAvatar/"+userName+"/"+userAvatarId, 		
        		type: "POST",        
        		dataType:'json',  		
        		data: formdata,         		
        		processData: false,  
        		contentType: false,        			
        		success: function (data) {  
            		if(data.status == "success")
            		{
            			$('.selectAvatar').attr("src",data.avatarPath);
            			$('.selectAvatar').attr('id',data.avatarId);
            			$.modal.close();
            			$('.profileUpdateStatusNotification').text('User Avatar updated');
	        			$('.profileUpdateStatusNotification').fadeIn().delay(2000).fadeOut();
	        			$('a#user img').attr("src",data.avatarPath);
            		}
            		else
            		{
            			$('#userAvatarErrorMessage').hide();
						$('#userAvatarErrorMessage').text('Something Wrong happened. Please try again!');
						$('#userAvatarErrorMessage').fadeIn("Slow");
            		}
        		},
        		error: function (xhr, ajaxOptions, thrownError) {
       				   console.log("Error while uploading image "+xhr.status);
        			   console.log("Error while uploading image "+thrownError);
                 }  
    		}); 
    		$('#userAvatarErrorMessage').hide();
    	}	
    	else
			{
				$('#userAvatarErrorMessage').hide();
				$('#userAvatarErrorMessage').text('Please Select Image of size upto 100kb');
				$('#userAvatarErrorMessage').fadeIn("Slow");
			}		
			return false;		
		});		
	
	/**
	 *User Avatar upload Ends
	 *  
	 */
	
	$('#userAvatarFile').change(function() {
	    	showImage();
			});
				
	function showImage()
		{
			var file=$('#userAvatarFile').get(0).files[0];
			if(file.type.indexOf("image") == 0 && file.size < 102400)
			{
				var reader = new FileReader();
				reader.onload= function(event) {
	    			var img = event.target.result;
	    			$('img#selectedUserAvatar').show();    			
	    			$('img#selectedUserAvatar').attr('src', img);
	    			$('img#selectedUserAvatar').attr('width', "200");
	    			$('img#selectedUserAvatar').attr('height', "200");
				};		
				reader.readAsDataURL(file);				
				$('#userAvatarErrorMessage').hide();
			}	
			else
			{
				$('#userAvatarErrorMessage').hide();
				$('#userAvatarErrorMessage').text('Please Select Image of size upto 100kb');
				$('#userAvatarErrorMessage').fadeIn("Slow");
			}		
			
		}			 
	
    
    
});
