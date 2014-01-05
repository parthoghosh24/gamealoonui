/**
 * @author Partho
 */

$(window).load(function() {
		
	  function onFeaturedAfter()
		{
			var title = $(this).data('title');
			var encodedTitle=$(this).data('encodedtitle');
			var username=$(this).data('username');
			var commentCount=$(this).data('commentcount');
			$('a#featuredArticleTitle').attr('href','/article/'+username+'/'+encodedTitle);
			$('a#featuredArticleTitle span').text(title);
			$('a#featuredArticleAuthor').attr('href','/'+username);
			$('a#featuredArticleAuthor span').text(username);	  
			$('#featuredCommentCount').text(commentCount);      
		}		
		
		function onNotFeatured1After()
		{
			var title = $(this).data('title');
			var encodedTitle=$(this).data('encodedtitle');
			var username=$(this).data('username');
			$('a#notFeatured1ArticleTitle').attr('href','/article/'+username+'/'+encodedTitle);
			$('a#notFeatured1ArticleTitle span').text(title);
			$('a#notFeatured1ArticleAuthor').attr('href','/'+username);
			$('a#notFeatured1ArticleAuthor span').text(username);
			$('#notFeatured1CommentCount').text(commentCount);	        
		}
		
		function onNotFeatured2After()
		{
			var title = $(this).data('title');
			var encodedTitle=$(this).data('encodedtitle');
			var username=$(this).data('username');
			var commentCount=$(this).data('commentcount');
			$('a#notFeatured2ArticleTitle').attr('href','/article/'+username+'/'+encodedTitle);
			$('a#notFeatured2ArticleTitle span').text(title);
			$('a#notFeatured2ArticleAuthor').attr('href','/'+username);
			$('a#notFeatured2ArticleAuthor span').text(username);
			$('#notFeatured2CommentCount').text(commentCount);	        
		}
		
		function onNotFeatured3After()
		{
			var title = $(this).data('title');
			var encodedTitle=$(this).data('encodedtitle');
			var username=$(this).data('username');
			var commentCount=$(this).data('commentcount');
			$('a#notFeatured3ArticleTitle').attr('href','/article/'+username+'/'+encodedTitle);
			$('a#notFeatured3ArticleTitle span').text(title);
			$('a#notFeatured3ArticleAuthor').attr('href','/'+username);
			$('a#notFeatured3ArticleAuthor span').text(username);
			$('#notFeatured3CommentCount').text(commentCount);	        
		}
		
		function onNotFeatured4After()
		{
			var title = $(this).data('title');
			var encodedTitle=$(this).data('encodedtitle');
			var username=$(this).data('username');
			var commentCount=$(this).data('commentcount');
			$('a#notFeatured4ArticleTitle').attr('href','/article/'+username+'/'+encodedTitle);
			$('a#notFeatured4ArticleTitle span').text(title);
			$('a#notFeatured4ArticleAuthor').attr('href','/'+username);
			$('a#notFeatured4ArticleAuthor span').text(username);
			$('#notFeatured4CommentCount').text(commentCount);	        
		}
		
		
		
		$("#cFeatured").cycle({
			fx : 'scrollUp, scrollDown, scrollLeft, scrollRight',
			randomizeEffects : true,
			speed : 400,
			timeout : 5000,			
			delay : 10,
			pager:'#featuredCarouselNav',
			after: onFeaturedAfter,
			pagerAnchorBuilder:function(idx, slide) { 
        		// return selector string for existing anchor 
        			return '#featuredCarouselNav span:eq(' + idx + ') a'; 
    }
		});	
		
		$("#cNotFeatured1").cycle({
			fx : 'scrollUp, scrollDown, scrollLeft, scrollRight',
			randomizeEffects : true,
			speed : 400,
			timeout : 5000,
			delay : 100,
			pager:'#notFeatured1CarouselNav',
			after: onNotFeatured1After,
			pagerAnchorBuilder:function(idx, slide) { 
        		// return selector string for existing anchor              		           		   	        		   
        			return '#notFeatured1CarouselNav span:eq(' + idx + ') a'; 
    }
		});	
		
		$("#cNotFeatured2").cycle({
			fx : 'scrollUp, scrollDown, scrollLeft, scrollRight',
			randomizeEffects : true,
			speed : 400,
			timeout : 5000,
			delay : 1000,
			pager:'#notFeatured2CarouselNav',
			after: onNotFeatured2After,
			pagerAnchorBuilder:function(idx, slide) { 
        		// return selector string for existing anchor 
        			return '#notFeatured2CarouselNav span:eq(' + idx + ') a'; 
    }
		});	
		
		$("#cNotFeatured3").cycle({
			fx : 'scrollUp, scrollDown, scrollLeft, scrollRight',
			randomizeEffects : true,
			speed : 400,
			timeout : 5000,
			delay : 1500,
			pager:'#notFeatured3CarouselNav',
			after: onNotFeatured3After,
			pagerAnchorBuilder:function(idx, slide) { 
        		// return selector string for existing anchor 
        			return '#notFeatured3CarouselNav span:eq(' + idx + ') a'; 
    }
		});	
		
		$("#cNotFeatured4").cycle({
			fx : 'scrollUp, scrollDown, scrollLeft, scrollRight',
			randomizeEffects : true,
			speed : 400,
			timeout : 5000,
			delay : 2000,
			pager:'#notFeatured4CarouselNav',
			after: onNotFeatured4After,
			pagerAnchorBuilder:function(idx, slide) { 
        		// return selector string for existing anchor 
        			return '#notFeatured4CarouselNav span:eq(' + idx + ') a'; 
    }
		});	
		
	});
	
 function onArticleClick()
 {
 	var timestamp=new Date().getTime();
	var username=$('#userPostAndCreatorInnerCircle img').attr('title');		
	 
	$('#allTab').click(function() {
				if($('.allList').is(':empty'))
				{
					getData(username,"all", timestamp);					
				}	
				$(this).addClass('disableOpacity');
				$('#newsTab').removeClass('disableOpacity');
				$('#videoTab').removeClass('disableOpacity');
				$('#gloonicleTab').removeClass('disableOpacity');
				$('#reviewTab').removeClass('disableOpacity');
				
				$('#all').removeClass('hiddenDiv');				
				$('#review').addClass('hiddenDiv');
				$('#feature').addClass('hiddenDiv');
				$('#news').addClass('hiddenDiv');
				$('#gloonicle').addClass('hiddenDiv');
				$('#video').addClass('hiddenDiv');
		});
	$('#reviewTab').click(function() {				
				console.log($('.reviewList').is(':empty'));
				if($('.reviewList').is(':empty'))
				{
					console.log("Getting review");
					getData(username,"review", timestamp);					
				}	
				$(this).addClass('disableOpacity');
				$('#newsTab').removeClass('disableOpacity');
				$('#videoTab').removeClass('disableOpacity');
				$('#gloonicleTab').removeClass('disableOpacity');
				$('#allTab').removeClass('disableOpacity');
				
				$('#all').addClass('hiddenDiv');
				$('#review').removeClass('hiddenDiv');
				$('#feature').addClass('hiddenDiv');
				$('#news').addClass('hiddenDiv');
				$('#gloonicle').addClass('hiddenDiv');
				$('#video').addClass('hiddenDiv');
		});	
	$('#newsTab').click(function() {
				if($('.newsList').is(':empty'))
				{
					getData(username,"news", timestamp);					
				}	
				$(this).addClass('disableOpacity');
				$('#reviewTab').removeClass('disableOpacity');
				$('#videoTab').removeClass('disableOpacity');
				$('#gloonicleTab').removeClass('disableOpacity');
				$('#allTab').removeClass('disableOpacity');
				
				$('#all').addClass('hiddenDiv');
				$('#review').addClass('hiddenDiv');
				$('#feature').addClass('hiddenDiv');
				$('#news').removeClass('hiddenDiv');
				$('#gloonicle').addClass('hiddenDiv');
				$('#video').addClass('hiddenDiv');
		
		});
	$('#gloonicleTab').click(function() {
				if($('.gloonicleList').is(':empty'))
				{
					getData(username,"gloonicle", timestamp);					
				}	
				$(this).addClass('disableOpacity');
				$('#reviewTab').removeClass('disableOpacity');
				$('#videoTab').removeClass('disableOpacity');
				$('#newsTab').removeClass('disableOpacity');
				$('#allTab').removeClass('disableOpacity');
				
				$('#all').addClass('hiddenDiv');
				$('#review').addClass('hiddenDiv');
				$('#feature').addClass('hiddenDiv');
				$('#news').addClass('hiddenDiv');
				$('#gloonicle').removeClass('hiddenDiv');
				$('#video').addClass('hiddenDiv');
		
		});						
	$('#videoTab').click(function() {
				if($('.videoList').is(':empty'))
				{
					getData(username,"video", timestamp);					
				}	
				$(this).addClass('disableOpacity');
				$('#reviewTab').removeClass('disableOpacity');
				$('#gloonicleTab').removeClass('disableOpacity');
				$('#newsTab').removeClass('disableOpacity');
				$('#allTab').removeClass('disableOpacity');				
				
				$('#all').addClass('hiddenDiv');
				$('#review').addClass('hiddenDiv');
				$('#feature').addClass('hiddenDiv');
				$('#news').addClass('hiddenDiv');
				$('#gloonicle').addClass('hiddenDiv');
				$('#video').removeClass('hiddenDiv');
		
		});	
 } 
 
 function getData(username, category, timestampVal)
    {    	    	    	
    	$.get('/articles/'+username+'/'+category+'/2',{"timestamp":timestampVal},function(data){
    		if(data.length>0)
    		{
    			$.each(data, function(index, item) {
    				var categoryIconMap ={};
    				categoryIconMap["news"]=["icon-signal-2","News- user shared news"];
    				categoryIconMap["review"]=["icon-thumbs-up-1","Review- user generated crisp and micro reviews"];    				
    				categoryIconMap["gloonicle"]=["icon-user","Gloonicle- user video game blogs"];
    				categoryIconMap["video"]=["icon-play-3","Video- user created and shared videos"];
    				
    				var articleHtml="";    				
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
    	
 function  applyPauseResumeToCarousel()
 {
 	//featured
 	$('#featuredBottomTab span span a.playPause').click(function() { 		
		  if($(this).children('i').hasClass('icon-pause-3'))
		  {
		  	$("#cFeatured").cycle('pause');
		  	$(this).children('i').removeClass('icon-pause-3');
		  	$(this).children('i').addClass('icon-play-2');
		  }
		  else
		  {
		  	
		  	$("#cFeatured").cycle('resume');
		  	$(this).children('i').removeClass('icon-play-2');
		  	$(this).children('i').addClass('icon-pause-3');
		  }
		});
	
	//not featured 1	
	$('#notFeatured1BottomTab span span a.playPause').click(function() {
		  if($(this).children('i').hasClass('icon-pause-3'))
		  {
		  	$("#cNotFeatured1").cycle('pause');
		  	$(this).children('i').removeClass('icon-pause-3');
		  	$(this).children('i').addClass('icon-play-2');
		  }
		  else
		  {
		  	
		  	$("#cNotFeatured1").cycle('resume');
		  	$(this).children('i').removeClass('icon-play-2');
		  	$(this).children('i').addClass('icon-pause-3');
		  }
		});
		
	//not featured 2	
	$('#notFeatured2BottomTab span span a.playPause').click(function() {
		  if($(this).children('i').hasClass('icon-pause-3'))
		  {
		  	$("#cNotFeatured2").cycle('pause');
		  	$(this).children('i').removeClass('icon-pause-3');
		  	$(this).children('i').addClass('icon-play-2');
		  }
		  else
		  {
		  	
		  	$("#cNotFeatured2").cycle('resume');
		  	$(this).children('i').removeClass('icon-play-2');
		  	$(this).children('i').addClass('icon-pause-3');
		  }
		});
		
	//not featured 3	
	$('#notFeatured3BottomTab span span a.playPause').click(function() {
		  if($(this).children('i').hasClass('icon-pause-3'))
		  {
		  	$("#cNotFeatured3").cycle('pause');
		  	$(this).children('i').removeClass('icon-pause-3');
		  	$(this).children('i').addClass('icon-play-2');
		  }
		  else
		  {
		  	
		  	$("#cNotFeatured3").cycle('resume');
		  	$(this).children('i').removeClass('icon-play-2');
		  	$(this).children('i').addClass('icon-pause-3');
		  }
		});
		
	//not featured 4	
	$('#notFeatured4BottomTab span span a.playPause').click(function() {
		  if($(this).children('i').hasClass('icon-pause-3'))
		  {
		  	$("#cNotFeatured4").cycle('pause');
		  	$(this).children('i').removeClass('icon-pause-3');
		  	$(this).children('i').addClass('icon-play-2');
		  } 
		  else
		  {
		  	
		  	$("#cNotFeatured4").cycle('resume');
		  	$(this).children('i').removeClass('icon-play-2');
		  	$(this).children('i').addClass('icon-pause-3');
		  }
		});				
 } 
 	
$(function(){
	
			applyPauseResumeToCarousel();
			onArticleClick();
			
    
			$("#tabs-min").tabs();
	
	$(document).on({
	    mouseenter: function () {
	        $(this).children('.postTop').slideDown("slow");
	    },
	    mouseleave: function () {
	        $(this).children('.postTop').slideUp(150);
	    }
	},".articleContentPreview");
	
	$(document).ajaxStart(function() {
	  $('#socialInteraction').addClass('disableOpacity');
	  $('#socialInteraction').prop("disabled",true);
	});
	$(document).ajaxStop(function() {
	  $('#socialInteraction').removeClass('disableOpacity');
	  $('#socialInteraction').prop("disabled",false);
	});
	
    $('.loadMore').click(function() {
    	var username=$('#userName span').text();	    	
    	var category=$(this).parents('div').attr('id');
    	var categoryList=category+"List";
    	var timestampVal = $('div.'+categoryList+' div.recentArticleDiv:last-child').attr('id');    	    	
    	getData(username, category, timestampVal);
       });
	
	//Follow Unfollow
			 $('#socialInteraction').click(function() {
			 	   if("Guest"==$("div#userdetailsbox span").text())
		 		   {
		 				openLoginModal();
		 		   }
		 		   else
		 		   {
			 		   	if($('#socialInteraction').hasClass('follow'))
				 	   	{
				 	   	  $.post('/user/followOrUnfollow',{"buddyUsername":$('#userName span').text(),"type":0},function(data){
				 	   	  	if(data.status == "success")
				 	   	  	{
				 	   	  		$('#socialInteraction').removeClass('follow');
				 	   	  		$('#socialInteraction').addClass('unfollow');   
				 	   	  		$('#socialInteraction').text('- Unfollow');			 	   	  		
				 	   	  	}
				 	   	  	
				 	   	  },'json');
				 	   	  
				 	   	  
				 	   }
				 	   if($('#socialInteraction').hasClass('unfollow'))
				 	   {			 	   	
				 	   	$.post('/user/followOrUnfollow',{"buddyUsername":$('#userName span').text(),"type":1},function(data){
				 	   		if(data.status == "success")
				 	   	  	{
				 	   	  		$('#socialInteraction').removeClass('unfollow');
				 	   	  		$('#socialInteraction').addClass('follow');
				 	   	  		$('#socialInteraction').text('+ Follow');			 	   	  		
				 	   	  	}
				 	   	  	   
				 	   	  },'json');
				 	   	  	
				 	   }
		 		   }
			 	   			 	   
				 });
				 
	//Block Unblock			 
			$('#socialInteraction').click(function() {
			 	   if($(this).hasClass('block'))
			 	   {
			 	   	  $(this).removeClass('block');
			 	   	  $(this).addClass('unblock');   
			 	   	  $(this).text('- Unblock');
			 	   	  
			 	   }
			 	   if($(this).hasClass('unblock'))
			 	   {
			 	   	  $(this).removeClass('unblock');
			 	   	  $(this).addClass('block');
			 	   	  $(this).text('+ Block');   	
			 	   }			 	   
				 });	 	  
				 
	var mode = 1;
	$('#toggleWindow').click(function() {
		
		if(mode ==1)
		{			
			
			$('#userDetailsBox').animate({			
			width:"940"}, 500);
			
			$('#toggleWindow').animate({
			left:"+=630"}, 500);
			
			mode=2;			
			$('#toggleWindow span').removeClass('icon-right-open-1');
			$('#toggleWindow span').addClass('icon-left-open-1');
		}
		else
		{			
			
			$('#userDetailsBox').animate({			
			width:"310"}, 500);
			
			$('#toggleWindow').animate({
			left:"-=630"}, 500);
			
			mode=1;
			$('#toggleWindow span').removeClass('icon-left-open-1');
			$('#toggleWindow span').addClass('icon-right-open-1');
		}
		
		
	});			

	
});