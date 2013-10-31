/**
 * @author Partho
 */

var gameScore=0;

$(function(){
	/**
	 * Temporary solution to look for incoming event where imagge needs to changed.
	 * 0 means featured image need to be set
	 * 1 means Article image need to be set
	 * 
	 * Will work on it more to make it better.
	 * 
	 */
	var replaceImage=0; 
	
	
	$('#isGame').change(function()
	{
		if(!$(this).is(':checked'))
		{
			$('#selectedGame').hide();
			$('#gameSearchBox').val("");
		}
	});
	
	$('input:radio[name="category"]').change(function() {
		   
		   if($(this).val()=="review")
		   {
		   	$('.knob').trigger('configure',{
						"readOnly":false
					});
			$('input#isGame').prop('checked',true);
			$('#gameSearchBox').removeAttr('disabled');
			$('input#isGame').prop('disabled',true);
		   }
		   else if($(this).val()=="gloonicle")
		   {
		   		$('input#isGame').prop('checked',false);
				$('#gameSearchBox').prop('disabled',true);
				$('input#isGame').prop('disabled',true);
				$('.knob').trigger('configure',{
						"readOnly":true,										
					});
				$('.knob').val(0).trigger('change');
		   }
		   else
		   {
		   	if($('input#review').not(':disabled'))
		   	{
		   		$('.knob').trigger('configure',{
						"readOnly":true,										
					});
				$('.knob').val(0).trigger('change');
		   	}
		   	$('input#isGame').prop('disabled',false);		
		   }
												
						
		});
		
		$('input:checkbox[name="isGame"]').change(function() {
			   $(this).is(':checked')?$('#gameSearchBox').removeAttr('disabled'):$('#gameSearchBox').attr('disabled','disabled');			   			   				   
			});
		
		$('#ariticleFeaturedImageSelector').click(function() {
			replaceImage=0;			
			initUploader();							
		});
		
		
		$('#closeWindow').click(function()
		{
			uploaderClose();
			return false;
		})
		
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
		
		$(document).on({
			mouseenter: function() {			
			  $(this).stop().animate({"opacity": "1"}, "slow");
			},			 
			mouseleave:function() {
			  $(this).stop().animate({"opacity": "0.3"}, "slow");
			}
		},"img.fade");
		
		$('#imageBrowser').on('click','img.browserImage',function (){						
			var targetSrc=$(this).attr('src');			
			var targetId=$(this).attr('id');
			if(replaceImage == 0) //request came from featured Image
			{
				$('#ariticleFeaturedImageSelector img').attr('src',targetSrc);
				$('#ariticleFeaturedImageSelector img').attr('id',targetId);						
			}
			else if(replaceImage == 1) //request came from editor
			{
				$('#imageHolder img').attr('src',targetSrc);
				$('#imageHolder img').attr('id',targetId);
			}
			uploaderClose();
		});
		
		$(document).ajaxStart(function(){
				 		console.log('ajax started');
				 		$('#noImage').text("Loading...");
	            		$('#noImage').show();	
	            		$('#uploadImage').prop('disabled',true);
	            		$('#uploadImage').addClass('disableOpacity');
				 	});
				 	
		$(document).ajaxStop(function() {
		  			 $('#uploadImage').prop('disabled',false);
	            	 $('#uploadImage').removeClass('disableOpacity');
		});
				 	
		$('#uploadImage').click(function() {			    
			    var image=$('#previewFile').get(0).files[0];
			    if(image.type.indexOf("image") == 0 && image.size < 1000000)
			    {
			    	var userName=$('span#userName a').text();
				    var formdata = new FormData();
				 	formdata.append('previewFile',image);			
				 	
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
	        				}        				 
	        				else
	        				{
	        					$('#imageErrorMessage').hide();
								$('#userAvatarErrorMessage').text('Something Wrong happened. Please try again!');
								$('#imageErrorMessage').fadeIn("Slow");
	        				}           			            			
	            				
	            			  
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
		$('#imageHolder img').click(function(){
			replaceImage=1;
			initUploader();
		});	
		
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
	    			$('img#preview').attr('width', "640");
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
		
		function initUploader()
		{
			$('#imageUploader').fadeIn("slow");		
			$('#noImage').text("No Image");
			$('#noImage').show();	
			$('img#preview').hide();		
			$('#uploadImageSelector').click();
		}
		
		function uploaderClose()
		{
			$('#previewFile').val("");
			$('#imageUploader').hide();
			$('#photoLastUpdated').val("0");
			$('#hasPhotos').val("0");
			$('.browserImage').remove();
		}
		
		
		
		
		
});
function iFrameOn()
{
				
	    window.setTimeout(function(){
	    	richEditor.document.designMode="on";	    
	    	$('.knob').knob({
						'readOnly':true,
						change:function(value){							
							gameScore=value;
						}
					});		
	    },10);

}

function onBold()
{
	document.getElementsByName("richEditor")[0].contentWindow.focus();
	richEditor.document.execCommand('bold',false,null);
}

function onUnderline()
{
	document.getElementsByName("richEditor")[0].contentWindow.focus();
	richEditor.document.execCommand('underline',false,null);
}
function onItalic()
{
	document.getElementsByName("richEditor")[0].contentWindow.focus();
	richEditor.document.execCommand('italic',false,null);
}
function onUlist()
{
	document.getElementsByName("richEditor")[0].contentWindow.focus();
	richEditor.document.execCommand('insertUnorderedList',false,null);
}
function onOlist()
{
	document.getElementsByName("richEditor")[0].contentWindow.focus();
	richEditor.document.execCommand('insertOrderedList',false,null);
}
function onLink()
{
	var link = prompt("Enter an url");
	if(link!=null)
	{
		document.getElementsByName("richEditor")[0].contentWindow.focus();
		richEditor.document.execCommand('createLink',false,link);
	}
	else
	{
		document.getElementsByName("richEditor")[0].contentWindow.focus();
		richEditor.document.execCommand('createLink',false,"#");
	}
	
}
function onUnlink()
{
	document.getElementsByName("richEditor")[0].contentWindow.focus();
	richEditor.document.execCommand('unlink',false,null);
}
function onIndent()
{
	document.getElementsByName("richEditor")[0].contentWindow.focus();
	richEditor.document.execCommand('indent',false,null);
}
function onOutdent()
{
	document.getElementsByName("richEditor")[0].contentWindow.focus();
	richEditor.document.execCommand('outdent',false,null);
}
function onCenter()
{
	document.getElementsByName("richEditor")[0].contentWindow.focus();
	richEditor.document.execCommand('justifyCenter',false,null);
}
function onLeft()
{
	document.getElementsByName("richEditor")[0].contentWindow.focus();
	richEditor.document.execCommand('justifyLeft',false,null);
}
function onRight()
{
	document.getElementsByName("richEditor")[0].contentWindow.focus();
	richEditor.document.execCommand('justifyRight',false,null);
}
function onJustify()
{
	document.getElementsByName("richEditor")[0].contentWindow.focus();
	richEditor.document.execCommand('justifyFull',false,null);
}

function editorImageClose()
{
	$('#imageSelectorForEditor').hide();
	$('#imageHolder img').attr('src',"");
	$('#imageCaption i').text('Click to set caption');
}

function onInsertImage()
{	
	$('#imageSelectorForEditor').fadeIn('slow');	
	
	
}
function onSetImage()
{
		var url=$('#imageHolder img').attr('src');		
		var imgId=$('#imageHolder img').attr('id');
		var caption = $('#imageCaption i').text();
		
			var imageHtml='<img id="'+imgId+'"style="border-style:solid; border-width:15px;border-color:#FCEEE2"src="'+url+'" width="400" height="300"/><p style="text-align;"><span style="font-size:14px;"><i>'+caption+'</i></span></p>'		
			if(navigator.appName=="Microsoft Internet Explorer")
			{				
				document.getElementsByName("richEditor")[0].contentWindow.focus();
				richEditor.document.selection.createRange().pasteHTML(imageHtml);
			}
			else{
				richEditor.document.execCommand('insertHTML',false,imageHtml);
			}
			editorImageClose();
		
			
}

function editorVideoClose()
{
	$('#videoSelectorForEditor').hide();
	$('#videoUrl').val("");	
}

function onEmbedYoutubeVideo()
{
	 $('#videoSelectorForEditor').fadeIn('slow');					
		
}

function onSetVideo()
{
	    var rawUrl=$('#videoUrl').val();
	    if(rawUrl.indexOf("http://www.youtube.com/watch")!=-1)
	    {
	    	var processedUrl = rawUrl.replace("watch?v=","embed/");   
			var videoHtml='<iframe width="480" height="390" src="'+processedUrl+'" frameborder="0" allowfullscreen></iframe>'		
			if(navigator.appName=="Microsoft Internet Explorer")
			{				
				document.getElementsByName("richEditor")[0].contentWindow.focus();
				richEditor.document.selection.createRange().pasteHTML(videoHtml);
			}
			else
			{
				richEditor.document.execCommand('insertHTML',false,videoHtml);
			}		
			editorVideoClose();
	    }
	    
	
}
function onUndo()
{
	document.getElementsByName("richEditor")[0].contentWindow.focus();
	richEditor.document.execCommand('undo',false,null);
}
function onRedo()
{
	document.getElementsByName("richEditor")[0].contentWindow.focus();
	richEditor.document.execCommand('redo',false,null);
}
function onSave()
{	
	var title=$('#title').val();
	var subTitle=$('#subTitle').val();
	var body=window.frames['richEditor'].document.body.innerHTML;
	var featuredImage=$('#ariticleFeaturedImageSelector img').attr('id');
	var category=$('input[name="category"]:checked').val();
	var userName=$('#userName a').text();
	var userGameBio=$('#userGameBio').text();
	var gameId= "";
	var articleId=$('#articleId').val();
	var articleState=$('#articleState').val();
	var platforms = $('input.eplatform:checked').map(function(index, elem) {
	    return $(this).val();
	}).get().join();
	
	if($('#isGame').is(':checked'))
	{		
		gameId= $('#gameId').val();
		
	}	
	var reviewGameScore=0;
	if(category == "review")
	{
		reviewGameScore=gameScore;
		
	}
	
	var articleJson ={};
	
	articleJson["articleId"]=articleId;
	articleJson["articleState"]=articleState;
	articleJson["title"]=title;
	articleJson["subTitle"]=subTitle;
	articleJson["body"]=body;
	articleJson["featuredImage"]=featuredImage;
	articleJson["category"]=category;		
	articleJson["gameId"]=gameId;
	articleJson["platforms"]=platforms;
	articleJson["gameScore"]=reviewGameScore;
	
	console.log(articleJson);	
		
	
	if(validateEditor())
		{
			$.post('/post/save',articleJson,function(data){
				if(data.status=='success')
				{
					window.location.href="/profile/"+data.userId;
				}
			},'json');		
		}
	
	
}
function onPublish()
{
	$('#articleState').val("2");
	onSave();
}

function onPreview()
{
	var title=$('#title').val();
	var subTitle=$('#subTitle').val();
	var body=window.frames['richEditor'].document.body.innerHTML;
	var featuredImageUrl=$('#ariticleFeaturedImageSelector img').attr('src');
	var category=$('input[name="category"]:checked').val();
	var userName=$('#userName a').text();
	var userGameBio=$('#userGameBio').text();
	var game= "";
	var gameBoxShot="";
	var reviewGameScore=gameScore;
	if($('#isGame').is(':checked'))
	{		
		game= $('#gameTitle').text();
		gameBoxShot=$('#gameBoxShot img').attr('src');
	}	
	
	
	
	if(validateEditor())
	{
				
				
		$('#ptitle').val(title);
		$('#psubTitle').val(subTitle);
		$('#pbody').val(body);
		$('#pfeaturedImageUrl').val(featuredImageUrl);
		$('#pcategory').val(category);
		$('#puserName').val(userName);
		$('#puserGameBio').val(userGameBio);
		$('#pGame').val(game);
		$('#pGameBoxShot').val(gameBoxShot);	
		$('#pGameScore').val(reviewGameScore);	
		$('#previewForm').submit();		
		
	}
	
}

function onClose()
{
	$.modal.close();
}

function validateEditor()
{
	var title=$('#title').val();
	var subTitle=$('#subTitle').val();
	var body=window.frames['richEditor'].document.body.innerHTML;
	var category=$('input[name="category"]:checked').val();
	var videoCheckerString ="http://www.youtube."
	var isGame=0;
	if($('#isGame').is(':checked'))
	{
		isGame=1;
		var gameId= $('#gameId').val();
	}
	var platformCount =$('input.eplatform:checked').length;
	
	if(title.length==0 || subTitle.length==0 || body.length==0 || category==undefined || category=="video" && body.indexOf(videoCheckerString)==-1 || (isGame ==1 && gameId == "empty") || platformCount==0)
	{
		return false;
	}
	else
	{
		return true;
	}
}
