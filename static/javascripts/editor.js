/**
 * @author Partho
 */

var gameScore=0;
var count=400;

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
			initUploader(replaceImage);							
		});
		
		
		$('#closeWindow').click(function()
		{
			uploaderClose();
			return false;
		});			
			
		$('#imageHolder img').click(function(){
			replaceImage=1;
			initUploader(replaceImage);
		});			
		
	
});

function countCharInEditor(charCount)
{	
	$('#editorCharLimit').text(charCount);
	console.log("count"+ charCount);	
}

		
function uploaderClose()
		{
			$('#browser').remove();			
		}
		
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
					console.log('This is called');
							
						
		
				
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


