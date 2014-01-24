/**
 * @author Partho
 */

 function onArticleClick()
 {
 	var timestamp=new Date().getTime();
	var gameId=$('#userPostAndCreatorInnerCircle a img').attr('id');
	 
	$('#allTab').click(function() {
				if($('.allList').is(':empty'))
				{
					getData(gameId,"all", timestamp);					
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
					getData(gameId,"review", timestamp);					
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
					getData(gameId,"news", timestamp);					
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
					getData(gameId,"gloonicle", timestamp);					
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
					getData(gameId,"video", timestamp);					
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
 
function getData(gameId, category, timestampVal)
    {    	    	    	
    	$.get('/articles/'+gameId+'/'+category+'/3',{"timestamp":timestampVal},function(data){    		
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
     	
$(function(){	
	onArticleClick();
	
	
	
    
    $("#tabs-min").tabs();
    
    //Interested Not-interested
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
		 		   			var gameId= $('#userPostAndCreatorInnerCircle a img').attr('id').trim();
		 		   			if($('#userPostAndCreatorInnerCircle').hasClass('unfollowRing'))
						 	   {
						 	   	  $.post('/user/gameInterestedOrNot',{"gameId":gameId,"type":0},function(data){
						 	   	  	if(data.status == "success")
						 	   	  	{
						 	   	  		$('#userPostAndCreatorInnerCircle').removeClass('unfollowRing');
										$('#userPostAndCreatorInnerCircle').addClass('followRing'); 
						 	   	  	}
						 	   	  	
						 	   	  },'json');
						 	   	  
						 	   	  
						 	   }
						 	   if($('#userPostAndCreatorInnerCircle').hasClass('followRing'))
						 	   {			 	   	
						 	   	$.post('/user/gameInterestedOrNot',{"gameId":gameId,"type":1},function(data){
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
				
			
			var gameScore =parseFloat($('#networkScore').val());
						
			     						   	  
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
			    
			 
		$(document).on({
		    mouseenter: function () {
		        $(this).children('.postTop').slideDown("slow");
		    },
		    mouseleave: function () {
		        $(this).children('.postTop').slideUp(150);
		    }
		},".articleContentPreview");
		
		
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
		    	var gameId=$('#userPostAndCreatorInnerCircle a img').attr('id').trim();	    	
		    	var category=$(this).parents('div').attr('id');
		    	var categoryList=category+"List";
		    	var timestampVal = $('div.'+categoryList+' div.recentArticleDiv:last-child').attr('id');    	    	
		    	getData(gameId, category, timestampVal);
		    }	
       	});
	
});
