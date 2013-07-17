/**
 * @author Partho
 */

function iFrameOn()
{		
	richeditor.document.designMode='On';	
}

function onBold()
{
	richeditor.document.execCommand('bold',false,null);
}

function onUnderline()
{
	richeditor.document.execCommand('underline',false,null);
}
function onItalic()
{
	richeditor.document.execCommand('italic',false,null);
}
function onUlist()
{
	richeditor.document.execCommand('insertUnorderedList',false,null);
}
function onOlist()
{
	richeditor.document.execCommand('insertOrderedList',false,null);
}
function onLink()
{
	var link = prompt("Enter an url");
	if(link!=null)
	{
		richeditor.document.execCommand('createLink',false,link);
	}
	else
	{
		richeditor.document.execCommand('createLink',false,"#");
	}
	
}
function onUnlink()
{
	richeditor.document.execCommand('unlink',false,null);
}
function onIndent()
{
	richeditor.document.execCommand('indent',false,null);
}
function onOutdent()
{
	richeditor.document.execCommand('outdent',false,null);
}
function onCenter()
{
	richeditor.document.execCommand('justifyCenter',false,null);
}
function onLeft()
{
	richeditor.document.execCommand('justifyLeft',false,null);
}
function onRight()
{
	richeditor.document.execCommand('justifyRight',false,null);
}
function onJustify()
{
	richeditor.document.execCommand('justifyFull',false,null);
}
function onInsertImage()
{
	alert(navigator.appName);
	var url="/static/images/max_payne3.jpeg";		
	var flag='<img src="'+url+'" width="'+200+'" height="'+200+'" alt="max payne"/>'
	if(navigator.appName=="Microsoft Internet Explorer")
	{		
		richeditor.focus();
		richeditor.document.execCommand('insertImage',false,url);
		richeditor.focus();
	}
	else{
		richeditor.document.execCommand('insertHTML',false,flag);
	}
	
}
function onUndo()
{
	richeditor.document.execCommand('undo',false,null);
}
function onRedo()
{
	richeditor.document.execCommand('redo',false,null);
}
function onSave()
{	
	var content =window.frames['richeditor'].document.body.innerHTML;	
	$('#editor').val(content);	
	$('#createOrEditUserPost').submit();
}
function onPublish()
{
	
}
function onPreview()
{
	window.open()
}
