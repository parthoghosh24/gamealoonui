/**
 *@author Partho 
 */

/**
 *Editor begins
 *  
 */
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

function iFrameOn()
{		
		richEditor.document.designMode="on";			    
}

/**
 *Editor ends
 *  
 */
function selectedCategoryClick()
{
	$('#selectedCategory').click(function() {
		$('#postCreatorCategorySelector').toggle();		
		});
}

function videoSelected()
{
	if($('#snippetText i#snippetTextTitle').hasClass('icon-thumbs-up-1'))
	{
		$('#snippetText i#snippetTextTitle').removeClass('icon-thumbs-up-1');
		$('#reviewPoints').hide();
		$('#score').hide();		
		
	}	
	if($('#snippetText i#snippetTextTitle').hasClass('icon-signal-2'))
	{
		$('#snippetText i#snippetTextTitle').removeClass('icon-signal-2');
		$('#newsSource').hide();
	}
	if($('#snippetText i#snippetTextTitle').hasClass('icon-user'))
	{
		$('#snippetText i#snippetTextTitle').removeClass('icon-user');
	}
	$('#postSnippet').css('width','560px');
	$('#postData').width(560);
	$('#postSnippet a.doneEditiingButton').addClass('marginRight61');
	$('#reviewGamePlayedOn').hide();
	$('#snippetText i#snippetTextTitle').addClass('icon-play-3');
	$('#snippetText i#snippetTextTitle').text('Caption');
	$('#snippetText p').text('Add a caption to video.');
	$('#richEditor').addClass('nonGlooniclePostSnippet');
	$('#richEditor').removeClass('glooniclePostSnippet');
	$('#gameBoxArt').show();
	
}

function reviewSelected()
{
	if($('#snippetText i#snippetTextTitle').hasClass('icon-play-3'))
	{
		$('#snippetText i#snippetTextTitle').removeClass('icon-play-3');
	}	
	if($('#snippetText i#snippetTextTitle').hasClass('icon-signal-2'))
	{
		$('#snippetText i#snippetTextTitle').removeClass('icon-signal-2');
		$('#newsSource').hide();
	}
	if($('#snippetText i#snippetTextTitle').hasClass('icon-user'))
	{
		$('#snippetText i#snippetTextTitle').removeClass('icon-user');
	}
	$('#postSnippet').css('width','560px');
	$('#postData').width(560);
	$('#postSnippet a.doneEditiingButton').addClass('marginRight61');
	$('#snippetText i#snippetTextTitle').addClass('icon-thumbs-up-1');
	$('#snippetText i#snippetTextTitle').text('Microverdict');
	$('#snippetText p').text('Add your micro verdict.');
	$('#richEditor').addClass('nonGlooniclePostSnippet');
	$('#richEditor').removeClass('glooniclePostSnippet');
	$('#reviewPoints').show();
	$('#score').show();
	$('#gameBoxArt').show();
	$('#reviewGamePlayedOn').show();
	
}

function newsSelected()
{
	if($('#snippetText i#snippetTextTitle').hasClass('icon-thumbs-up-1'))
	{
		$('#snippetText i#snippetTextTitle').removeClass('icon-thumbs-up-1');
		$('#reviewPoints').hide();
		$('#score').hide();				
	}	
	if($('#snippetText i#snippetTextTitle').hasClass('icon-play-3'))
	{
		$('#snippetText i#snippetTextTitle').removeClass('icon-play-3');
	}
	if($('#snippetText i#snippetTextTitle').hasClass('icon-user'))
	{
		$('#snippetText i#snippetTextTitle').removeClass('icon-user');
	}	
	$('#postSnippet').css('width','560px');
	$('#postData').width(560);
	$('#postSnippet a.doneEditiingButton').addClass('marginRight61');
	$('#reviewGamePlayedOn').hide();
	$('#snippetText i#snippetTextTitle').addClass('icon-signal-2');
	$('#snippetText i#snippetTextTitle').text('Bulletin');
	$('#snippetText p').text('Share hot bulletin.');
	$('#richEditor').addClass('nonGlooniclePostSnippet');
	$('#richEditor').removeClass('glooniclePostSnippet');
	$('#newsSource').show();
	$('#gameBoxArt').show();
	
}

function gloonicleSelected()
{
	if($('#snippetText i#snippetTextTitle').hasClass('icon-thumbs-up-1'))
	{
		$('#snippetText i#snippetTextTitle').removeClass('icon-thumbs-up-1');
		$('#reviewPoints').hide();
		$('#score').hide();
		
		
	}	
	if($('#snippetText i#snippetTextTitle').hasClass('icon-signal-2'))
	{
		$('#snippetText i#snippetTextTitle').removeClass('icon-signal-2');
		$('#newsSource').hide();
	}
	if($('#snippetText i#snippetTextTitle').hasClass('icon-play-3'))
	{
		$('#snippetText i#snippetTextTitle').removeClass('icon-play-3');
	}
	$('#postSnippet').css('width','800px');
	$('#postData').width(800);
	$('#postSnippet a.doneEditiingButton').removeClass('marginRight61');	
	$('#richEditor').removeClass('nonGlooniclePostSnippet');
	$('#richEditor').addClass('glooniclePostSnippet');
	$('#gameBoxArt').hide();
	$('#reviewGamePlayedOn').hide();
	$('#snippetText i#snippetTextTitle').addClass('icon-user');
	$('#snippetText i#snippetTextTitle').text($('#box a#user').text()+' thinks...');
	$('#snippetText p').text('Blog your gaming adventures and thoughts.');
}
function selectCategory()
{
	$('.option').click(function() {
		
		var type=$(this).attr('id');		
		if(hasBeenEdited)
		{
			var changeCategory=window.confirm("Are you sure? All changes will be lost!");
			if(!changeCategory)
			{
				return false;
			}
			else
			{
				hasBeenEdited=false;
				resetCommonData();
				if($('#selectedCategory').hasClass('review'))
				{
					resetGameData();
					resetReview();
				}
				if($('#selectedCategory').hasClass('gloonicle'))
				{
					resetOtherCategories("Blog your gaming adventures and thoughts.");					
				}
				if($('#selectedCategory').hasClass('video'))
				{
					resetOtherCategories("Add a caption to video.");
					resetGameData();					
				}
				if($('#selectedCategory').hasClass('news'))
				{
					resetOtherCategories('Share hot bulletin.');
					resetNewsLinkInfo();
					resetGameData();										
				}	
			}
		}
		
		if($('#selectedCategory').hasClass('review'))
		{
			$('#selectedCategory').removeClass('review');
			
		}
		if($('#selectedCategory').hasClass('gloonicle'))
		{
			$('#selectedCategory').removeClass('gloonicle');
			
		}
		if($('#selectedCategory').hasClass('video'))
		{
			$('#selectedCategory').removeClass('video');
			
		}
		if($('#selectedCategory').hasClass('news'))
		{
			$('#selectedCategory').removeClass('news');
			
		}		
		
		if(type == "video")
		{
			videoSelected();
		}
		if(type == "review")
		{
			reviewSelected();
		}
		if(type == "news")
		{
			newsSelected();
		}
		if(type == "gloonicle")
		{
			gloonicleSelected();
		}		
		$('#selectedCategory').addClass(type);
		$('#selectedCategory').text(type);
		$('#postCreatorCategorySelector').hide();			
		});
}

function resetGameData()
{
	$('#gameSelector img').attr("id","noGame");
	$('#gameSelector img').attr("src","http://192.168.0.103:9000/assets/images/default/boxShot.png");
	
	if($('#playedOn').is(':visible'))
	{
		$('#playedOn').removeAttr('href');
		$('#playedOn').attr("title","Please select a game before selecting platform");
	}
	
}

function resetCommonData()
{
	$('#postTitleText').text('My Post Title');
	$('#postTitleInput').val("");
	$('.coverSection').css('background-image',"url('http://192.168.0.103:9000/assets/images/default/featuredBg.png')");
	$('.coverSection').attr('id','noBg');
	$('#charMaxLimit').text('200');
	$('#videoUrlInput').val("");
}

function resetReview()
{
	$('#selectedGamePlatform').attr('class','all');
	$('#selectedGamePlatform').text('Select Platform');	
	window.frames['richEditor'].document.body.innerHTML="";
	$('#snippetText p').text("Add your micro verdict.");
	$('dd.reviewPointDd').remove();
	$('#noSweetPoint').show();
	$('#noStinkPoint').show();
	$('.knob').val(0).trigger('change');
}

function resetNewsLinkInfo()
{
	$('#linkContent').empty();
	$('#linkContent').removeClass('linkDesign');	
	$('a.newsLink').text('Add news source link');
	$('a.newsLink').removeAttr('href');
}
function resetOtherCategories(defaultText)
{	
	window.frames['richEditor'].document.body.innerHTML="";
	$('#snippetText p').text(defaultText);
}

function sweetButtonPressed()
{
	if($('#sweet dd').length <5)
	{
		$('#noSweetPoint').hide();
		var sweetElement="<dd class='reviewPointDd'><i class='icon-thumbs-up-alt sweetIcon'></i><span class='colorWhite hiddenDiv'>Add a sweet point.</span><input type='text' placeholder='Upto 50 chars' maxLength='50'><a href='javascript:;' title='Add Sweet' class='marginLeft5 sweetEditButton doneEditiingButton font16'><i class='icon-ok'></i></a></dd>"
		$('#sweet').append(sweetElement);
	}
		
}

function stinkButtonPressed()
{
	if($('#stink dd').length <5)
	{
		$('#noStinkPoint').hide();
		var stinkElement="<dd class='reviewPointDd'><i class='icon-thumbs-down-alt stinkIcon'></i><span class='colorWhite hiddenDiv'>Add a stink point.</span><input type='text' placeholder='Upto 50 chars' maxLength='50'><a href='javascript:;' title='Add Stink' class='marginLeft5 stinkEditButton doneEditiingButton font16'><i class='icon-ok'></i></a></dd>"		
		$('#stink').append(stinkElement);
	}
}
function initUploader(replaceImage)
		{			
			$.modal('<iframe id="browser" src="/media/imageUploader" class="selectorBox" data-replaceimage="'+replaceImage+'"/>', {
    			
    			onOpen : function(dialog) {
					dialog.overlay.fadeIn('slow', function() {
						dialog.container.slideDown('slow', function() {
							dialog.data.fadeIn('slow');
						});
					});
				},
			    containerCss:{
			        backgroundColor:"#fff",
			        borderColor:"#fff",
			        height:600,
			        padding:0,
			        width:800
			       
			    },
			    overlayClose:true
				});			
						
		}

function initGameCreator()
{
	$.modal('<iframe id="browser" src="/game/gameCreator" class="selectorBox"/>', {
    			
    			onOpen : function(dialog) {
					dialog.overlay.fadeIn('slow', function() {
						dialog.container.slideDown('slow', function() {
							dialog.data.fadeIn('slow');
						});
					});
				},
			    containerCss:{
			        backgroundColor:"#fff",
			        borderColor:"#fff",
			        height:600,
			        padding:0,
			        width:800
			    },
			    overlayClose:true
				});
}		
function initTitleEditor()
{
	$('#postTitleText').hide();
	$('#postTitleEdit').show();
}		

function doneEditingTitle()
{
	if($('#postTitleInput').val().length>0)
	{
		$('#postTitleText').text($('#postTitleInput').val());
	}
	$('#postTitleText').show();
	$('#postTitleEdit').hide();
}
function countCharInEditor(charCount)
{	
	$('#charMaxLimit').text(charCount);	
}

function charCountCheck()
{
	var maxChars=parseInt($('#charMaxLimit').text());	

	$(document.getElementById("richEditor").contentWindow.document).keyup(function(event){			
		if(!$('#selectedCategory').hasClass('gloonicle'))
		{
			var text=window.frames['richEditor'].document.body.innerText;
			var currentCharCount = text.length;													
			var charsLeft=maxChars-currentCharCount;				
			countCharInEditor(charsLeft);
			if(charsLeft<=0)
			{
				$('#postSnippet a.doneEditiingButton').addClass('disableOpacity');
				$('#postSnippet a.doneEditiingButton').removeAttr('href');
			}
			else
			{
				$('#postSnippet a.doneEditiingButton').removeClass('disableOpacity');
				$('#postSnippet a.doneEditiingButton').attr('href','javascript:;');
			}
		}							
	});
}

function addSnippetText()
{
	iFrameOn();
	$('#snippetText p').hide();
	$('#postSnippet').show();		
	charCountCheck();
	if(!$('#selectedCategory').hasClass('gloonicle'))
	{
		$('#maxCharLimitContainer').show();
		$('.nonGloonicleEditButtons').show();
		$('.gloonicleEditButtons').hide();
	}
	else
	{
		$('#maxCharLimitContainer').hide();
		$('.nonGloonicleEditButtons').hide();
		$('.gloonicleEditButtons').show();
	}	
	

	
} 

function doneEditingSnippet()
{
	var text=window.frames['richEditor'].document.body.innerHTML;
	console.log(text);
	if(text.length>0)
	{
		$('#snippetText p').html(text);
	}
	$('#snippetText p').show();
	$('#postSnippet').hide();
}

function donAddingReviewPoint(e)
{
	var reviewPointText=$(e).closest('dd.reviewPointDd').children('input').val();
	if(reviewPointText.length>0)
	{
		$(e).hide();
		$(e).closest('dd.reviewPointDd').children('input').hide();		
		$(e).closest('dd.reviewPointDd').children('span').text(reviewPointText);
		if($(e).closest('dd.reviewPointDd').children('span a').length==0)
		{
			$(e).closest('dd.reviewPointDd').children('span').append("<a href='javascript:;' title='Edit Point' class='marginLeft5 colorGray editPoint'><i class='icon-edit'></i></a><a href='javascript:;' title='Remove Point' class='marginLeft5 colorGray removePoint'><i class='icon-cancel-circled'></i></a>");
		}				
		$(e).closest('dd.reviewPointDd').children('span').show();
	}
	
}


function activateReviewKnob()
{
	$('.knob').knob({
		'change':function(){hasBeenEdited=true;}
	});
	$('.knob').css('font-size','33px');
	$('.knob').css('color','#fff');
}
function editCalled(e)
{
	$(e).closest('dd.reviewPointDd').children('span').hide();
	$(e).closest('dd.reviewPointDd').children('input').show();			
	if($(e).closest('dl#sweet').length>0)
	{
		$(e).closest('dd.reviewPointDd').children('a.sweetEditButton').show();
	}
	if($(e).closest('dl#stink').length>0)
	{
		$(e).closest('dd.reviewPointDd').children('a.stinkEditButton').show();
	}		
}

function deleteCalled(e)
{	
	$(e).closest('dd.reviewPointDd').remove();
	if($('#stink dd').length ==0)
	{
		$('#noStinkPoint').show();
	}
	if($('#sweet dd').length ==0)
	{
		$('#noSweetPoint').show();
	}			
}

function initNewsLinkScraper()
{
	$('#linkDefaultData').hide();
	$('#newsLinkContainer').fadeIn();
}

function doneAddingLink()
{
	$('#newsLinkContainer').hide();
	var link=$('#newsLink').val();
	if(link.length>0 && link.indexOf("http")!=-1)
	{
		$('#linkDefaultData a').text(link);
		$('#linkDefaultData a').attr("href",link);
		$.post("/post/scrapeLink",{"newsLink":link},function(data){				
					
					if(data.status === "success")
					{																		
						var title=data.title;						
						var description=data.description;						
						var domain=data.domainUrl;						
						var imgUrl=data.image;
						var htmlContent="<a href='"+link+"' target='_blank'>"+
						"<div class='floatLeft' style='width:400px;'>"+
						"<p class='colorWhite'>"+title+"</p>"+
						"<p class='linkColor font11'>"+domain+"</p>"+
						"<p class='colorGray font13'>"+description+"</p>"+
						"</div><img height='200' src='"+imgUrl+"'>"+
						"</a>"						
						$('#linkContent').hide();																
						$('#linkContent').html(htmlContent);
						$('#linkContent').addClass('linkDesign');
						$('#linkContent').fadeIn();
					}
					else
					{						
						console.log('failed');
						$('#parseError').fadeIn().delay(1000).fadeOut();
					}				
				}, 'json');
	}
	$('#linkDefaultData').show();
}

function initVideoEmbedder()
{
	 $('#addVideoUrl').show();
}

function doneAddingVideo()
{
	var src=$('#videoUrlInput').val(); 	
	$('#addVideoUrl').hide();
}

function playVideo()
{
	var src=$('#videoUrlInput').val();	
	if(src.length>0 && src.indexOf("www.youtube.com")!=-1)
	{
		var processedUrl = src.replace("watch?v=","embed/");   
		$.modal('<iframe width="853" height="480" src="'+processedUrl+'" frameborder="0" allowfullscreen></iframe>', {
    			
    			onOpen : function(dialog) {
					dialog.overlay.fadeIn('slow', function() {
						dialog.container.slideDown('slow', function() {
							dialog.data.fadeIn('slow');
						});
					});
				},
			    containerCss:{
			        backgroundColor:"#fff",
			        borderColor:"#fff",
			        height:490,
			        padding:0,
			        width:860
			    },
			    overlayClose:true
		});
	}
	
}

function onPlayedOnClick(el)
{
	if($(el).attr('href')!=undefined)
		{
			$('input.platform').prop("disabled",true);
			var gamePlatforms =$('#gamePlatforms').val();
			var trimPlatformText = gamePlatforms.trim();
			var splittedPlatforms = trimPlatformText.split(" ");			
			for(var count=0; count<splittedPlatforms.length;++count)
			{
				$('input#'+splittedPlatforms[count]).prop("disabled",false);
			}
			$('#platformOptions').show();
		 	$('#platformOptions').animate({
				 width:"400", height:"300"}, 500);
		}
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
		
			var imageHtml='<img id="'+imgId+'"style="border-style:solid; border-width:15px;border-color:#FCEEE2"src="'+url+'" width="640" height="480"/><p style="text-align;"><span style="font-size:14px;"><i>'+caption+'</i></span></p>'		
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

	
		
function onSave(state)
{	
	var title=$('#postTitleInput').val();	
	var body=window.frames['richEditor'].document.body.innerHTML;
	var featuredImage=$('.coverSection').attr('id');
	var category=$('#selectedCategory').text().trim();		
	var videoLink=$('#videoUrlInput').val();
	var gameId= "";
	var articleId=$('#articleId').val();
	var articleState=state;
	var platform = "";		
	var reviewGameScore=0;	
	var newsSrcLink="";
	
	var articleJson ={};
	
	articleJson["articleId"]=articleId;
	articleJson["articleState"]=articleState;
	articleJson["title"]=title;	
	articleJson["body"]=body;
	articleJson["featuredImage"]=featuredImage;
	articleJson["category"]=category;			
	articleJson["videoLink"]=videoLink;
	
	if(category == "review")
	{
		platform=$('#selectedGamePlatform').attr('class');
		articleJson["platform"]=platform;
		reviewGameScore=$('#userScoreDonutContainer input').val();
		articleJson["gameScore"]=reviewGameScore;
		
		if($('#sweet dd').length>0)
		{
			var sweets = $('#sweet dd');
			var sweetJson ={};
			sweets.each(function(index, sweet)
			{
				sweetJson[index]=$(sweet).children('span').text();				
			});
		}
		if($('#stink dd').length>0)
		{
			var stinks = $('#stink dd');
			var stinkJson ={};
			stinks.each(function(index, stink)
			{
				stinkJson[index]=$(stink).children('span').text();				
			});
		}
					
		
		
		articleJson["sweets"]= JSON.stringify(sweetJson);
		articleJson["sweetsLength"]=$('#sweet dd').length;
		articleJson["stinks"]= JSON.stringify(stinkJson);
		articleJson["stinksLength"]=$('#stink dd').length;
		
	}
	
	if(category == "news")
	{
		newsSrcLink=$('#newsLink').val();
		articleJson["newsSrcLink"]=newsSrcLink;
	}
	if(category == "review" || category == "news" || category == "video")
	{
		gameId= $('#gameSelector img').attr("id");
		articleJson["gameId"]=gameId;	
	}	
		
		

	if(validateEditor())
		{								
			
			$.post('/post/save',articleJson,function(data){
							if(data.status=='success')
							{
								console.log("Success");
								var username=$('#user').text().trim();
								hasBeenSaved=true;					
								if(state == 1)
								{
									
			 						window.location.href="/"+username+"#drafts";
								}
								else
							    {
							    	hasBeenPublished=true;
									window.location.href="/"+username;
							    }
							}
						},'json');											
		}
		else
		{
			console.log("Fail");
			alert('Something wrong happened');			
		}
	
	
}

function validateEditor()
{
	var validationSuccess=false;
	var title=$('#postTitleInput').val();	
	var body=window.frames['richEditor'].document.body.innerHTML;
	var featuredImage=$('.coverSection').attr('id');
	var category=$('#selectedCategory').text().trim();		
	var videoLink=$('#videoUrlInput').val();
	var gameId= "";		
	var platform = "";			
	var sweetPoints = new Array();
	var stinkPoints= new Array();
	var newsSrcLink="";
	var errorMessage="The following conditions to be met for validation:";	
	if(featuredImage != "noBg" && title.length >0 && body.length >0)
	{
			validationSuccess=true;			
	}
	else
	{
		validationSuccess=false;
		errorMessage+="\n*A featured cover image is compulsory\n*Valid title for Post\n*Valid Post Body";
	}
	if(category == "review")
	{
		gameId= $('#gameSelector img').attr("id");
		console.log("gameId: "+gameId);
		platform = $('#selectedGamePlatform').attr('class');
		var sweetsCount=$('#sweet dd').length;
		var stinksCount=$('#stink dd').length;
		console.log("platform: "+platform);
		console.log("Sweets: "+$('#sweet dd').length);
		console.log("Stinks: "+$('#stink dd').length);
		if(gameId != "noGame" && (sweetsCount>0 || stinksCount>0) && platform != "all")
		{			
			validationSuccess=true;
		}
		else
		{
			validationSuccess=false;
			errorMessage+="\n*Game is compulsory for Review\n*A 'Played on' Platform is must\n*Atleast one sweet or stink point\n*A valid score should be given via the 'score dial'";
		}
	}
	else if(category == "news")
	{
		newsSrcLink=$('#newsLink').val();
		if(newsSrcLink.length>0 && newsSrcLink.indexOf("http")!=-1)
		{
			validationSuccess=true;
		}
		else
		{
			validationSuccess=false;
			errorMessage+="\n*A valid news source link";
		}
	}
	else if(category == "video")
	{
		if(videoLink.length>0 && videoLink.indexOf("www.youtube.")!=-1)
		{
			validationSuccess=true;
		}
		else
		{
			validationSuccess=false;
			errorMessage+="";
			errorMessage+="\n*A valid youtube video link";
		}
	}
	
	if(!validationSuccess)
	{
		
		alert(errorMessage);
	}
	
	return validationSuccess;
}

var hasBeenEdited=false;
var hasBeenSaved=false;
var hasBeenPublished=false;

$(function(){
	
	$(document).ajaxStart(function() {
	  $('#loadingIcon').show();
	});
	
	$(document).ajaxStop(function() {
	  $('#loadingIcon').hide();
	});
		
	activateReviewKnob();
	selectedCategoryClick();
	selectCategory();
	
	$('#sweetButton').click(function() {
		hasBeenEdited=true;
		sweetButtonPressed();
		});
		
	$('#stinkButton').click(function() {
		hasBeenEdited=true;
		stinkButtonPressed();
		});	
	$('#imageUploader').click(function() { //featured image
		initUploader(0);
	});
	
	$('#imageHolder img').click(function(){ //gloonicle editor
		initUploader(1);
	});
		
	$('#changeTitle').click(function() {
		initTitleEditor();
		});	
	$('#postTitleEdit a').click(function() {
		hasBeenEdited=true;
		doneEditingTitle();
		});	
	
	$('#addSnippetText').click(function() {
		addSnippetText();
	});	
	
	$('#postSnippet a.doneEditiingButton').click(function() {
		var attrVal = $(this).attr('href');
		console.log("attrVal: "+attrVal);
		if(attrVal!== undefined)
		{
			hasBeenEdited=true;
			doneEditingSnippet();
		}
		
	});
	
	$('#sweet').on('click','.sweetEditButton',function() {
		donAddingReviewPoint(this);
	});
	
	$('#stink').on('click','.stinkEditButton',function() {
		donAddingReviewPoint(this);
	});	
	
	$('#reviewPoints').on('click','.editPoint',function() {
		editCalled(this);
	});
	
	$('#reviewPoints').on('click','.removePoint',function() {
		deleteCalled(this);
	});
		
	$('#playedOn').click(function() {
		onPlayedOnClick(this);
	});
	
	$('#platformSet').click(function() {
		$('#platformOptions').animate({
			width:"0", height:"0"}, 500);	
		$('#platformOptions').hide();
		
		if($('input.platform[name=playedOn ]:checked').length>0)
		{
			var platformValue=$('input.platform[name=playedOn ]:checked').val();
			var platformText=$('input.platform[name=playedOn ]:checked').parent('div.divCell').text();
			$('#selectedGamePlatform').attr('class',platformValue);
			$('#selectedGamePlatform').text(platformText);
			$('input.platform[name=playedOn ]:checked').removeAttr('checked');
		}							
		return false;
	});
	
	$('#gameSelector').click(function() {
			initGameCreator();
	});
	
	$('#newsSourceLinkButton').click(function() {
			initNewsLinkScraper();	
	});	
		
	$('#newsLinkContainer a.doneEditiingButton').click(function() {
		 hasBeenEdited=true;
		 doneAddingLink();
	});
		
	$('#videoForm').click(function() {
		initVideoEmbedder();
	});
	
	$('#addVideoUrl a.doneEditiingButton').click(function() {
		hasBeenEdited=true;
		doneAddingVideo();
	});
		
	$('.videoPlayButton').click(function() {
		playVideo();
	});	
	
	$('#close').click(function() {
		var username=$('#user').text().trim();		
		window.location.href="/"+username;
	});
	
	$('#save').click(function() {			
		onSave(1);				
	});
	
	
	
	
	$('#publish').click(function() {						
		onSave(2);		
	});
	
	window.onbeforeunload=function()
	{
		console.log("hasBeenEdited: "+hasBeenEdited);
		console.log("hasBeenSaved: "+hasBeenSaved);
		console.log("hasBeenPublished: "+hasBeenPublished);
		
		if(hasBeenEdited && !(hasBeenSaved || hasBeenPublished))
		{
			return "Post edited.";
		}
	}
});
