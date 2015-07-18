$(document).ready(function() {

    $.fn.removeCss=function(toDelete){

	    var props=$(this).attr('style').split(';');
		var tmp=-1;
		for( var p=0;p<props.length; p++){if(props[p].indexOf(toDelete)!==-1){tmp=p}};
		if(tmp!==-1){

		   delete props[tmp];
		}
	  	return $(this).attr('style',props.join(';')+';');
	}

	function init() {
		//initBackground();
		$('#output-code').click(function() {
            $(this).select();
        });
        $('#google-code').click(function() {
            $(this).select();
        });
        $('#text_btn, #text_width, #text_height, #size, #hori, #verti, #colorbg, #flou, #text_border, #text_radius, #url').keyup(function(){
        	if ($('#checkdow').is(':checked')){
	        	$('#demo').css({
	        		'-moz-box-shadow': $('#hori').val() + 'px ' + $('#verti').val() + 'px ' + $('#flou').val() + 'px 4px rgba(119, 119, 119, 0.6)',
	        		'-webkit-box-shadow': $('#hori').val() + 'px ' + $('#verti').val() + 'px ' + $('#flou').val() + 'px 4px rgba(119, 119, 119, 0.6)',
	        		'box-shadow': $('#hori').val() + 'px ' + $('#verti').val() + 'px ' + $('#flou').val() + 'px 4px rgba(119, 119, 119, 0.6)', 
	        	});
        	}

        	if ($('#text_width').val() <= 300 && $('#text_height').val() <= 100) {
	        	var marginTop = ($('#preview').height() - $('#text_height').val())/2;
	        	var marginLeft = ($('#preview').width() - $('#text_width').val())/2;
	            
	            $('#demo').css({
	            	'width': $('#text_width').val() + 'px',
	            	'height': $('#text_height').val() + 'px',
	                'margin-top': marginTop,
	                'margin-left': marginLeft,
	                'line-height': $('#text_height').val() + 'px',
	            });
        	}
        	if ($('#check_border').is(':checked')){
				$('#demo').css('border','1px solid ' + $('#text_border').val());
			}
			if ($('#check_radius').is(':checked')){
				$('#demo').css('border-radius', $('#text_radius').val() + 'px');
			}
			if ($('#check_img').is(':checked')){
				$('#demo').css('background',$("#colorbg").val());
			}
			if ($('#bold').is(':checked')){
				$('#demo').css('font-weight', 'bold');
			}
        	$('#demo').text($('#text_btn').val());
	   		$('#demo').attr("href", $('#url').val());
	   		$('#demo').css('font-size', $('#size').val() + 'px');

        	generateCode();
        });
        $('#check_border').click(function(){
       		if ($('#check_border').is(':checked')){
	    		$('#demo').css('border','1px solid ' + $('#text_border').val());
	   		 }else{
	   		 	$('#demo').css('border','none');
	   		 }
	   		 generateCode();
        });
        $('#checkdow').click(function(){
        	if ($('#checkdow').is(':checked')){
	        	$('#demo').css({
	        		'-moz-box-shadow': $('#hori').val() + 'px ' + $('#verti').val() + 'px ' + $('#flou').val() + 'px 4px rgba(119, 119, 119, 0.6)',
	        		'-webkit-box-shadow': $('#hori').val() + 'px ' + $('#verti').val() + 'px ' + $('#flou').val() + 'px 4px rgba(119, 119, 119, 0.6)',
	        		'box-shadow': $('#hori').val() + 'px ' + $('#verti').val() + 'px ' + $('#flou').val() + 'px 4px rgba(119, 119, 119, 0.6)', 
	        	});
        	}else{
        		$('#demo').css({
	        		'-moz-box-shadow': 'none',
	        		'-webkit-box-shadow': 'none',
	        		'box-shadow': 'none', 
	        	});
        	}
        	generateCode();
        });
        $('#bold').click(function(){
        	if ($('#bold').is(':checked')){
				$('#demo').css('font-weight', 'bold');
			}else{
				$('#demo').css('font-weight', '');
			}
			generateCode();
        });
	   	$('#check_img').click(function(){
	   		if ($('#check_img').is(':checked')){
		   		fond();
		   	}else{
		   		$('#demo').css('background',$("#colorbg").css('background-color'));
		   	}
		   	generateCode();
	   	});
	   	$('#check_radius').click(function(){
	   		if ($('#check_radius').is(':checked')){
	   			$('#demo').css('border-radius', $('#text_radius').val() + 'px');
	   		}else{
	   			$('#demo').css('border-radius', '0');
	   		}
	   		generateCode();
	   	});
	}

	function generateCode(){
		$('#output-code').val($(".demo").html());
		// var shadow = $('#checkdow').is(':checked') ? "-moz-box-shadow : "+$('#hori').val() + 'px ' + $('#verti').val() + 'px ' + $('#flou').val() +"px 4px rgba(119, 119, 119, 0.6); -webkit-box-shadow : "+$('#hori').val() + 'px ' + $('#verti').val() + 'px ' + $('#flou').val() +"px 4px rgba(119, 119, 119, 0.6); box-shadow : "+$('#hori').val() + 'px ' + $('#verti').val() + 'px ' + $('#flou').val() +"px 4px rgba(119, 119, 119, 0.6)" : "-moz-box-shadow : none; -webkit-box-shadow: none; box-shadow:none";  
		// var background_img = $('#check_img').is(':checked') ? fond() : $("#colorbg").css('background-color');
		// var verif_border = $('#check_border').is(':checked') ? "border:1px solid "+$('#text_border').val() : "border:none";
		// var verif_radius = $('#check_radius').is(':checked') ? "border-radius:"+$('#text_radius').val()+"px" : "border-radius:0px";
		// var verif_gras = $('#bold').is(':checked') ? "font-weight:bold" : "font-weight:none";
		// $('#output-code').val('<tr><td><table height="'+$('#text_height').val()+'" align="left" valign="middle" border="0" cellpadding="0" cellspacing="0"><tr><td width="'+$('#text_width').val()+'" height="'+$('#text_height').val()+'" align="center" valign="middle" style="font-family:'+$('#demo').css('font-family')+'; text-align:center; text-decoration:none; vertical-align:middle; font-size:'+$('#size').val()+'px;'+verif_border+'; '+verif_radius+'; background-color:'
		// 	+$("#colorbg").css('background-color')+'; color:'+$("#colorbg").css('color')+'; '+verif_gras+'; '+shadow+';"><a href="'+$('#url').val()+'" style="font-family:'+$('#demo').css('font-family')+'; color:'+$("#colorbg").css('color')+'; background:'+background_img+'; text-decoration:none; font-size:'+$('#size').val()+'px;">'+$('#text_btn').val()+'</a></td></tr></table></td></tr>');
		//$('#output-code').val($(".demo2").html());
	}

	function fond(){
		$('#demo').css('background', 'url('+ $('#text_img').val() +')');
	}

	/*function initBackground (){
		$('#demo').css('background-size', '100% 100%');
	}*/

    $('#colorpicker').farbtastic('#colorbg, #demo');
	init();
})