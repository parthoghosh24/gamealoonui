/**
 * @author Partho
 */

function generateComment(data)
			 {								 	      
			 	      if(!$.isEmptyObject(data))
			 	      {
			 	      	var commentHtml ="<div id=\""+data.conversationId+"\" class=\"commentData\">"+
												"<input type=\"hidden\" id=\"conversationTimestamp\" name=\"conversationTimestamp\" value=\""+data.conversationTimeStamp+"\" />"+
					 							"<div class=\"commentUserBox\">"+
							 						"<div class=\"commentuserAvatarCircle\">"+
							 							"<a href=\"/"+data.ownerName+"\" target=\"_blank\">"+
							 								"<img src=\""+data.ownerAvatarImage+"\" height=\"25\" alt=\"avatar\">"+
							 							"</a>"+				 							
							 						"</div>"+
							 						"<div class=\"commentUserName\">"+
							 							"<a href=\"/"+data.ownerName+"\" target=\"_blank\">"+
							 								"<span>"+
							 								data.ownerName+
							 								"</span>"+
							 							"</a>"+				 							
							 							"<div class=\"commentVoteControl\">"+
							 								"<div class=\"upArrow\">"+
							 									"<a href=\"javascript:;\" title=\"yay\" class=\"colorGray\">"+
							 										"<i class=\"icon-up-dir\"></i>"+
							 									"</a>"+
							 								"</div>"+
							 								"<div class=\"val\">"+
							 									"0"+
							 								"</div>"+
							 								"<div class=\"downArrow\">"+
							 									"<a href=\"javascript:;\" title=\"nay\" class=\"colorGray\">"+
							 										"<i class=\"icon-down-dir\"></i>"+
							 									"</a>"+
							 								"</div>"+
							 							"</div>"+
							 							"<div class=\"commentFlag\">"+
							 								"<a href=\"javascript:;\" title=\"flag as inappropriate\" class=\"colorGray\">"+
							 									"<i class='icon-flag'></i>"+
							 								"</a>"+
							 							"</div>"+
							 						"</div>"+
							 					"</div>"+
							 					"<span class=\"commentBody applyJura\">"+
							 						"<span class=\"colorGray font12\">"+data.converstationTimeFormatted+"- </span>"+data.message+
							 					"</span>"+  
				                  			"</div>"
				                  			
				          
				          var commentElement = $(commentHtml);
				          commentElement.hide();
				          var comments =$("#commentList");  
				          comments.prepend(commentElement);
				          commentElement.slideDown();
				          var commentCount = parseInt($('div#moreInformation span.icon-users').text());
				          $('div#moreInformation span.icon-users').text(commentCount+1);
			 	      }					
							  
			
			}

function pollForComments()
	
	{ 		
			/*var articleId = $('.articleBody').attr('id');		
			var lastTimeStamp = $('#commentList div:first-child #conversationTimestamp').val();				 
			if(lastTimeStamp != undefined)
			{			
				$.ajax({url:"/comment/get/"+articleId+"/"+lastTimeStamp, success: function(data){			
				generateComment(data);
				$('#noComments').hide();
				
				}, dataType:"json", cache:false,complete:pollForComments, timeout:30000});
			}*/
			
		}
	

var startTime;
var endTime;

function updateCoolState(articleId)
{
	if($('#meh').hasClass('notSelected'))
	{
		
		$.post('/article/coolOrNotCool/',{"type":0,"articleId":articleId},function(data){
			if(data.status == "success")
			{
				var coolScore = parseInt($('div#moreInformation span.icon-smile').text());
				if($('#yeah').hasClass('notSelected'))
				{
					$('#yeah').removeClass('notSelected');
					$('#yeah').addClass('selected');
					$('div#moreInformation span.icon-smile').text(coolScore+1);
				}
				else
				{
					$('#yeah').removeClass('selected');
					$('#yeah').addClass('notSelected');
					$('div#moreInformation span.icon-smile').text(coolScore-1);
				}
			}
		},'json');
	}		
}	

function updateNotCoolState(articleId)
{
	if($('#yeah').hasClass('notSelected'))
	{
		$.post('/article/coolOrNotCool/',{"type":1,"articleId":articleId},function(data){
			if(data.status == "success")
			{
				var notCoolScore = parseInt($('div#moreInformation span.icon-frown').text());
				if($('#meh').hasClass('notSelected'))
				{
					$('#meh').removeClass('notSelected');
					$('#meh').addClass('selected');
					$('div#moreInformation span.icon-frown').text(notCoolScore+1);
				}
				else
				{
					$('#meh').removeClass('selected');
					$('#meh').addClass('notSelected');
					$('div#moreInformation span.icon-frown').text(notCoolScore-1);
				}
			}
		},'json');
	}
	
}
$(function(){
	

	startTime=new Date().getTime();
	$('.notActiveButton').click(function() {
		if("Guest"==$("div#userdetailsbox span").text())
		 {
		 	openLoginModal();
		 }
		});
	$('.activeButton').click(function() {
		 var articleId = $('.articleBody').attr('id');		 		
		 ($(this).attr('id')=="yeah")?updateCoolState(articleId):updateNotCoolState(articleId);
		 
		 
		 
		 
		});
	//pollForComments();
	$('#postContent').click(function() {
		if($('div#userdetailsbox span').text() == "Guest")
		{
			openLoginModal();
		}
		else{
			var message = $('#commentBody').val();
			if(message.length>0)
			{
				var commentJson ={};
				var articleId = $('.articleBody').attr('id');
				var message = $('#commentBody').val();			
				var userName =$('#userdetailsbox span').text()
				var commentScore = 0.0;
				var spamScore = 0.0;
				var lastTimeStamp = $('#commentList div:first-child #conversationTimestamp').val();
				
				commentJson['articleId']=articleId;
				commentJson['message']=message;
				commentJson['userName']=userName;
				commentJson['commentScore']=commentScore;
				commentJson['spamScore']=spamScore;
				
				$.post("/comment/save",commentJson,function(data){				
					
					if(data.status === "success")
					{					
						console.log('success');
						//if(lastTimeStamp == undefined)
						//{
							generateComment(data);
							$('#noComments').hide();
						//}
						//$('#commentBody').val("");
					}
					else
					{
						alert("Something is wrong!");
					}				
				}, 'json');
			}
			else
			{
				alert('Please write some content!');
			}
						
			
			 
		              		
	                  			
	                  			
		}
		
		return false; 
		});
		
		if($('#previewOverlay').length==0)
	    {
	    	/*
			window.onbeforeunload=function()
						{
							endTime=new Date().getTime(); 
							var elapsedTime=endTime-startTime; //in ms
							var articleId = $('.articleBody').attr('id');
							var TWO_MINUTES = 2*60*1000;			
							if(elapsedTime>=TWO_MINUTES)
							{
								elapsedTime = elapsedTime/(60.0*1000.0);
								console.log(elapsedTime);
								 $.ajaxSetup({async: false});
								$.post('/article/updateATS',{"elapsedTime":elapsedTime, "articleId":articleId}, function(data){
									if(data.status=='success')
									{
										console.log('success');
									}
																	 },'json');
								 $.ajaxSetup({async: true});
							}	
						}*/
			
	    }
		
		

		   		var networkScore =parseFloat($('#networkScore').val());
				var userGameScore =parseFloat($('#userScore').val());
								
			
				if(!isNaN(networkScore) && !isNaN(userGameScore))
				{
					var networkScoreInfo=[{label:"Network Score", data:networkScore, color:"#76A7F5"},
								{label:"Total", data:10-networkScore, color:"#EAEAEA"}];
		
						$.plot($("#networkScoreDonut"), networkScoreInfo,
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
		    
		                if(networkScore == 0.0)
		                {
		                	$("#networkScoreDonutData").text("NR");
		                }
		                else
		                {
		                	$("#networkScoreDonutData").text(networkScore.toFixed(1));
		                }
		    			
		    
		    
		    
				    var userGameScoreInfo=[{label:"User Score", data:userGameScore, color:"#FF4500"},
				        {label:"Total", data:10-userGameScore, color:"#EAEAEA"}];
				                        
				        $.plot($("#userScoreDonut"), userGameScoreInfo,
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
				        
				        if(userGameScore ==0.0)
				        {
				        	$("#userScoreDonutData").text("NR");
				        }
				        else
				        {
				        	$("#userScoreDonutData").text(userGameScore.toFixed(1));
				        }
				        
				}
		   
			
		 	
});



