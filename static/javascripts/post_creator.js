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
		
	}
	if($('#snippetText i#snippetTextTitle').hasClass('icon-user'))
	{
		
	}	
	$('#reviewGamePlayedOn').hide();
	$('#snippetText i#snippetTextTitle').addClass('icon-signal-2');
	$('#snippetText i#snippetTextTitle').text('Bulletin');
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
}
function selectCategory()
{
	$('.option').click(function() {
		var type=$(this).attr('id');
		console.log("type: "+type);
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
	$('.knob').knob();
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

$(function(){
	 
	activateReviewKnob();
	selectedCategoryClick();
	selectCategory();
	
	$('#sweetButton').click(function() {
		sweetButtonPressed();
		});
		
	$('#stinkButton').click(function() {
		stinkButtonPressed();
		});	
	$('#imageUploader').click(function() {
		initUploader();
		});	
	$('#changeTitle').click(function() {
		initTitleEditor();
		});	
	$('#postTitleEdit a').click(function() {
		doneEditingTitle();
		});	
	
	$('#addSnippetText').click(function() {
		addSnippetText();
	});	
	
	$('#postSnippet a').click(function() {
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
		
});
