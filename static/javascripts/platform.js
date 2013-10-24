
	
$(window).load(function() {
	
	    function onVideoAfter()
		{
			var title = $(this).data('title');
			var encodedTitle=$(this).data('encodedtitle');
			var username=$(this).data('username');
			var commentCount=$(this).data('commentcount');
			$('a#vArticleTitle').attr('href','/article/'+username+'/'+encodedTitle);
			$('a#vArticleTitle span').text(title);
			$('a#vArticleAuthor').attr('href','/'+username);
			$('a#vArticleAuthor span').text(username);	       
			$('#videoCommentCount').text(commentCount); 
		}		
		
		function onNewsAfter()
		{
			var title = $(this).data('title');
			var encodedTitle=$(this).data('encodedtitle');
			var username=$(this).data('username');
			var commentCount=$(this).data('commentcount');
			$('a#nArticleTitle').attr('href','/article/'+username+'/'+encodedTitle);
			$('a#nArticleTitle span').text(title);
			$('a#nArticleAuthor').attr('href','/'+username);
			$('a#nArticleAuthor span').text(username);	  
			$('#newsCommentCount').text(commentCount);      
		}
		
		function onFeatureAfter()
		{
			var title = $(this).data('title');
			var encodedTitle=$(this).data('encodedtitle');
			var username=$(this).data('username');
			var commentCount=$(this).data('commentcount');
			$('a#fArticleTitle').attr('href','/article/'+username+'/'+encodedTitle);
			$('a#fArticleTitle span').text(title);
			$('a#fArticleAuthor').attr('href','/'+username);
			$('a#fArticleAuthor span').text(username);	      
			$('#featureCommentCount').text(commentCount);  
		}
		
		function onReviewAfter()
		{
			var title = $(this).data('title');
			var encodedTitle=$(this).data('encodedtitle');
			var username=$(this).data('username');
			var commentCount=$(this).data('commentcount');
			$('a#rArticleTitle').attr('href','/article/'+username+'/'+encodedTitle);
			$('a#rArticleTitle span').text(title);
			$('a#rArticleAuthor').attr('href','/'+username);
			$('a#rArticleAuthor span').text(username);	   
			$('#reviewCommentCount').text(commentCount);     
		}
		
		function onGloonicleAfter()
		{
			var title = $(this).data('title');
			var encodedTitle=$(this).data('encodedtitle');
			var username=$(this).data('username');
			var commentCount=$(this).data('commentcount');
			$('a#gArticleTitle').attr('href','/article/'+username+'/'+encodedTitle);
			$('a#gArticleTitle span').text(title);
			$('a#gArticleAuthor').attr('href','/'+username);
			$('a#gArticleAuthor span').text(username);	   
			$('#gloonicleCommentCount').text(commentCount);     
		}
		
		$("#cVideos").cycle({
			fx : 'scrollUp, scrollDown, scrollLeft, scrollRight',
			randomizeEffects : true,
			speed : 400,
			timeout : 5000,			
			delay : 10,
			pager:'#vCarouselNav',
			after: onVideoAfter,
			pagerAnchorBuilder:function(idx, slide) { 
        		// return selector string for existing anchor 
        		    console.log('#vCarouselNav span:eq(' + idx + ') a');
        			return '#vCarouselNav span:eq(' + idx + ') a'; 
    }
		});	
		
		$("#cNews").cycle({
			fx : 'scrollUp, scrollDown, scrollLeft, scrollRight',
			randomizeEffects : true,
			speed : 400,
			timeout : 5000,
			delay : 100,
			pager:'#nCarouselNav',
			after: onNewsAfter,
			pagerAnchorBuilder:function(idx, slide) { 
        		// return selector string for existing anchor              		           		   	        		   
        			return '#nCarouselNav span:eq(' + idx + ') a'; 
    }
		});	
		
		$("#cFeatures").cycle({
			fx : 'scrollUp, scrollDown, scrollLeft, scrollRight',
			randomizeEffects : true,
			speed : 400,
			timeout : 5000,
			delay : 1000,
			pager:'#fCarouselNav',
			after: onFeatureAfter,
			pagerAnchorBuilder:function(idx, slide) { 
        		// return selector string for existing anchor 
        			return '#fCarouselNav span:eq(' + idx + ') a'; 
    }
		});	
		
		$("#cReviews").cycle({
			fx : 'scrollUp, scrollDown, scrollLeft, scrollRight',
			randomizeEffects : true,
			speed : 400,
			timeout : 5000,
			delay : 1500,
			pager:'#rCarouselNav',
			after: onReviewAfter,
			pagerAnchorBuilder:function(idx, slide) { 
        		// return selector string for existing anchor 
        			return '#rCarouselNav span:eq(' + idx + ') a'; 
    }
		});	
		
		$("#cGloonicles").cycle({
			fx : 'scrollUp, scrollDown, scrollLeft, scrollRight',
			randomizeEffects : true,
			speed : 400,
			timeout : 5000,
			delay : 2000,
			pager:'#gCarouselNav',
			after: onGloonicleAfter,
			pagerAnchorBuilder:function(idx, slide) { 
        		// return selector string for existing anchor 
        			return '#gCarouselNav span:eq(' + idx + ') a'; 
    }
		});	
});


  
 function  applyPauseResumeToCarousel()
 {
 	//news
 	$('#nBottomTab span span a.playPause').click(function() { 		
		  if($(this).children('i').hasClass('icon-pause-3'))
		  {
		  	$("#cNews").cycle('pause');
		  	$(this).children('i').removeClass('icon-pause-3');
		  	$(this).children('i').addClass('icon-play-2');
		  }
		  else
		  {
		  	
		  	$("#cNews").cycle('resume');
		  	$(this).children('i').removeClass('icon-play-2');
		  	$(this).children('i').addClass('icon-pause-3');
		  }
		});
	
	//videos	
	$('#vBottomTab span span a.playPause').click(function() {
		  if($(this).children('i').hasClass('icon-pause-3'))
		  {
		  	$("#cVideos").cycle('pause');
		  	$(this).children('i').removeClass('icon-pause-3');
		  	$(this).children('i').addClass('icon-play-2');
		  }
		  else
		  {
		  	
		  	$("#cVideos").cycle('resume');
		  	$(this).children('i').removeClass('icon-play-2');
		  	$(this).children('i').addClass('icon-pause-3');
		  }
		});
		
	//features	
	$('#fBottomTab span span a.playPause').click(function() {
		  if($(this).children('i').hasClass('icon-pause-3'))
		  {
		  	$("#cFeatures").cycle('pause');
		  	$(this).children('i').removeClass('icon-pause-3');
		  	$(this).children('i').addClass('icon-play-2');
		  }
		  else
		  {
		  	
		  	$("#cFeatures").cycle('resume');
		  	$(this).children('i').removeClass('icon-play-2');
		  	$(this).children('i').addClass('icon-pause-3');
		  }
		});
		
	//reviews	
	$('#rBottomTab span span a.playPause').click(function() {
		  if($(this).children('i').hasClass('icon-pause-3'))
		  {
		  	$("#cReviews").cycle('pause');
		  	$(this).children('i').removeClass('icon-pause-3');
		  	$(this).children('i').addClass('icon-play-2');
		  }
		  else
		  {
		  	
		  	$("#cReviews").cycle('resume');
		  	$(this).children('i').removeClass('icon-play-2');
		  	$(this).children('i').addClass('icon-pause-3');
		  }
		});
		
	//gloonicles	
	$('#gBottomTab span span a.playPause').click(function() {
		  if($(this).children('i').hasClass('icon-pause-3'))
		  {
		  	$("#cGloonicles").cycle('pause');
		  	$(this).children('i').removeClass('icon-pause-3');
		  	$(this).children('i').addClass('icon-play-2');
		  } 
		  else
		  {
		  	
		  	$("#cGloonicles").cycle('resume');
		  	$(this).children('i').removeClass('icon-play-2');
		  	$(this).children('i').addClass('icon-pause-3');
		  }
		});				
 } 

 
$(function() {			
	
	
	 applyPauseResumeToCarousel();
	 
    function getData(platform, category, timestampVal)
    {    	    	
    	$.get('/articles/'+platform+'/'+category+'/1',{"timestamp":timestampVal},function(data){
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
						'<span><i class="font13 icon-users"></i>'+item.articleCommentCount+'</span>'+
						'<span><i class="font13 icon-smile"></i>'+item.articleCoolScore+'</span>'+	
						'<span><i class="font13 icon-frown"></i>'+item.articleNotCoolScore+'</span>'+		
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
			var platform=$('.platormHeading').attr('id');
			if(ui.newPanel.index()== 2)
			{	
				if($('.reviewList').is(':empty'))
				{
					getData(platform,"review", timestamp);					
				}												
				
			}
			else if(ui.newPanel.index()== 3)
			{
				if($('.featureList').is(':empty'))
				{
					getData(platform,"feature", timestamp);
					
				}								
			}
			else if(ui.newPanel.index()== 4)
			{				
				if($('.newsList').is(':empty'))
				{
					getData(platform,"news", timestamp);
					
				}
				
				
			}
			else if(ui.newPanel.index()== 5)
			{				
				if($('.gloonicleList').is(':empty'))
				{
					getData(platform,"gloonicle", timestamp);
					
				}
				
				
			}
			else if(ui.newPanel.index()== 6)
			{				
				if($('.videoList').is(':empty'))
				{
					getData(platform,"video", timestamp);
					
				}
				
				
			}
			else
			{				
				if($('.allList').is(':empty'))
				{
					getData(platform,"all", timestamp);
					
				}
				
				
			}
		}
	});
	
    $('.loadMore').click(function() {
    	var platform=$('.platormHeading').attr('id');    	
    	var category=$(this).parents('div').attr('id');
    	var categoryList=category+"List";
    	var timestampVal = $('div.'+categoryList+' div.recentArticleDiv:last-child').attr('id');    	    	
    	getData(platform, category, timestampVal);
       });
	

});

