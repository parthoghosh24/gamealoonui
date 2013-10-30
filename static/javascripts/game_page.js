/**
 * @author Partho
 */

$(window).load(function() {
		
	  function onAllArticlesAfter()
		{
			var title = $(this).data('title');
			var encodedTitle=$(this).data('encodedtitle');
			var username=$(this).data('username');
			$('a#allArticleTitle').attr('href','/article/'+username+'/'+encodedTitle);
			$('a#allArticleTitle span').text(title);
			$('a#allArticleAuthor').attr('href','/'+username);
			$('a#allArticleAuthor span').text(username);	        
		}		
		
		function onVideosAfter()
		{
			var title = $(this).data('title');
			var encodedTitle=$(this).data('encodedtitle');
			var username=$(this).data('username');
			$('a#videoArticleTitle').attr('href','/article/'+username+'/'+encodedTitle);
			$('a#videoArticleTitle span').text(title);
			$('a#videoArticleAuthor').attr('href','/'+username);
			$('a#videoArticleAuthor span').text(username);	        
		}				
		
		
		
		
		
		$("#cAll").cycle({
			fx : 'scrollUp, scrollDown, scrollLeft, scrollRight',
			randomizeEffects : true,
			speed : 400,
			timeout : 5000,			
			delay : 10,
			pager:'#allCarouselNav',
			after: onAllArticlesAfter,
			pagerAnchorBuilder:function(idx, slide) { 
        		// return selector string for existing anchor 
        			return '#allCarouselNav span:eq(' + idx + ') a'; 
    }
		});	
		
		$("#cVideo").cycle({
			fx : 'scrollUp, scrollDown, scrollLeft, scrollRight',
			randomizeEffects : true,
			speed : 400,
			timeout : 5000,
			delay : 100,
			pager:'#videoCarouselNav',
			after: onVideosAfter,
			pagerAnchorBuilder:function(idx, slide) { 
        		// return selector string for existing anchor              		           		   	        		   
        			return '#videoCarouselNav span:eq(' + idx + ') a'; 
    }
		});	
		
		$("#cActivity").cycle({
			fx : 'scrollLeft, scrollRight',
			randomizeEffects : true,
			speed : 400,
			timeout : 5000,
			delay : 1000,
			pager:'#activityCarouselNav',			
			pagerAnchorBuilder:function(idx, slide) { 
        		// return selector string for existing anchor 
        			return '#activityCarouselNav span:eq(' + idx + ') a'; 
    }
		});				
		
	});

function  applyPauseResumeToCarousel()
 {
 	//all
 	$('#allBottomTab span span a.playPause').click(function() { 		
		  if($(this).children('i').hasClass('icon-pause-3'))
		  {
		  	$("#cAll").cycle('pause');
		  	$(this).children('i').removeClass('icon-pause-3');
		  	$(this).children('i').addClass('icon-play-2');
		  }
		  else
		  {
		  	
		  	$("#cAll").cycle('resume');
		  	$(this).children('i').removeClass('icon-play-2');
		  	$(this).children('i').addClass('icon-pause-3');
		  }
		});
	
	//videos	
	$('#videosBottomTab span span a.playPause').click(function() {
		  if($(this).children('i').hasClass('icon-pause-3'))
		  {
		  	$("#cVideo").cycle('pause');
		  	$(this).children('i').removeClass('icon-pause-3');
		  	$(this).children('i').addClass('icon-play-2');
		  }
		  else
		  {
		  	
		  	$("#cVideo").cycle('resume');
		  	$(this).children('i').removeClass('icon-play-2');
		  	$(this).children('i').addClass('icon-pause-3');
		  }
		});
		
	//activities	
	$('#activityBottomTab span span a.playPause').click(function() {
		  if($(this).children('i').hasClass('icon-pause-3'))
		  {
		  	$("#cActivity").cycle('pause');
		  	$(this).children('i').removeClass('icon-pause-3');
		  	$(this).children('i').addClass('icon-play-2');
		  }
		  else
		  {
		  	
		  	$("#cActivity").cycle('resume');
		  	$(this).children('i').removeClass('icon-play-2');
		  	$(this).children('i').addClass('icon-pause-3');
		  }
		});
				
 } 
 	
$(function(){
	applyPauseResumeToCarousel();
	function getData(gameId, category, timestampVal)
    {    	    	
    	$.get('/articles/'+gameId+'/'+category+'/3',{"timestamp":timestampVal},function(data){
    		if(data.length>0)
    		{
    			$.each(data, function(index, item) {
    				var categoryIconMap ={};
    				categoryIconMap["news"]="icon-signal-2";
    				categoryIconMap["review"]="icon-thumbs-up-1";
    				categoryIconMap["feature"]="icon-star";
    				categoryIconMap["gloonicle"]="icon-user";
    				categoryIconMap["video"]="icon-play-3";
    				
    				var articleHtml='<div class="recentArticleDiv" id="'+item.articleTimestamp+'">'+
						'<div class="articleContentHeader">'+							
						'<span class="textCapitalization '+categoryIconMap[item.articleCategory.toLowerCase()]+' '+item.articleCategory.toLowerCase()+' marginRight10 fontWeightBold font11 colorWhite">'+item.articleCategory+'</span>'+
						'<a href="/article/'+item.articleAuthor+'/'+item.articleEncodedUrlTitle+'"><span class="applyMontserratBold font13 colorBlack">'+item.articleTitle+'</span></a>'+	
						'<a href="/'+item.articleAuthor+'"><span class="floatRight icon-user-2 colorWhite articleUsernameBox">'+item.articleAuthor+'</span></a>'+			
						'</div>'+	
						'<div class="articleContentPreview" style="background-image: url('+item.articleFeaturedImage+');background-size: 570px;">'+	
						'<div class="articleContentPreviewData">'+
						'<p>'+
						'<span class="applyJura colorWhite font12">'+item.articleTimeSpentFromPublish+' - </span>'+	
						'<span class="colorWhite applyFranklinGothicRegular font13">'+item.articleSubTitle+'</span>'+		
						'<a href="/article/'+item.articleAuthor+'/'+item.articleEncodedUrlTitle+'"><i class="icon-ellipsis colorWhite moreLink"></i></a>'+			
						'</p>'+			
						'</div>'+			
						'</div>'+			
						'<div class="articleContentFooter">'+		
						'<span class="icon-gamepad floatLeft fontWeightBold">';
						$.each(item.articlePlatforms, function(index, platform)
						{
							articleHtml+='<a id="'+platform.shortTitle+'" href="/platform/'+platform.shortTitle+'/all" target="_blank"><span class="'+platform.shortTitle+' marginLeft5 interestUserProfileFontSize" >'+platform.title+'</span></a>';
						});
						articleHtml+='</span>'+	
						'<span class="floatRight fontWeightBold font10">'+							
						'<span><i class="font13 icon-users"></i>5k</span>'+
						'<span><i class="font13 icon-smile"></i>500</span>'+	
						'<span><i class="font13 icon-frown"></i>70</span>'+		
						'</span>'+		
						'</div>'+		
						'</div>';	
						
					var articleElement = $(articleHtml);	
					articleElement.hide();					
					var articles =$("."+category+"List");  
				    articles.append(articleElement);
				    articleElement.fadeIn();
					
				});
				$("#"+category+" button.loadMore").removeClass('hiddenDiv');
				$("#"+category+" div.noData").addClass('hiddenDiv');
    		}
    		
    	},'json');  
    }
    
    $("#tabs-min").tabs({		
		beforeActivate: function(event, ui){						 
			var timestamp=new Date().getTime();
			var gameId=$('#gameBoxArt img').attr('id');			
			if(ui.newPanel.index()== 2)
			{	
				if($('.videoList').is(':empty'))
				{
					getData(gameId,"video", timestamp);					
				}												
				
			}
			else if(ui.newPanel.index()== 3)
			{
				//TODO fetch users			
						
			}
			else if(ui.newPanel.index()== 4)
			{				
				//TODO fetch activities							
			}			
			else
			{				
				if($('.allList').is(':empty'))
				{
					getData(gameId,"all", timestamp);
					
				}
				
				
			}
		}
	});
    
    //Interested Not-interested
			 $('#interestedInButton').click(function() {
			 	   if($('#interestedInButton').hasClass('follow'))
			 	   {
			 	   	  $.post('/user/gameInterestedOrNot',{"gameId":$('#gameBoxArt img').attr('id'),"type":0},function(data){
			 	   	  	if(data.status == "success")
			 	   	  	{
			 	   	  		$('#interestedInButton').removeClass('follow');
			 	   	  		$('#interestedInButton').addClass('unfollow');   
			 	   	  		$('#interestedInButton').text('- Not Interested');
			 	   	  	}
			 	   	  	
			 	   	  },'json');
			 	   	  
			 	   	  
			 	   }
			 	   if($('#interestedInButton').hasClass('unfollow'))
			 	   {			 	   	
			 	   	$.post('/user/gameInterestedOrNot',{"gameId":$('#gameBoxArt img').attr('id'),"type":1},function(data){
			 	   		if(data.status == "success")
			 	   	  	{
			 	   	  		$('#interestedInButton').removeClass('unfollow');
			 	   	  		$('#interestedInButton').addClass('follow');
			 	   	  		$('#interestedInButton').text('+ Interested');
			 	   	  	}
			 	   	  	   
			 	   	  },'json');
			 	   	  	
			 	   }			 	   
				 });
				 
	var mode = 1;
	$('#gameToggleWindow').click(function() {
		
		if(mode ==1)
		{			
			
			$('#gameDetailsBox').animate({			
			height:"800"}, 500);
			
			$('#gameToggleWindow').animate({
			top:"+=430"}, 500);
			
			mode=2;
			$('#gameToggleWindow').addClass('icon-up-open-1');
			$('#gameToggleWindow').removeClass('icon-down-open-1');
		}
		else
		{			
			
			$('#gameDetailsBox').animate({			
			height:"370"}, 500);
			
			$('#gameToggleWindow').animate({
			top:"-=430"}, 500);
			
			mode=1;
			$('#gameToggleWindow').addClass('icon-down-open-1');
			$('#gameToggleWindow').removeClass('icon-up-open-1');
		}
		
		
	});
				
			var userInterested =parseFloat($('#userInterested').val());
			var userPlayed =parseFloat($('#userPlayed').val());
			var userScored =parseFloat($('#userScored').val());
			var articlesPublishedForGame =parseFloat($('#articlesPublished').val());
			
			var totalUsers=parseFloat($('#totalUsers').val());
			if(totalUsers == 0)
			{
				totalUsers=1;
			}
			var totalPublishedPosts =parseFloat($('#totalPublishedPosts').val());
			if(totalPublishedPosts == 0)
			{
				totalPublishedPosts=1;
			}
			var gameScore =parseFloat($('#gameScore').val());
			
			console.log("Total interested "+userInterested);
		 	var interstedInfo=[{label:"Interested", data:userInterested, color:"#FF4500"},
							{label:"Total", data:(totalUsers-userInterested), color:"#EAEAEA"}];
	
				$.plot($("#interesteddonut"), interstedInfo,
			    {
			        series: {
			            pie: {
			                innerRadius: 0.7,
			                show: true,
			                label: { show: false }
			            }
			        },
			        legend: { show: false }
			    });
    
    
    			$("#interesteddonutData").text(((userInterested/totalUsers)*100).toFixed(1)+"%");
    
               
		    var playedInfo=[{label:"Played", data:userPlayed, color:"#FF4500"},
		        {label:"Total", data:totalUsers-userPlayed, color:"#EAEAEA"}];
		                        
		        $.plot($("#playeddonut"), playedInfo,
		        {
		            series: {
		                pie: {
		                    innerRadius: 0.7,
		                    show: true,
		                    label: { show: false }
		                }
		            },
		            legend: { show: false }
		        });
		        
		        $("#playeddonutData").text(((userPlayed/totalUsers)*100).toFixed(1)+"%");
    
    
			var scoredInfo=[{label:"Scored", data:userScored, color:"#FF4500"},
			{label:"Total", data:totalUsers-userScored, color:"#EAEAEA"}];
				
				$.plot($("#scoreddonut"), scoredInfo,
			    {
			        series: {
			            pie: {
			                innerRadius: 0.7,
			                show: true,
			                label: { show: false }
			            }
			        },
			        legend: { show: false }
			    });
			    
			    $("#scoreddonutData").text(((userScored/totalUsers)*100).toFixed(1)+"%");
			    
			    
			var publishedInfo=[{label:"Published", data:articlesPublishedForGame, color:"#FF4500"},
			{label:"Total", data:totalPublishedPosts-articlesPublishedForGame, color:"#EAEAEA"}];
				
				$.plot($("#publisherdonut"), publishedInfo,
			    {
			        series: {
			            pie: {
			                innerRadius: 0.7,
			                show: true,
			                label: { show: false }
			            }
			        },
			        legend: { show: false }
			    });
			    
			    $("#publishdonutData").text(((articlesPublishedForGame/totalPublishedPosts)*100).toFixed(1)+"%");				   
			     						   	  
			    var gameScoreInfo=[{label:"GameScore", data:gameScore, color:"#76A7F5"},
				{label:"max", data:10-gameScore, color:"#EAEAEA"}];
				
				$.plot($("#gameScoredonut"), gameScoreInfo,
			    {
			        series: {
			            pie: {
			                innerRadius: 0.7,
			                show: true,
			                label: { show: false }
			            }
			        },
			        legend: { show: false }
			    });
			    
			    if(gameScore == 0.0)
			    {
			    	$("#gameScoredonutData").text("NR");
			    }
			    else
			    {
			    	$("#gameScoredonutData").text(gameScore.toFixed(1));
			    }
			    
			    
	
});
