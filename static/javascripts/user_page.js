/**
 * @author Partho
 */

$(window).load(function() {
		
	  function onFeaturedAfter()
		{
			var title = $(this).data('title');
			var encodedTitle=$(this).data('encodedtitle');
			var username=$(this).data('username');
			$('a#featuredArticleTitle').attr('href','/article/'+username+'/'+encodedTitle);
			$('a#featuredArticleTitle span').text(title);
			$('a#featuredArticleAuthor').attr('href','/'+username);
			$('a#featuredArticleAuthor span').text(username);	        
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
		}
		
		function onNotFeatured2After()
		{
			var title = $(this).data('title');
			var encodedTitle=$(this).data('encodedtitle');
			var username=$(this).data('username');
			$('a#notFeatured2ArticleTitle').attr('href','/article/'+username+'/'+encodedTitle);
			$('a#notFeatured2ArticleTitle span').text(title);
			$('a#notFeatured2ArticleAuthor').attr('href','/'+username);
			$('a#notFeatured2ArticleAuthor span').text(username);	        
		}
		
		function onNotFeatured3After()
		{
			var title = $(this).data('title');
			var encodedTitle=$(this).data('encodedtitle');
			var username=$(this).data('username');
			$('a#notFeatured3ArticleTitle').attr('href','/article/'+username+'/'+encodedTitle);
			$('a#notFeatured3ArticleTitle span').text(title);
			$('a#notFeatured3ArticleAuthor').attr('href','/'+username);
			$('a#notFeatured3ArticleAuthor span').text(username);	        
		}
		
		function onNotFeatured4After()
		{
			var title = $(this).data('title');
			var encodedTitle=$(this).data('encodedtitle');
			var username=$(this).data('username');
			$('a#notFeatured4ArticleTitle').attr('href','/article/'+username+'/'+encodedTitle);
			$('a#notFeatured4ArticleTitle span').text(title);
			$('a#notFeatured4ArticleAuthor').attr('href','/'+username);
			$('a#notFeatured4ArticleAuthor span').text(username);	        
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
	var username=$('#userName span').text();	
	var selectedPanel = $("#tabs div.ui-tabs-panel:visible");
	 
	$('#allTab').click(function() {
				if($('.allList').is(':empty'))
				{
					getData(username,"all", timestamp);					
				}	
				$('#all').removeClass('hiddenDiv');
				$('#review').addClass('hiddenDiv');
				$('#feature').addClass('hiddenDiv');
				$('#news').addClass('hiddenDiv');
				$('#gloonicle').addClass('hiddenDiv');
				$('#video').addClass('hiddenDiv');
		});
	$('#reviewTab').click(function() {
				if($('.reviewList').is(':empty'))
				{
					getData(username,"review", timestamp);					
				}	
				$('#all').addClass('hiddenDiv');
				$('#review').removeClass('hiddenDiv');
				$('#feature').addClass('hiddenDiv');
				$('#news').addClass('hiddenDiv');
				$('#gloonicle').addClass('hiddenDiv');
				$('#video').addClass('hiddenDiv');
		});
	$('#featureTab').click(function() {
		
				if($('.featureList').is(':empty'))
				{
					getData(username,"feature", timestamp);					
				}	
				$('#all').addClass('hiddenDiv');
				$('#review').addClass('hiddenDiv');
				$('#feature').removeClass('hiddenDiv');
				$('#news').addClass('hiddenDiv');
				$('#gloonicle').addClass('hiddenDiv');
				$('#video').addClass('hiddenDiv');
		});
	$('#newsTab').click(function() {
				if($('.newsList').is(':empty'))
				{
					getData(username,"news", timestamp);					
				}	
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
	
			var userFollowers =parseFloat($('#userFollowers').val());
			var userFollowing =parseFloat($('#userFollowing').val());			
			var userAwards =parseFloat($('#userAwards').val());			
			var userPublishedPosts =parseFloat($('#userPublishedPosts').val());
			var userTotalCoolScore = parseFloat($('#userTotalCoolScore').val());
			
			var totalPublishedPosts =parseFloat($('#totalPublishedPosts').val());
			if(totalPublishedPosts == 0)
			{
				totalPublishedPosts=1;
			}			
			var totalAwards =parseFloat($('#totalAwards').val());
			if(totalAwards == 0)
			{
				totalAwards=1;
			}	
			var totalUsers=parseFloat($('#totalUsers').val());
			if(totalUsers == 0)
			{
				totalUsers=1;
			}	
			var networkTotalCoolScore = parseFloat($('#userNetworkTotalCoolScore').val());
			if(networkTotalCoolScore == 0)
			{
				networkTotalCoolScore=1;
			}	
			
		 	var followersInfo=[{label:"Followers", data:userFollowers, color:"#FF4500"},
							{label:"Total", data:totalUsers-userFollowers, color:"#EAEAEA"}];
	
				$.plot($("#followerdonut"), followersInfo,
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
    
    
    			$("#followerdonutData").text(((userFollowers/totalUsers)*100).toFixed(1)+"%");
    
    
    
		    var followingInfo=[{label:"Following", data:userFollowing, color:"#FF4500"},
		        {label:"Total", data:totalUsers-userFollowing, color:"#EAEAEA"}];
		                        
		        $.plot($("#followingdonut"), followingInfo,
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
		        
		        $("#followingdonutData").text(((userFollowing/totalUsers)*100).toFixed(1)+"%");
    
    
			var publishedInfo=[{label:"Published", data:userPublishedPosts, color:"#FF4500"},
			{label:"Total", data:totalPublishedPosts-userPublishedPosts, color:"#EAEAEA"}];
				
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
			    
			    $("#publishdonutData").text(((userPublishedPosts/totalPublishedPosts)*100).toFixed(1)+"%");
			    
			 var awardsInfo=[{label:"Awards", data:userAwards, color:"#FF4500"},
				{label:"Total", data:totalAwards-userAwards, color:"#EAEAEA"}];
				
				$.plot($("#awardsdonut"), awardsInfo,
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
			    
			    $("#awardsdonutData").text(((userAwards/totalAwards)*100).toFixed(1)+"%");
			    
			    var coolInfo=[{label:"Cool", data:userTotalCoolScore, color:"#FF4500"},
				{label:"Total", data:networkTotalCoolScore-userTotalCoolScore, color:"#EAEAEA"}];
				
				$.plot($("#cooldonut"), coolInfo,
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
			    
			    $("#cooldonutData").text(((userTotalCoolScore/networkTotalCoolScore)*100).toFixed(1)+"%");

	
});