
function close()
{
	parent.$.modal.close();
}
function gameAutoComplete()
{
	$('#gameSearchBox').autocomplete({
							source:"/game/games",
							minLength:2,
							select:function(event, ui)
							{
								 $('#selectedGame').hide();
								 $('#gameBoxShot img').attr('src',ui.item.gameBoxShot);
								 $('#gameTitle').html(ui.item.gameTitle);
								 $('#gameGenre').html(ui.item.gameGenre);
								 $('#gameId').val(ui.item.gameId);
								 var platformHtml = "";			
								 $.each(ui.item.gamePlatforms, function(index, platform) 
								 {
								   platformHtml+= '<span class="'+platform.platformShortTitle+' marginLeft5">'+platform.platformTitle+'</span>';
								 });												 
								 platformEl=$(platformHtml);
								 $('#gamePlatforms').html(platformEl);
								 $('#selectedGame').fadeIn('slow');
								 $('#setGame').removeClass('disableOpacity');
								 $('#setGame').removeAttr('disabled');
							}
						}).data("ui-autocomplete")._renderItem=function(ul,item){
							if(item.status==undefined)
							{
								var inner_html = '<div style="background-color:#fff;overflow:hidden;height:90px;padding:5px"><a><div class="floatLeft"><img height="80" src="' + 
								item.gameBoxShot + '"></div><div font15">' + 
								item.gameTitle + '</div><div class="font12 colorGray">' + 
								item.gameGenre + '</div><div class="font10 colorWhite fontWeightBold marginTop5">';
								$.each(item.gamePlatforms, function(index, platform) 
								 {
								   inner_html+= '<span class="'+platform.platformShortTitle+' marginLeft5">'+platform.platformTitle+'</span>';
								 });									
								inner_html+='</div></a></div>';
							}
							 
				        return $( "<li></li>" )
				            .data( "item.autocomplete", item )
				            .append(inner_html)
				            .appendTo( ul );
						}
}

function setGameInfo()
{
	var gameId= $('#gameId').val();
	var gameBoxshotSrc= $('#gameBoxShot img').attr('src');
	parent.$('#gameSelector img').attr('id',gameId);
	parent.$('#gameSelector img').attr('src',gameBoxshotSrc);
	parent.$('#playedOn').attr("href","javascript:;");
	parent.$('#playedOn').attr("title","Select a platform on which you have played this game");
}

$(function(){
	gameAutoComplete();
	$('#setGame').click(function() {
		setGameInfo();
		close();
	});
});
