/**
 * @author Partho
 */

$(window).load(function() {
		
	  function onAfter()
		{
			var title = $(this).data('title');
			var encodedTitle=$(this).data('encodedtitle');			
			var username=$(this).data('username');			    
			var category=$(this).data('category');
			$('a#articleTitle').attr('href','/article/'+username+'/'+encodedTitle);
			$('a#articleTitle p').text(title);
			if($('.postCategory').hasClass('review'))
			{
				$('.postCategory').removeClass('review')
			}
			else if($('.postCategory').hasClass('video'))
			{
				$('.postCategory').removeClass('video')
			}
			else if($('.postCategory').hasClass('gloonicle'))
			{
				$('.postCategory').removeClass('gloonicle')
			}
			else if($('.postCategory').hasClass('news'))
			{
				$('.postCategory').removeClass('news')
			}
			
			$('.postCategory').addClass(category);
		}		
				
		$("#cPosts").cycle({
			fx : 'scrollLeft',						
			delay : -2000,
			pager:'#carouselNav',
			after: onAfter,
			pagerAnchorBuilder:function(idx, slide) { 
        		// return selector string for existing anchor 
        			return '#carouselNav span:eq(' + idx + ') a'; 
    		}
		});	
		
});

  
 function  applyPauseResumeToCarousel()
 {
 	
 	$('a.playPause').click(function() { 		
		  if($(this).children('i').hasClass('icon-pause-3'))
		  {
		  	$("#cPosts").cycle('pause');
		  	$(this).children('i').removeClass('icon-pause-3');
		  	$(this).children('i').addClass('icon-play-2');
		  }
		  else
		  {
		  	
		  	$("#cPosts").cycle('resume');
		  	$(this).children('i').removeClass('icon-play-2');
		  	$(this).children('i').addClass('icon-pause-3');
		  }
		});	
 } 
	
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
    	var userId=$('#user').data('userid');
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
											'<span class="floatRight"><i class="icon-fire-1"></i>'+item.articleHotnessLevel+'</span>'+
										'</div>'+
										'<p class="postEditButton hiddenDiv" style="width: 620px;">'+
											'<a id="'+item.articleId+'" href="/post/'+userId+'/edit/'+item.articleId+'"><i class="icon-edit colorWhite textShadowOrange font40"></i></a>'+
										'</p>'+
										'<div class="postBottom">'+
											'<div class="outerBox postListOuterBoxRing floatRight postListOuterBoxRingMarginRight">'+
												'<div class="innerBox unfollowRing  postListInnerRing">'+
													'<a href="'+item.articleAuthor+'">'+
														'<img src="'+item.articleAuthorAvatar+'" alt="'+item.articleAuthor+'" title="'+item.articleAuthor+'" width="40" height="40">'+
													'</a>'+
												'</div>'+
											'</div>'+
											'<div class="outerBox postListOuterBoxRing postListOuterBoxRingMarginLeft">'+
												'<div class="innerBox unfollowRing  postListInnerRing">'+
													'<span class="postListCategoryDim '+categoryIconMap[item.articleCategory][0]+' '+item.articleCategory+' colorWhite" title="'+categoryIconMap[item.articleCategory][1]+'"></span>'+													
												'</div>'+
											'</div>'+
											'<a href="/article/'+item.articleAuthor+'/'+item.articleEncodedUrlTitle+'">'+
												'<p class="applyMontserratBold colorWhite font19 postTitle">'+item.articleTitle+'<span class="font11 applyJura marginLeft5">-'+item.articleTimeSpentFromPublish+'</span></p>'+
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
											'<span class="floatRight"><i class="icon-fire-1"></i>'+item.articleHotnessLevel+'</span>'+
										'</div>'+
										'<p class="postEditButton hiddenDiv" style="width: 300px;">'+
											'<a id="'+item.articleId+'" href="/post/'+userId+'/edit/'+item.articleId+'"><i class="icon-edit colorWhite textShadowOrange font40"></i></a>'+
										'</p>'+
										'<div class="postBottom">'+
											'<div class="outerBox postListOuterBoxRing floatRight postListOuterBoxRingMarginRight">'+
												'<div class="innerBox unfollowRing  postListInnerRing">'+
													'<a href="'+item.articleAuthor+'">'+
														'<img src="'+item.articleAuthorAvatar+'" alt="'+item.articleAuthor+'" title="'+item.articleAuthor+'" width="40" height="40">'+
													'</a>'+
												'</div>'+
											'</div>'+
											'<div class="outerBox postListOuterBoxRing postListOuterBoxRingMarginLeft">'+
												'<div class="innerBox unfollowRing  postListInnerRing">'+
													'<span class="postListCategoryDim '+categoryIconMap[item.articleCategory][0]+' '+item.articleCategory+' colorWhite" title="'+categoryIconMap[item.articleCategory][1]+'"></span>'+													
												'</div>'+
											'</div>'+
											'<a href="/article/'+item.articleAuthor+'/'+item.articleEncodedUrlTitle+'">'+
												'<p class="applyMontserratBold colorWhite font14 postTitle">'+item.articleTitle+'<span class="font11 applyJura marginLeft5">-'+item.articleTimeSpentFromPublish+'</span></p>'+
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
											'<span class="floatRight"><i class="icon-fire-1"></i>'+item.articleHotnessLevel+'</span>'+
										'</div>'+
										'<p class="postEditButton hiddenDiv" style="width: 300px;">'+
											'<a id="'+item.articleId+'" href="/post/'+userId+'/edit/'+item.articleId+'"><i class="icon-edit colorWhite textShadowOrange font40"></i></a>'+
										'</p>'+
										'<div class="postBottom">'+
											'<div class="outerBox postListOuterBoxRing floatRight postListOuterBoxRingMarginRight">'+
												'<div class="innerBox unfollowRing  postListInnerRing">'+
													'<a href="'+item.articleAuthor+'">'+
														'<img src="'+item.articleAuthorAvatar+'" alt="'+item.articleAuthor+'" title="'+item.articleAuthor+'" width="40" height="40">'+
													'</a>'+
												'</div>'+
											'</div>'+
											'<div class="outerBox postListOuterBoxRing postListOuterBoxRingMarginLeft">'+
												'<div class="innerBox unfollowRing  postListInnerRing">'+
													'<span class="postListCategoryDim '+categoryIconMap[item.articleCategory][0]+' '+item.articleCategory+' colorWhite" title="'+categoryIconMap[item.articleCategory][1]+'"></span>'+													
												'</div>'+
											'</div>'+
											'<a href="/article/'+item.articleAuthor+'/'+item.articleEncodedUrlTitle+'">'+
												'<p class="applyMontserratBold colorWhite font14 postTitle">'+item.articleTitle+'<span class="font11 applyJura marginLeft5">-'+item.articleTimeSpentFromPublish+'</span></p>'+
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
 
 function getDrafts()
    {    	    	    	
    	var userId=$('#user').data('userid');
    	console.log("Drafts userId: "+userId);
    	$.get('/user/drafts/'+userId,function(data){
    		console.log("here");
    		if(data.length>0)
    		{
    			$.each(data, function(index, item) {
    				var categoryIconMap ={};
    				categoryIconMap["news"]=["icon-signal-2","News- user shared news"];
    				categoryIconMap["review"]=["icon-thumbs-up-1","Review- user generated crisp and micro reviews"];    				
    				categoryIconMap["gloonicle"]=["icon-user","Gloonicle- user video game blogs"];
    				categoryIconMap["video"]=["icon-play-3","Video- user created and shared videos"];
    				
    				var articleHtml='<div class="recentArticleDiv smallPostDiv floatLeft marginLeft20">'+								
									'<div class="articleContentPreview" style="background-image: url('+item.articleFeaturedImage+');background-size: 300px 240px;">'+										
										'<p class="postEditButton hiddenDiv" style="width: 300px;">'+
											'<a id="'+item.articleId+'" href="/post/'+userId+'/edit/'+item.articleId+'"><i class="icon-edit colorWhite textShadowOrange font40"></i></a>'+
										'</p>'+
										'<div class="postBottom">'+
											'<div class="outerBox postListOuterBoxRing floatRight postListOuterBoxRingMarginRight">'+
												'<div class="innerBox unfollowRing  postListInnerRing">'+
													'<a href="'+item.articleAuthor+'">'+
														'<img src="'+item.articleAuthorAvatar+'" alt="'+item.articleAuthor+'" title="'+item.articleAuthor+'" width="40" height="40">'+
													'</a>'+
												'</div>'+
											'</div>'+
											'<div class="outerBox postListOuterBoxRing postListOuterBoxRingMarginLeft">'+
												'<div class="innerBox unfollowRing  postListInnerRing">'+
													'<span class="postListCategoryDim '+categoryIconMap[item.articleCategory][0]+' '+item.articleCategory+' colorWhite" title="'+categoryIconMap[item.articleCategory][1]+'"></span>'+													
												'</div>'+
											'</div>'+
											'<a href="/post/'+userId+'/edit/'+item.articleId+'">'+
												'<p class="applyMontserratBold colorWhite font14 postTitle">'+item.articleTitle+'</p>'+
											'</a>'+
										'</div>'+
									'</div>'+																
								'</div>'
    				   	
    				   
    				   
    				   	
						
					var articleElement = $(articleHtml);	
					articleElement.hide();					
					var articles =$(".draftList");  
				    articles.append(articleElement);
				    articleElement.fadeIn();
					
				});				
				$("#drafts div.noData").addClass('hiddenDiv');
    		}
    		
    	},'json');  
    }
       	
 function getSocialData(username)
 {
 	$.get('/user/social/'+username,function(data){
 		if(data.status == "success")
 		{
 			var followedByHtml="";
 			$.each(data.userFollowedBy, function(index, user) {
			   followedByHtml= '<div id="'+user.buddyUsername+'" class="floatLeft overflowHidden innerBox followRing otherGridDim" style="margin-left: 60px; margin-bottom: 50px;">'+		    			 	    
					'<a href ="/'+user.buddyUsername+'"><img src="'+user.buddyUserAvatar+'" alt="'+user.buddyUsername+'" title="'+user.buddyUsername+'"width="100" height="100"/></a>'+
				'</div>'
				
				var followedByEl=$(followedByHtml);
				followedByEl.hide();
				$('#followersList').append(followedByEl);
				followedByEl.fadeIn();
			});			
			if(data.userFollowedBy.length>0)
			{
				$("#followers div.noData").addClass('hiddenDiv');
			}
			
			
			
			
			var followingHtml="";
			$.each(data.userFollowingOthers, function(index, user) {
			   followingHtml= '<div id="'+user.buddyUsername+'" class="floatLeft overflowHidden innerBox followRing otherGridDim" style="margin-left: 60px; margin-bottom: 50px;">'+		    			 	    
					'<a href ="/'+user.buddyUsername+'"><img src="'+user.buddyUserAvatar+'" alt="'+user.buddyUsername+'" title="'+user.buddyUsername+'"width="100" height="100"/></a>'+
				'</div>'
				
				var followingEl=$(followingHtml);
				followingEl.hide();
				$('#followingList').append(followingEl);
				followingEl.fadeIn();
			});
			if(data.userFollowingOthers.length>0)
			{
				$("#following div.noData").addClass('hiddenDiv');
			}
			
			
			var interestedGamesHtml="";
			$.each(data.userInterestedGames, function(index, game) {								
				interestedGamesHtml= '<div id="'+game.interestedGameId+'" class="floatLeft overflowHidden innerBox followRing otherGridDim" style="margin-left: 60px; margin-bottom: 50px;">'+		    			 	    
					'<a href ="/game/'+game.interestedGameURL+'"><img src="'+game.interestedGameBoxShot+'" alt="'+game.interestedGameTitle+'" title="'+game.interestedGameTitle+'"width="100" height="100"/></a>'+
				'</div>'
				
				var interestedGamesEl=$(interestedGamesHtml);
				interestedGamesEl.hide();
				$('#interestedGamesList').append(interestedGamesEl);
				interestedGamesEl.fadeIn();
			});
			if(data.userInterestedGames.length>0)
			{
				$("#games div.noData").addClass('hiddenDiv');
			}
			
 		}
 		else
 		{
 			alert("Something wrong happened");
 		}
 	},'json');
 } 
 
 function getUserStats(username)
 {
 	$.get('/user/stats/'+username, function(data)
 	{
 		if(data.status == "success")
 		{
 			var userStatsHtml="";
 			$.each(data.userAchievements, function(index, award) { 			
			   userStatsHtml= '<div class="floatLeft overflowHidden ">'+		    			 	    
					'<img src="http://192.168.0.103:9000/assets/images/default/new_gloonie_achievement.png" title="'+award.title+'-'+award.description+'" alt="'+award.title+'" height="200"/>'+
				'</div>'				
				var userStatsEl=$(userStatsHtml);
				userStatsEl.hide();
				$('#userAwards').append(userStatsEl);
				userStatsEl.fadeIn();
			});	
			if(data.userAchievements.length>0)
			{
				$("#awards div.noData").addClass('hiddenDiv');
			}
			
 		}
 		else
 		{
 			alert("Something wrong happened");
 		}

 	},'json');
 }
 	
$(function(){
	
			applyPauseResumeToCarousel();
			onArticleClick();
			
    
			$("#tabs-min").tabs({
				beforeActivate: function(event, ui){						 
				var timestamp=new Date().getTime();
				var username=$('#userPostAndCreatorInnerCircle img').attr('title');	
				if(ui.newPanel.index()== 2)
				{	
					if($('.allList').is(':empty'))
					{					
						getData(username,"all", timestamp);					
					}												
					
				}			
				else if(ui.newPanel.index()== 3)
				{				
					
					if($('.draftList').is(':empty'))
					{
						console.log("Drafts called");
						getDrafts();											
					}					
				}
				else if(ui.newPanel.index()== 4)
				{				
					if($('#followersList').is(':empty') && $('#followersList').is(':empty') && $('#interestedGamesList').is(':empty'))
					{					
						console.log("Social data");
						getSocialData(username);					
					}
				}				
				else if(ui.newPanel.index()== 5)
				{
					if($('#userAwards').is(':empty'))				
					{
						getUserStats(username);
					}
				}
		}
			});
	

	
	var blockSocial = false;
	$(document).ajaxStart(function() {
	  $('#userPostAndCreatorInnerCircle').addClass('disableOpacity');	  
	  blockSocial = true;
	  if(loadMoreClicked)
	  {
	  	$('.loadMore').addClass('hiddenDiv');
	    $('.contentLoading').removeClass('hiddenDiv');	  
	    loadingContent = true;
	  }
	});
	$(document).ajaxStop(function() {
	  $('#userPostAndCreatorInnerCircle').removeClass('disableOpacity');	  
	  blockSocial = false;
	  if(loadMoreClicked)
	  {
	  	$('.loadMore').removeClass('hiddenDiv');
	    $('.contentLoading').addClass('hiddenDiv');	  	   	 
	    loadingContent = false;
	  	loadMoreClicked=false;
	  }
	});
	
	var loadingContent=false;
	var loadMoreClicked = false;
    $('.loadMore').click(function() {
    	loadMoreClicked = true;
    	if(!loadingContent)
    	{
    		var username=$('#userPostAndCreatorInnerCircle img').attr('title').trim();	    	
    		var category=$(this).parents('div').attr('id');
    		var categoryList=category+"List";
    		var timestampVal = $('div.'+categoryList+' div.recentArticleDiv:last-child').attr('id');    	    	
    		getData(username, category, timestampVal);
    	}
    	
       });
    
  
	
	//Follow Unfollow
			 $('#userPostAndCreatorInnerCircle a').click(function() {
			 	   var loggedInStatus=$('.loginButton').data('loggedin');		
			 	   if("False"==loggedInStatus)
		 		   {
		 				openLoginModal();
		 		   }
		 		   else
		 		   {
		 		   		if(!blockSocial)
		 		   		{
		 		   			if($('#userPostAndCreatorInnerCircle').hasClass('unfollowRing'))
					 	   	{
					 	   		console.log($('a#user').text().trim());
					 	   		console.log($('#gamerName').text().trim());
					 	   		if($('a#user').text().trim() === $('#gamerName').text().trim())
					 	   		{
					 	   			alert("Really?? You wanna follow yourself? Not a great Idea :(");
					 	   			return false;
					 	   		}
					 	   		else
					 	   		{
					 	   			
										$.post('/user/followOrUnfollow',{"buddyUsername":$('#gamerName').text().trim(),"type":0},function(data){
																				  if(data.status == "success")
																				  {
																					  $('#userPostAndCreatorInnerCircle').removeClass('unfollowRing');
																					  $('#userPostAndCreatorInnerCircle').addClass('followRing');   
																																																	   }
																																					 },'json');
										
					 	   		}
					 	   }
					 	   
					 	   if($('#userPostAndCreatorInnerCircle').hasClass('followRing'))
					 	   {			 	   	
					 	   	$.post('/user/followOrUnfollow',{"buddyUsername":$('#gamerName').text().trim(),"type":1},function(data){
					 	   		if(data.status == "success")
					 	   	  	{
					 	   	  		$('#userPostAndCreatorInnerCircle').removeClass('followRing');
					 	   	  		$('#userPostAndCreatorInnerCircle').addClass('unfollowRing');
					 	   	  				 	   	  	
					 	   	  	}
					 	   	  	   
					 	   	  },'json');
					 	   	  	
					 	   }
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
				 		
	
	
	var loggedInStatus=$('.loginButton').data('loggedin');
	var loggedInUser=$('a#user').text().trim();
	var pageOwner= $('span#gamerName').text().trim();
	
	$(document).on({
	    mouseenter: function () {
	        $(this).children('.postTop').slideDown("slow");
	        if("False"!= loggedInStatus && pageOwner == loggedInUser)
	        {
	        	$(this).children('.postEditButton').removeClass('hiddenDiv');
	        }
	        
	    },
	    mouseleave: function () {
	        $(this).children('.postTop').slideUp(150);
	        if("False"!= loggedInStatus && pageOwner == loggedInUser)
	        {
	        	$(this).children('.postEditButton').addClass('hiddenDiv');
	        }	
	    }
	},".articleContentPreview");
	
	$(document).on({
			mouseenter: function () {
				$(this).children('.carouselTopTabDim').slideDown("slow");
				
			},
			mouseleave: function () {
				$(this).children('.carouselTopTabDim').slideUp(150);
				
			}
		},".carouselContainer");
	
	$(document).on({
			mouseenter: function () {
				$(this).children('a').children('p').css("opacity","0.9");
			},
			mouseleave: function () {
				$(this).children('a').children('p').css("opacity","0.4");
			}
		},".activityVeil");

	
});