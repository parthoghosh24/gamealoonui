
	
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
		
		function onReviewAfter()
		{
			var title = $(this).data('title');
			var encodedTitle=$(this).data('encodedtitle');
			var username=$(this).data('username');
			var commentCount=$(this).data('commentcount');
			$('a#rArticleTitle').attr('href','/article/'+username+'/'+encodedTitle);
			$('a#rArticleTitle p').text(title);
			$('a#rArticleAuthor').attr('href','/'+username);
			$('a#rArticleAuthor img').attr('title',username);	   
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
		
		$('#carouselContent').cycle({
			fx : 'fade',
			timeout : 0,	
			pager:'#carouselNav',
			pagerAnchorBuilder:function(idx, slide) { 
        		// return selector string for existing anchor 
        		    console.log('#carouselNav li:eq(' + idx + ')');
        			return '#carouselNav li:eq(' + idx + ')'; 
    }
		});
		
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
		
	//reviews	
	$('#rTopTab span span a.playPause').click(function() {
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

 function getData(platform, category, timestampVal)
    {    	    	    	
    	$.get('/articles/'+platform+'/'+category+'/1',{"timestamp":timestampVal},function(data){
    		if(data.length>0)
    		{
    			$.each(data, function(index, item) {
    				var categoryIconMap ={};
    				categoryIconMap["news"]=["icon-signal-2","News- user shared news"];
    				categoryIconMap["review"]=["icon-thumbs-up-1","Review- user generated crisp and micro reviews"];    				
    				categoryIconMap["gloonicle"]=["icon-user","Gloonicle- user video game blogs"];
    				categoryIconMap["video"]=["icon-play-3","Video- user created and shared videos"];
    				
    				var articleHtml="";
    				console.log(index);
    				   if(index == 1 || index == 6)
    				   {
    				   		articleHtml+='<div class="recentArticleDiv bigPostDiv floatLeft marginLeft20" id="'+item.articleTimestamp+'">'+								
									'<div class="articleContentPreview" style="background-image: url('+item.articleFeaturedImage+');background-size: 620px;">'+
										'<div class="postTop hiddenDiv fontWeightBold font10 colorWhite" style="width: 620px;">'+
											'<span class="floatLeft"><i class="font13 icon-users"></i>'+item.articleCommentCount+'</span>'+
											'<span class="floatRight"><i class="font13 icon-frown"></i>'+item.articleNotCoolScore+'</span>'+
											'<span class="floatRight"><i class="font13 icon-smile"></i>'+item.articleCoolScore+'</span>'+										
											'<span class="floatRight"><i class="icon-fire-1"></i>Cold</span>'+
										'</div>'+
										'<div class="postBottom">'+
											'<div class="outerBox postListOuterBoxRing floatRight postListOuterBoxRingMarginRight">'+
												'<div class="innerBox postListInnerRing">'+
													'<a href="'+item.articleAuthor+'">'+
														'<img src="/static/images/photo.jpg" alt="'+item.articleAuthor+'" title="'+item.articleAuthor+'" width="40" height="40">'+
													'</a>'+
												'</div>'+
											'</div>'+
											'<div class="outerBox postListOuterBoxRing postListOuterBoxRingMarginLeft">'+
												'<div class="innerBox postListInnerRing">'+
													'<span class="postListCategoryDim '+categoryIconMap[item.articleCategory][0]+' '+item.articleCategory+' colorWhite" title="'+categoryIconMap[item.articleCategory][1]+'"></span>'+													
												'</div>'+
											'</div>'+
											'<a href="/article/'+item.articleAuthor+'/'+item.articleEncodedUrlTitle+'">'+
												'<p class="applyMontserratBold colorWhite font19 postTitle">'+item.articleTitle+'</p>'+
											'</a>'+
										'</div>'+
									'</div>'+																
								'</div>'
    				   	
    				   }
    				   else if(index == 3 || index ==4 || index ==8 || index ==9)
    				   {
    				   		articleHtml+='<div class="recentArticleDiv smallPostDiv floatLeft marginLeft20" id="'+item.articleTimestamp+'">'+								
									'<div class="articleContentPreview" style="background-image: url('+item.articleFeaturedImage+');background-size: 300px 240px;">'+
										'<div class="postTop hiddenDiv fontWeightBold font10 colorWhite" style="width: 300px;">'+
											'<span class="floatLeft"><i class="font13 icon-users"></i>'+item.articleCommentCount+'</span>'+
											'<span class="floatRight"><i class="font13 icon-frown"></i>'+item.articleNotCoolScore+'</span>'+
											'<span class="floatRight"><i class="font13 icon-smile"></i>'+item.articleCoolScore+'</span>'+										
											'<span class="floatRight"><i class="icon-fire-1"></i>Cold</span>'+
										'</div>'+
										'<div class="postBottom">'+
											'<div class="outerBox postListOuterBoxRing floatRight postListOuterBoxRingMarginRight">'+
												'<div class="innerBox postListInnerRing">'+
													'<a href="'+item.articleAuthor+'">'+
														'<img src="/static/images/photo.jpg" alt="'+item.articleAuthor+'" title="'+item.articleAuthor+'" width="40" height="40">'+
													'</a>'+
												'</div>'+
											'</div>'+
											'<div class="outerBox postListOuterBoxRing postListOuterBoxRingMarginLeft">'+
												'<div class="innerBox postListInnerRing">'+
													'<span class="postListCategoryDim '+categoryIconMap[item.articleCategory][0]+' '+item.articleCategory+' colorWhite" title="'+categoryIconMap[item.articleCategory][1]+'"></span>'+													
												'</div>'+
											'</div>'+
											'<a href="/article/'+item.articleAuthor+'/'+item.articleEncodedUrlTitle+'">'+
												'<p class="applyMontserratBold colorWhite font14 postTitle">'+item.articleTitle+'</p>'+
											'</a>'+
										'</div>'+
									'</div>'+																
								'</div>'
    				   	
    				   }
    				   else
    				   {
    				   			articleHtml+='<div class="recentArticleDiv smallPostDiv floatLeft" id="'+item.articleTimestamp+'">'+								
									'<div class="articleContentPreview" style="background-image: url('+item.articleFeaturedImage+');background-size: 300px 240px;">'+
										'<div class="postTop hiddenDiv fontWeightBold font10 colorWhite" style="width: 300px;">'+
											'<span class="floatLeft"><i class="font13 icon-users"></i>'+item.articleCommentCount+'</span>'+
											'<span class="floatRight"><i class="font13 icon-frown"></i>'+item.articleNotCoolScore+'</span>'+
											'<span class="floatRight"><i class="font13 icon-smile"></i>'+item.articleCoolScore+'</span>'+										
											'<span class="floatRight"><i class="icon-fire-1"></i>Cold</span>'+
										'</div>'+
										'<div class="postBottom">'+
											'<div class="outerBox postListOuterBoxRing floatRight postListOuterBoxRingMarginRight">'+
												'<div class="innerBox postListInnerRing">'+
													'<a href="'+item.articleAuthor+'">'+
														'<img src="/static/images/photo.jpg" alt="'+item.articleAuthor+'" title="'+item.articleAuthor+'" width="40" height="40">'+
													'</a>'+
												'</div>'+
											'</div>'+
											'<div class="outerBox postListOuterBoxRing postListOuterBoxRingMarginLeft">'+
												'<div class="innerBox postListInnerRing">'+
													'<span class="postListCategoryDim '+categoryIconMap[item.articleCategory][0]+' '+item.articleCategory+' colorWhite" title="'+categoryIconMap[item.articleCategory][1]+'"></span>'+													
												'</div>'+
											'</div>'+
											'<a href="/article/'+item.articleAuthor+'/'+item.articleEncodedUrlTitle+'">'+
												'<p class="applyMontserratBold colorWhite font14 postTitle">'+item.articleTitle+'</p>'+
											'</a>'+
										'</div>'+
									'</div>'+																
								'</div>'								    				   			
    				   }
    				   	
						
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
    
$(function() {			
	
	
	applyPauseResumeToCarousel();

	$("#tabs-min").tabs({		
		beforeActivate: function(event, ui){						 
			var timestamp=new Date().getTime();
			var platform="all";
			if(ui.newPanel.index()== 2)
			{	
				if($('.reviewList').is(':empty'))
				{					
					getData(platform,"review", timestamp);					
				}												
				
			}			
			else if(ui.newPanel.index()== 3)
			{				
				if($('.newsList').is(':empty'))
				{
					getData(platform,"news", timestamp);
					
				}
				
				
			}
			else if(ui.newPanel.index()== 4)
			{				
				if($('.gloonicleList').is(':empty'))
				{
					getData(platform,"gloonicle", timestamp);
					
				}
				
				
			}
			else if(ui.newPanel.index()== 5)
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
	
	$(document).on({
	    mouseenter: function () {
	        $(this).children('.postTop').slideDown("slow");
	    },
	    mouseleave: function () {
	        $(this).children('.postTop').slideUp(150);
	    }
	},".articleContentPreview");
	

});

