/**
 * @author Partho
 */
function showImage()
		{
			var file=$('#previewFile').get(0).files[0];
			if(file.type.indexOf("image") == 0 && file.size < 3000000)
			{
				var reader = new FileReader();
				reader.onload= function(event) {
	    			var img = event.target.result;
	    			$('img#preview').show();    			
	    			$('img#preview').attr('src', img);	    			
	    			$('img#preview').attr('height', "400");
				};		
				reader.readAsDataURL(file);
				$('#noImage').hide();
				$('#imageErrorMessage').hide();
			}	
			else
			{
				$('#imageErrorMessage').hide();
				$('#imageErrorMessage').text('Please Select Image upto 2.5MB!');
				$('#imageErrorMessage').fadeIn("Slow");
			}		
			
		}
		

function uploaderClose()
		{
			parent.$.modal.close();			
		}

				
				
$(function(){
	
	    var uploading= false;
	    var replaceImage=parent.$("#browser").data('replaceimage');
	    $('#imageBrowser').on('click','img.browserImage',function (){						
			var targetSrc=$(this).attr('src');			
			var targetId=$(this).attr('id');
			if(replaceImage == 0) //request came from featured Image
			{
				parent.$('.coverSection').css('background-image','url('+targetSrc+')');
				parent.$('.coverSection').attr('id',targetId);			
				parent.hasBeenEdited=true;			
			}
			else if(replaceImage == 1) //request came from editor
			{
				parent.$('#imageHolder img').attr('src',targetSrc);
				parent.$('#imageHolder img').attr('id',targetId);
			}
			uploaderClose();
		});
		
		$(document).on({
			mouseenter: function() {			
			  $(this).stop().animate({"opacity": "1"}, "slow");
			},			 
			mouseleave:function() {
			  $(this).stop().animate({"opacity": "0.3"}, "slow");
			}
		},"img.fade");
		
		
		$(document).ajaxStart(function(){				 		
				 		if(uploading)
				 		{
				 			console.log('ajax started');
				 			$('#noImage').text("Loading...");
	            			$('#noImage').show();	
	            			$('#uploadImage').prop('disabled',true);
	            			$('#uploadImage').addClass('disableOpacity');
	            			$('#preview').addClass('disableOpacity');
				 		}
				 		
				 	});
				 	
		$(document).ajaxStop(function() {
			         if(uploading)
			         {
			         	$('#uploadImage').prop('disabled',false);
	            	 	$('#uploadImage').removeClass('disableOpacity');
	            	 	$('#preview').removeClass('disableOpacity');
	            	 	uploading=false;
			         }
		  			 
		});
		
	 $('#previewFile').change(function() {
	    	showImage();
			});
	$('#uploadImageSelector').click(function(){
			$('#uploadFormBox').show();
			$('#imageBrowser').hide();
		});
					
	$('#imageBrowserSelector').click(function(){
			
			$('#uploadFormBox').hide();
			$('#imageBrowser').show();					
			var timestamp=$('#photoLastUpdated').val();			
			console.log("timestamp: "+timestamp);
			if(timestamp == undefined)
			{
				timestamp=0;
			}
			$.get('/user/getImages',{'timestamp':timestamp},function(data)
			{				
				var images = data.images;
				
				if(images.length>0)
				{
					$.each(images, function(index,image) {
					  var imageHtml = "<img id='"+image.mediaId+"' src='"+image.mediaUrl+"' width='240' height='180' class='fade browserImage marginLeft25 marginTop10 blackBoxShadow cursorPointer'/>";
					  var imageEl=$(imageHtml);
					  imageEl.hide();
					   $('#imageBrowser').prepend(imageEl);
					   imageEl.fadeIn();
					});					
					var lastTimestamp=images[0].timeStamp;
					$('#photoLastUpdated').val(lastTimestamp);		
					$('#hasPhotos').val("1");								
				}
				else
				{
					if($('#hasPhotos').val()=="0")
					{
						$('#imageBrowser').html("<span id='emptyImageList' class='colorGray applyBevan textShadowBlack'>No Images. Upload Some.</span>");
					}					  
						
				}
					
				},'json');
	
		});
			
	$('#uploadImage').click(function() {			    
			    var image=$('#previewFile').get(0).files[0];
			    if(image.type.indexOf("image") == 0 && image.size < 1000000)
			    {
			    	var userName=parent.$('#box a#user').text();			    					    
					var formdata = new FormData();
										 formdata.append('previewFile',image);		
										 uploading=true;					 	
										 $.ajax({          
											 url: "http://localhost:9000/media/uploadImage/"+userName+"/none/user", 					     		
											type: "POST",          		
											data: formdata,      
											dataType:'json',   		
											processData: false,  
											contentType: false,        			
											success: function (data) {  
												if(data.status="success")
												{
													$('#noImage').text("Uploaded");
													$('#noImage').show();	  
													$('#imageBrowserSelector').click();          				
												}        				 
												else
												{
													$('#imageErrorMessage').hide();
													$('#userAvatarErrorMessage').text('Something Wrong happened. Please try again!');
													$('#imageErrorMessage').fadeIn("Slow");
												}           			            			
																																					},
											error: function (xhr, ajaxOptions, thrownError) {
													  console.log("Error while uploading image "+xhr.status);
												   console.log("Error while uploading image "+thrownError);
												 }          			
										});
										$('#imageErrorMessage').hide();
					
			    }
			    else
			    {
			    	$('#imageErrorMessage').hide();
					$('#imageErrorMessage').text('Please Select Image of size less than 1MB!');
					$('#imageErrorMessage').fadeIn("Slow");
			    }
			     
				return false;
			});
			
});