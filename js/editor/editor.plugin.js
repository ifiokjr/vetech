(function (global, $, _) {
	'use strict';
	// Style Guide
	// All jQuery objects are prefixed with `$`
	global.Utils = _.extend( (window.Utils || {}), {

		// make sure that all styles are added with inline css rather than tags.
		styleWithCss: function() {
			if (!document.queryCommandState('styleWithCSS')) {
				document.execCommand('styleWithCSS', null, true) // make sure that
				// contenteditable regions use styles not html markup.
			}
		},

	});

	var defaultButtons = ['bold', 'italic', 'strikethrough', 'underline'],// 'insertunorderedlist', 'insertorderedlist', 'outdent', 'indent', 'justifyleft', 'justifycenter', 'justifyright', 'justifyfull', 'undo', 'redo'],
	fontList = [],
	buttonGroups = {
		text: {
			bold: {icon: 'bold', desc: 'Bold (Ctrl/Cmd+B)'},
			italic: {icon: 'italic', desc: ''},
			strikethrough: {icon: 'strikethrough', desc: 'Strikethrough'},
			underline: {icon: 'underline' , desc: 'Underline (Ctrl/Cmd+U)'}
		},
		lists: {

		},
		align: {},
		custom: {
			atag: { icon: 'caret', },
			ptag: { icon: 'caret', }
		},
		font:{icon: 'font', fonts: fontList},
		color: {icon: 'circle'} // use custom bootstrap data.
	},
	pDefaults = {
		style: {
			"font-size": "13px",
			"font-family": "Verdana, arial, sans-serif",
			"font-weight": "normal",
			"font-style": "normal",
			"line-height": "17px",
			"text-align": "center",
			"margin": "0px auto 10px",
			"padding": "10px",
			"color": "#000",
		}
	},
	aDefaults = {
		style: {
			"font-weight": "bold",
			"text-decoration": "none",
			"color": "#000"
		},
		url: "",
		clickref: "Link",
		onclickOverride: null,
	};

	$.fn.vePersonality = function (options) {

		var $editor = this,
		$textButtons,
		toolbarHtml = '<div class="btn-toolbar" data-role="editor-toolbar"> THIS IS AWESOME</div>',
		textEditHtml = function () {
			var htmlString = '<button class="btn" data-edit="<% command %>" title="" data-original-title="<%= desc %>"><i class="fa fa-<%= icon %>"></i></a>',
			outputString = ''
			_.forEach(buttonGroups.text, function(val, key){
				var data = {command: key, desc: val.desc, icon: val.icon}
				outputString += _.template(htmlString, data)
			});
			return outputString;
		},

		createButtonGroup = function(html) {
			var btnGroup = $('<div class="btn-grp btn-grp-sm">').html(html);
			return btnGroup
		},

		changePosition = function(pos, $toolbar) {
			$toolbar.animate({'top': pos.y, 'left': pos.x}, { queue: false });
		},

		updateToolbar = function( e ) {
			e.stopPropagation();
			var $toolbar = $(options.toolbarSelector);
			if(!$toolbar.length) {
				$toolbar = $(toolbarHtml).css({zIndex: 100000, position: 'absolute'});
				document.body.appendChild($toolbar[0])
				// TODO store data (current selector, atag and ptag data on $editor)
			}

			// Bind bodyclick events
			$('body').off('mousedown.toolbar').on('mousedown.toolbar', function(e) {
				var target = e.target || e.srcElement; // for IE
				if($(target).not(options.toolbarSelector +', ' + options.toolbarSelector + ' *')){
					$toolbar.remove();
					$(this).off('mousedown.toolbar');
				}


				// Turn off the bindings on the model.

			});

			var $textButtons = createButtonGroup(textEditHtml());
			$toolbar.append($textButtons);
			var newPosition = {x: e.pageX - 15, y: e.pageY - 80};
			changePosition(newPosition, $toolbar);

		},

		options = $.extend({}, $.fn.vePersonality.defaults, options);
		$editor.attr('contenteditable', true)
		.on('mousedown.editor', function( e ){
			updateToolbar( e );

		}).data({atag: options.atag, ptag: options.ptag});



		return this;
	};
	$.fn.vePersonality.defaults = {
		toolbarSelector: '[data-role=editor-toolbar]',
		atag: aDefaults,
		ptag: pDefaults,
		buttons: defaultButtons,

	};
}(this, window.jQuery, window._));
