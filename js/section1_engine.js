

function chooseChatPrompt(){
		feedbackTable.style.visibility = "hidden";
		feedbackRadio.className = 'tabInactive';
		promptTable.style.visibility = "visible";
		promptRadio.className = 'tabActive';
		$('#eraseButton1').click();
}

function chooseChatFeedback(){
		promptTable.style.visibility = "hidden";
		promptRadio.className = 'tabInactive';
		feedbackTable.style.visibility = "visible";
		feedbackRadio.className = 'tabActive';
		$('#eraseButton0').click();		
}

function compilePrompt(){

	var bgURL = $('#bgSlice0Preview').text();
	var bgWidth = bgImg.width;
	var bgHeight = bgImg.height;

	var closeURL = $('#closeSlice0Preview').text();
	var closeWidth = closeImg.width;
	var closeHeight = closeImg.height;

	var ctaURL = $('#ctaSlice0Preview').text();
	var ctaWidth = ctaImg.width;
	var ctaHeight = ctaImg.height;

	var promptTemplate_1  = '<div id="ChatMainDiv" style="background-image: url(';
		/*bgURL*/
	var promptTemplate_2  = '); background-attachment: scroll; background-color: transparent; position: fixed; left: 150px; top: 450px; width: ';
		/*bgWidth*/
	var promptTemplate_3  = 'px; height: ';
		/*bgHeight*/
	var promptTemplate_4  = 'px; z-index: 99202; display: block; visibility: visible; background-position: 0px 0px; background-repeat: no-repeat no-repeat;"';
	var promptTemplate_5  = '>\n\n<div id="ChatBackgroundDiv" style="position: absolute; left: 0px; top: 0px; z-index: 9000; display: none;"></div>\n\n';
 	var promptTemplate_6  = '<div id="ChatContentDiv" style="background-color: red; position: absolute; left: 0px; top: 0px; z-index: 9001;"';
 	var promptTemplate_7  = '>\n\n<div id="ChatFlowDiv" style="color: #FFFFFF; font-family: unitweb-medium, arial, sans-serif; font-size: 16px; line-height: 19px; margin: 0px; overflow: hidden; padding: 0px; position: absolute; text-indent: 0px; left: 65px; top: 44px; width: 370px; height: 180px; z-index: 9002; border-width: 0px; text-align: left;letter-spacing: 0px;';
 	var promptTemplate_8  = '">\n\n\n</div>\n\n<div id="ChatStatusDiv" style="display: none;"></div>\n<div style="display: none; height: 26px; left: 51px; position: absolute; top: 324px; width: 339px; z-index: 9005;" id="ChatInputDiv"';
 	var promptTemplate_9  = '>\n<textarea placeholder="Enter your text here..." style="display: none; " id="ChatInputText"></textarea>\n</div>\n<div id="ChatButtonsDiv" style="display: none;"></div>\n\n<div';
 	var promptTemplate_10 = ' style="cursor: pointer; position: absolute; left: 425px; top: 230px; width: ';
 		/*ctaWidth*/
 	var promptTemplate_11 = 'px; height: ';
 		/*ctaHeight*/
 	var promptTemplate_12 = 'px; z-index: 9002; opacity: 1; background-image: url(';
 		/*ctaURL*/
 	var promptTemplate_13 = '); background-attachment: scroll; background-color: transparent; background-position: 0px 0px; background-repeat: no-repeat;" onmouseover="this.style.opaci'
 	var promptTemplate_14 = 'ty = '+'0.8'+'" onmouseout="this.style.opacity = '+'1'+'" onclick="VeAPI.Chat.convertClick('+"'ChatLinkCTA1'"+')"></d';
 	var promptTemplate_15 = 'iv>\n</div>\n\n<div id="WindowBarDiv" style="background-color: #d3d3d3; position: absolute; left: 4px; top: 6px; z-index: 9994; width: 574px;">\n\n<div id="WindowTittleDiv" style="cursor: move;   margin-left: 0px; margin-right: 0px; position: absolute; left: 50px;top: 20px; width: 300px; height: 60px;z-index: 9995;"></div>\n\n<div id="WindowCloseBtn" style="cursor: pointer; margin-left: 0px; margin-right: 0px; position: absolute; left: 515px; top: 35px; width: ';
 		/*closeWidth*/
 	var promptTemplate_16 = 'px; height: ';
 		/*closeHeight*/
 	var promptTemplate_17 = 'px; z-index: 9998; opacity: 1; background-image: url(';
 		/*closeURL*/
 	var promptTemplate_18 = '); background-attachment: scroll; background-color: transparent; background-position: 0px 0px; background-repeat: no-repeat;" onmouseover="this.style.opacity = '+'0.8'+'" onmouseout="this.style.opacity = '+'1'+'"></div>\n\n</div>\n\n</div>';


	document.getElementById('outcomeTemplate').innerHTML = promptTemplate_1 + bgURL + promptTemplate_2 + bgWidth + promptTemplate_3 + bgHeight + promptTemplate_4 + promptTemplate_5 + promptTemplate_6 + promptTemplate_7 + promptTemplate_8 + promptTemplate_9 + promptTemplate_10 + ctaWidth + promptTemplate_11 + ctaHeight + promptTemplate_12 + ctaURL + promptTemplate_13 + promptTemplate_14 + promptTemplate_15 + closeWidth + promptTemplate_16 + closeHeight + promptTemplate_17 + closeURL + promptTemplate_18 ;

	document.getElementById('WindowCloseBtn').onclick = function(){
			document.getElementById('ChatMainDiv').style.visibility = 'hidden';
		}

}

function compileFeedback(){

	var bgURL1 = $('#bgSlice1Preview').text();
	var bgWidth1 = bgImg1.width;
	var bgHeight1 = bgImg1.height;

	var closeURL1 = $('#closeSlice1Preview').text();
	var closeWidth1 = closeImg1.width;
	var closeHeight1 = closeImg1.height;

	var ctaSubmitURL1 = $('#ctaSubmitSlice1Preview').text();
	var ctaSubmitWidth1 = ctaSubmitImg1.width;
	var ctaSubmitHeight1 = ctaSubmitImg1.height;

	var ctaURL1 = $('#ctaSlice1Preview').text();
	var ctaWidth1 = ctaImg1.width;
	var ctaHeight1 = ctaImg1.height;

var feedbackTemplate_1  = '<div id="ChatMainDiv" style="position: fixed; left: 150px; top: 450px; width: ';
/*bgWidth1*/
var feedbackTemplate_2  = 'px; height: ';
/*bgHeight1*/
var feedbackTemplate_3  = 'px; z-index: 99202; display: block; visibility: visible; background-image: url(';
/*bgURL1*/
var feedbackTemplate_4  = '); background-attachment: scroll; background-color: transparent; background-position: 0px 0px; background-repeat: no-repeat;">\n';
var feedbackTemplate_5  = '<div id="ChatBackgroundDiv" style="position: absolute; left: 0px; top: 0px; z-index: 9000;"></div>\n<div style="position: absolute; left: 0px; top: 0px; z-index: 9001;" id="ChatContentDiv">\n<div id="ChatFlowDiv" style="color: #FFFFFF; line-height: 14px; position: absolute; z-index: 9002; border-width: 0px; font-size: 12px; padding: 0px 15px; background-image: none; background-attachment: scroll; background-color: transparent; text-indent: 0px; left: 45px; top: 120px; font-family: unitweb-medium, arial, serif; font-weight: normal; overflow: auto; width: 295px; height: 175px; background-position: 0% 0%; background-repeat: repeat repeat;';
var feedbackTemplate_6  = ' text-align: left;letter-spacing: 0px;">\n\n\n\n</div>\n<div id="ChatStatusDiv" style="visibility: hidden; display: none;"></div>\n<div id="ChatInputDiv" style="">\n<textarea id="ChatInputText" sty';
var feedbackTemplate_7  = 'le="border: medium none; color: #FFF !important; outline: medium none; overflow: auto; position: absolute; resize: none; display: inline; vertical-align: 0px; margin: 0px;  font-family: arial,times new roman,times,serif; font-size: 9px; padding: 6px 6px 1px; line-height: 9px; width: 286px;height: 16px; left: 59px;top: 297px;background-color: rgba(0,0,0,0);box-sizing: content-box;" placeholder="Enter your comments here..."></textarea>';
var feedbackTemplate_8  = '\n</div>\n<div id="ChatButtonsDiv" style="z-index: 9002; opacity: 1; position: absolute; left: 261px; top: 323px; width: ';
/*ctaSubmitWidth1*/
var feedbackTemplate_9  = 'px; height: ';
/*ctaSubmitHeight1*/
var feedbackTemplate_10 = 'px; cursor: pointer; background-image: url(';
/*ctaSubmitURL1*/
var feedbackTemplate_11 = '); background-attachment: scroll; background-color: transparent; background-position: 0px 0px; background-repeat: no-repeat;" onmouseover="this.style.opacity = '+'0.8'+'" onmouseout="this.style.opacity = '+'1'+'"></div>\n<div style="z-index: 9002; opacity: 1; position: relative; left: 45px; top: 365px; width: ';
/*ctaWidth1*/
var feedbackTemplate_12 = 'px; height: ';
/*ctaHeight1*/
var feedbackTemplate_13 = 'px; cursor: pointer; background-image: url(';
/*ctaURL1*/
var feedbackTemplate_14 = '); background-attachment: scroll; background-color: transparent; background-position: 0px 0px; background-repeat: no-repeat;" onmouseover="this.style.opacity = '+'0.8'+'" onmouseout="this.style.opacity = '+'1'+'" onclick="veTagData.customEvents.onChatLinkClick('+"'ChatLinkCTA1'"+');"></div>\n';
var feedbackTemplate_15 = '</div>\n\n<div id="WindowBarDiv" style="background-color: #d3d3d3; position: absolute; left: 4px; top: 6px; z-index: 9994; width: 574px;">\n<div id="WindowTittleDiv" style="cursor: move; margin-left: 0px; margin-right: 0px; position: absolute; top: 22px; z-index: 9995; left: 25px; height: 82px; width: 322px;"></div>\n<div id="WindowCloseBtn" style="cursor: pointer; margin-left: 0px; margin-right: 0px; position: absolute; z-index: 9998; opacity: 1; left: 540px; top: 30px; width: ';
/*closeWidth1*/
var feedbackTemplate_16 = 'px; height: ';
/*closeHeight1*/
var feedbackTemplate_17 = 'px; background-image: url(';
/*closeURL1*/
var feedbackTemplate_18 = '); background-attachment: scroll; background-color: transparent; background-position: 100% 50%; background-repeat: no-repeat;" onmouseover="this.style.opacity = '+'0.8'+'" onmouseout="this.style.opacity = '+'1'+'"></div>\n</div>\n</div>';


	document.getElementById('outcomeTemplate').innerHTML = feedbackTemplate_1 + bgWidth1 + feedbackTemplate_2 + bgHeight1 + feedbackTemplate_3 + bgURL1 + feedbackTemplate_4 + feedbackTemplate_5 + feedbackTemplate_6 + feedbackTemplate_7 + feedbackTemplate_8 + ctaSubmitWidth1 + feedbackTemplate_9 + ctaSubmitHeight1 + feedbackTemplate_10 + ctaSubmitURL1 + feedbackTemplate_11 + ctaWidth1 + feedbackTemplate_12 + ctaHeight1 + feedbackTemplate_13 + ctaURL1 + feedbackTemplate_14 + feedbackTemplate_15 + closeWidth1 + feedbackTemplate_16 + closeHeight1 + feedbackTemplate_17 + closeURL1 + feedbackTemplate_18 ;

	document.getElementById('WindowCloseBtn').onclick = function(){
			document.getElementById('ChatMainDiv').style.visibility = 'hidden';
		}

}

function submitData(){
	var chat = document.getElementsByClassName('tabActive')[0];
	console.log(chat.id);
	if ( chat.id == 'promptRadio' ){ compilePrompt(); }
	else if ( chat.id == 'feedbackRadio' ){ compileFeedback(); }	
}




function loadPage(){
		
	function preventDefault(e) {
    	e.preventDefault();
	}

	$(document).bind('drop dragover', preventDefault);

//Grabbing needed elements
	var promptRadio 	= document.getElementById('promptRadio');
	var feedbackRadio	= document.getElementById('feedbackRadio');
	var promptTable 	= document.getElementById('promptTable');
	var feedbackTable 	= document.getElementById('feedbackTable');

	var submitButton	= document.getElementById('submitButton');

	var outcomeTemplate = document.getElementById('outcomeTemplate');



//Actions assigned to elements

	promptRadio.onclick = chooseChatPrompt;
	feedbackRadio.onclick = chooseChatFeedback;
	submitButton.onclick = submitData;

	$('#eraseButton0').bind('click', function () {

	    $('#bgSlice0Preview').text('');
	    $('#closeSlice0Preview').text('');
	    $('#ctaSlice0Preview').text('');

	    $('#bgSlice0').val('');
	    $('#bgSlice0').css("backgroundColor", "white");
	    $('#closeSlice0').val('');
	    $('#closeSlice0').css("backgroundColor", "white");
	    $('#ctaSlice0').val('');
	    $('#ctaSlice0').css("backgroundColor", "white");

	    $('#bgSlice0sizePreview').text('');
	    $('#closeSlice0sizePreview').text('');
	    $('#ctaSlice0sizePreview').text('');

	    console.log('Erased!');
	});

	$('#eraseButton1').bind('click', function () {

		$('#bgSlice1Preview').text('');
	    $('#closeSlice1Preview').text('');
	    $('#ctaSubmitSlice1Preview').text('');
	    $('#ctaSlice1Preview').text('');

	    $('#bgSlice1').val('');
	    $('#bgSlice1').css("backgroundColor", "white");
	    $('#closeSlice1').val('');
	    $('#closeSlice1').css("backgroundColor", "white");
	    $('#ctaSubmitSlice1').val('');
	    $('#ctaSubmitSlice1').css("backgroundColor", "white");
	    $('#ctaSlice1').val('');
	    $('#ctaSlice1').css("backgroundColor", "white");

	    $('#bgSlice1sizePreview').text('');
	    $('#closeSlice1sizePreview').text('');
	    $('#ctaSubmitSlice1sizePreview').text('');
	    $('#ctaSlice1sizePreview').text('');

	    console.log('Erased!');
	});

//PROMPT ACTIONS

	$('#bgSlice0').bind('drop', function(event){
		bgURL = event.originalEvent.dataTransfer.getData("URL");
		bgImg = new Image();
		bgImg.onload = function(){
			console.log('Image width: ' + bgImg.width + 'px; Image height: ' + bgImg.height + 'px;');
	    	$('#bgSlice0sizePreview').text(bgImg.width+'x'+bgImg.height);
		};
		bgImg.src = bgURL;

		var bgElem = document.createElement('a');
		bgElem.href = bgURL;
		bgElem.protocol = 'https:';
		bgURL = bgElem.href;

	    $('#bgSlice0Preview').text(bgURL);

	    $(this).css('background-color','green');
	    $(this).blur();
		console.log('BG dropped!');	    
	});

	$('#closeSlice0').bind('drop', function(event){
		closeURL = event.originalEvent.dataTransfer.getData("URL");
		closeImg = new Image();
		closeImg.onload = function(){
			console.log('Image width: ' + closeImg.width + 'px; Image height: ' + closeImg.height + 'px;');
	    	$('#closeSlice0sizePreview').text(closeImg.width+'x'+closeImg.height);
		};
		closeImg.src = closeURL;

		var closeElem = document.createElement('a');
		closeElem.href = closeURL;
		closeElem.protocol = 'https:';
		closeURL = closeElem.href;

	    $('#closeSlice0Preview').text(closeURL);

	    $(this).css('background-color','green');
	    $(this).blur();
		console.log('close dropped!');	  	    
	});

	$('#ctaSlice0').bind('drop', function(event){
		ctaURL = event.originalEvent.dataTransfer.getData("URL");
		ctaImg = new Image();
		ctaImg.onload = function(){
			console.log('Image width: ' + ctaImg.width + 'px; Image height: ' + ctaImg.height + 'px;');
	    	$('#ctaSlice0sizePreview').text(ctaImg.width+'x'+ctaImg.height);
		};
		ctaImg.src = ctaURL;

		var ctaElem = document.createElement('a');
		ctaElem.href = ctaURL;
		ctaElem.protocol = 'https:';
		ctaURL = ctaElem.href;

	    $('#ctaSlice0Preview').text(ctaURL);

	    $(this).css('background-color','green');
	    $(this).blur();
		console.log('CTA dropped!');	      
	});

	$('#bgSlice0').bind('click', function(event){
	    $(this).blur();
	});

	$('#closeSlice0').bind('click', function(event){
	    $(this).blur();
	});

	$('#ctaSlice0').bind('click', function(event){
	    $(this).blur();
	});


//FEEDBACK ACTIONS

	$('#bgSlice1').bind('drop', function(event){
		bgURL1 = event.originalEvent.dataTransfer.getData("URL");
		bgImg1 = new Image();
		bgImg1.onload = function(){
			console.log('Image width: ' + bgImg1.width + 'px; Image height: ' + bgImg1.height + 'px;');
	    	$('#bgSlice1sizePreview').text(bgImg1.width+'x'+bgImg1.height);
		};
		bgImg1.src = bgURL1;

		var bgElem1 = document.createElement('a');
		bgElem1.href = bgURL1;
		bgElem1.protocol = 'https:';
		bgURL1 = bgElem1.href;

	    $('#bgSlice1Preview').text(bgURL1);

	    $(this).css('background-color','green');
	    $(this).blur();
		console.log('BG dropped!');	    
	});

	$('#closeSlice1').bind('drop', function(event){
		closeURL1 = event.originalEvent.dataTransfer.getData("URL");
		closeImg1 = new Image();
		closeImg1.onload = function(){
			console.log('Image width: ' + closeImg1.width + 'px; Image height: ' + closeImg1.height + 'px;');
	    	$('#closeSlice1sizePreview').text(closeImg1.width+'x'+closeImg1.height);
		};
		closeImg1.src = closeURL1;

		var closeElem1 = document.createElement('a');
		closeElem1.href = closeURL1;
		closeElem1.protocol = 'https:';
		closeURL1 = closeElem1.href;

	    $('#closeSlice1Preview').text(closeURL1);

	    $(this).css('background-color','green');
	    $(this).blur();
		console.log('close dropped!');	  	    
	});

	$('#ctaSubmitSlice1').bind('drop', function(event){
		ctaSubmitURL1 = event.originalEvent.dataTransfer.getData("URL");
		ctaSubmitImg1 = new Image();
		ctaSubmitImg1.onload = function(){
			console.log('Image width: ' + ctaSubmitImg1.width + 'px; Image height: ' + ctaSubmitImg1.height + 'px;');
	    	$('#ctaSubmitSlice1sizePreview').text(ctaSubmitImg1.width+'x'+ctaSubmitImg1.height);
		};
		ctaSubmitImg1.src = ctaSubmitURL1;

		var ctaSubmitElem1 = document.createElement('a');
		ctaSubmitElem1.href = ctaSubmitURL1;
		ctaSubmitElem1.protocol = 'https:';
		ctaSubmitURL1 = ctaSubmitElem1.href;

	    $('#ctaSubmitSlice1Preview').text(ctaSubmitURL1);

	    $(this).css('background-color','green');
	    $(this).blur();
		console.log('CTASubmit dropped!');	      
	});

	$('#ctaSlice1').bind('drop', function(event){
		ctaURL1 = event.originalEvent.dataTransfer.getData("URL");
		ctaImg1 = new Image();
		ctaImg1.onload = function(){
			console.log('Image width: ' + ctaImg1.width + 'px; Image height: ' + ctaImg1.height + 'px;');
	    	$('#ctaSlice1sizePreview').text(ctaImg1.width+'x'+ctaImg1.height);
		};
		ctaImg1.src = ctaURL1;

		var ctaElem1 = document.createElement('a');
		ctaElem1.href = ctaURL1;
		ctaElem1.protocol = 'https:';
		ctaURL1 = ctaElem1.href;

	    $('#ctaSlice1Preview').text(ctaURL1);

	    $(this).css('background-color','green');
	    $(this).blur();
		console.log('CTA dropped!');	      
	});

	$('#bgSlice1').bind('click', function(event){
	    $(this).blur();
	});

	$('#closeSlice1').bind('click', function(event){
	    $(this).blur();
	});

	$('#ctaSlice1').bind('click', function(event){
	    $(this).blur();
	});




//Definition of template parts



//PROMPT TEMPLATE



//FEEDBACK TEMPLATE

	console.log('Engine loaded!');

}