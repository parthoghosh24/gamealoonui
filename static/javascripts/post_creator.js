/**
 *@author Partho 
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
	
	$('#reviewGamePlayedOn').hide();
	$('#snippetText i#snippetTextTitle').addClass('icon-play-3');
	$('#snippetText i#snippetTextTitle').text('Caption');
	$('#snippetText p').text('Add a caption to video.');
	$('#gameBoxArt').show();
	$('#data').css('width','660px');
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
	$('#snippetText i#snippetTextTitle').addClass('icon-thumbs-up-1');
	$('#snippetText i#snippetTextTitle').text('Microverdict');
	$('#snippetText p').text('Add your micro verdict.');
	$('#reviewPoints').show();
	$('#score').show();
	$('#gameBoxArt').show();
	$('#reviewGamePlayedOn').show();
	$('#data').css('width','560px');
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
	$('#reviewGamePlayedOn').hide();
	$('#snippetText i#snippetTextTitle').addClass('icon-signal-2');
	$('#snippetText i#snippetTextTitle').text('Bulletin');
	$('#snippetText p').text('Share hot bulletin.');
	$('#newsSource').show();
	$('#gameBoxArt').show();
	$('#data').css('width','660px');
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
	$('#data').css('width','800px');
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
					resetGloonicle();
				}
				if($('#selectedCategory').hasClass('video'))
				{
					resetOtherCategories("Add a caption to video.");
					resetGameData();					
				}
				if($('#selectedCategory').hasClass('news'))
				{
					resetOtherCategories('Share hot bulletin.');					
					resetNews();
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
	$('#gameSelector img').attr("id","nothing");
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
	$('.coverSection').attr('id','default');
}

function resetReview()
{
	$('#selectedGamePlatform').attr('class','all');
	$('#selectedGamePlatform').text('Select Platform');
	$('#snippetTextInput').val("");
	$('#snippetText p').text("Add your micro verdict.");
	$('dd.reviewPointDd').remove();
	$('#noSweetPoint').show();
	$('#noStinkPoint').show();
	$('.knob').val(0).trigger('change');
}

function resetOtherCategories(defaultText)
{
	$('#snippetTextInput').val("");
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
function initUploader()
		{			
			$.modal('<iframe id="browser" src="/media/imageUploader" class="selectorBox" data-replaceimage="0"/>', {
    			
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
			        height:780,
			        padding:0,
			        width:1024
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
			        height:780,
			        padding:0,
			        width:1024
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

function addSnippetText()
{
	$('#snippetText p').hide();
	$('#postSnippet').show();	
} 

function doneEditingSnippet()
{
	if($('#snippetTextInput').val().length>0)
	{
		$('#snippetText p').text($('#snippetTextInput').val());
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
	if(link.length>0)
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
						"<p class='colorLightGray font11'>"+domain+"</p>"+
						"<p class='colorGray font13'>"+description+"</p>"+
						"</div><img height='200' src='"+imgUrl+"'>"+
						"</a>"
						console.log("html: "+htmlContent);
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
var hasBeenEdited=false

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
	$('#imageUploader').click(function() {
		initUploader();
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
	
	$('#postSnippet a').click(function() {
		hasBeenEdited=true;
		doneEditingSnippet();
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
		$('#platformOptions').show();
		 $('#platformOptions').animate({
			 width:"400", height:"300"}, 500);			
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
		 doneAddingLink();
		});	
});
