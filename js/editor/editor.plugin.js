(function ($) {
	'use strict';

	// Functions to be used within the following plugins.



	// Show the parent contenteditable area as the html code. In a div
	$.fn.showAsHtml = function(userOptions) {
		var $el,
		createElement = function() {
			var dims = {
				width: this.outerWidth,
				height: this.outerHeight,
				'z-index': 1000000000,
				top: this.position().top,
				left: this.position().left
			};
			$htmlEl = $('div').attr('contenteditable', true).css(dims);
			$('body').append($htmlEl);
			return $htmlEl;
		},
		grabHtml = function($context) {
			$el.text($context.html());
		}

		if (userOptions.target) {
			$el = $(userOptions.target);
		} else {
			$el = createElement()
		}
		// must receive a raw text input $element.text() as first argument
		// decodeHtml = function(inputText) {
		// 	var e = document.createElement('span');
		// 	e.innerHtml = inputText;
		// 	return e.childNodes
		// };


		$el.attr('contenteditable', true)

		// get dimensions of the editable region.
		grabHtml(this)
		this.click(function(){
			// TODO: Implment the toggle click functionality
			// TODO: Add templates for the html editor that's created.
		});



	};

	// $.fn.showAsHtml.defaults = {
	//
	// }




	$.fn.cleanHtml = function () {
		var html = $(this).html();
		return html && html.replace(/(<br>|\s|<div><br><\/div>|&nbsp;)*$/, '');
	};

	$.fn.vePersonality = function (userOptions) {


		var editor = this,
		$toolbar,
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
		},


		selectedRange,
		options,
		toolbarBtnSelector,
		updateToolbar = function () {
			if (options.activeToolbarClass) {
				$(options.toolbarSelector).find(toolbarBtnSelector).each(function () {
					var command = $(this).data(options.commandRole);
					if (document.queryCommandState(command)) {
						$(this).addClass(options.activeToolbarClass);
					} else {
						$(this).removeClass(options.activeToolbarClass);
					}
				});
			}
		},
		generateToolbar = function(selector) {
			$toolbar = $($(selector).html());
			$toolbar.css({
				top: editor.position().top - toolbar.outerHeight - 5,
				left: editor.position().left,
				zIndex: editor
			})
			('body').append($toolbar)
		},

		generateStyles = function(styleObj) {

			var styleStr = ''
			for(key in styleObj){
				styleStr += key + ': ' + styleObj[key] + '; '
			}
		},

		// use css for styling rather than the default contenteditable tags.
		styleWithCss = function(){
			if (!document.queryCommandState('styleWithCss')) {
				document.execCommand('styleWithCss', null, true) // make sure that
				// contenteditable regions use styles not html markup.
			}
		},

		// check whether the
		defaultCommand = function(){

		},

		execCommand = function (commandWithArgs, valueArg) {
			var commandArr = commandWithArgs.split(' '),
			command = commandArr.shift(),
			args = commandArr.join(' ') + (valueArg || '');
			document.execCommand(command, 0, args);
			updateToolbar();
		},
		bindHotkeys = function (hotKeys) {
			$.each(hotKeys, function (hotkey, command) {
				editor.keydown(hotkey, function (e) {
					if (editor.attr('contenteditable') && editor.is(':visible')) {
						e.preventDefault();
						e.stopPropagation();
						execCommand(command);
					}
				}).keyup(hotkey, function (e) {
					if (editor.attr('contenteditable') && editor.is(':visible')) {
						e.preventDefault();
						e.stopPropagation();
					}
				});
			});
		},
		getCurrentRange = function () {
			var sel = window.getSelection();
			if (sel.getRangeAt && sel.rangeCount) {
				return sel.getRangeAt(0);
			}
		},
		saveSelection = function () {
			selectedRange = getCurrentRange();
		},
		restoreSelection = function () {
			var selection = window.getSelection();
			if (selectedRange) {
				try {
					selection.removeAllRanges();
				} catch (ex) {
					document.body.createTextRange().select();
					document.selection.empty();
				}

				selection.addRange(selectedRange);
			}
		},

		markSelection = function (input, color) {
			restoreSelection();
			if (document.queryCommandSupported('hiliteColor')) {
				document.execCommand('hiliteColor', 0, color || 'transparent');
			}
			saveSelection();
			input.data(options.selectionMarker, color);
		},
		bindToolbar = function (toolbar, options) {
			toolbar.find(toolbarBtnSelector).click(function () {
				restoreSelection();
				editor.focus();
				execCommand($(this).data(options.commandRole));
				saveSelection();
			});
			toolbar.find('[data-toggle=dropdown]').click(restoreSelection);

			toolbar.find('input[type=text][data-' + options.commandRole + ']').on('webkitspeechchange change', function () {
				var newValue = this.value; /* ugly but prevents fake double-calls due to selection restoration */
				this.value = '';
				restoreSelection();
				if (newValue) {
					editor.focus();
					execCommand($(this).data(options.commandRole), newValue);
				}
				saveSelection();
			}).on('focus', function () {
				var input = $(this);
				if (!input.data(options.selectionMarker)) {
					markSelection(input, options.selectionColor);
					input.focus();
				}
			}).on('blur', function () {
				var input = $(this);
				if (input.data(options.selectionMarker)) {
					markSelection(input, false);
				}
			});
			toolbar.find('input[type=file][data-' + options.commandRole + ']').change(function () {
				restoreSelection();
				if (this.type === 'file' && this.files && this.files.length > 0) {
					insertFiles(this.files);
				}
				saveSelection();
				this.value = '';
			});
		};
		styleWithCss();
		options = $.extend({}, $.fn.vePersonality.defaults, userOptions);
		toolbarBtnSelector = 'button[data-' + options.commandRole + ']';
		bindHotkeys(options.hotKeys);
		bindToolbar($(options.toolbarSelector), options);
		editor.attr('contenteditable', true)
		.on('mouseup keyup mouseout', function () {
			saveSelection();
			updateToolbar();
		}).on('paste',function(e) { // paste defaults to plain text
			e.preventDefault();
			var text = (e.originalEvent || e).clipboardData.getData('text/plain') || prompt('Paste something..');
			document.execCommand('insertText', false, text);
		});
		$(window).bind('touchend', function (e) {
			var isInside = (editor.is(e.target) || editor.has(e.target).length > 0),
			currentRange = getCurrentRange(),
			clear = currentRange && (currentRange.startContainer === currentRange.endContainer && currentRange.startOffset === currentRange.endOffset);
			if (!clear || isInside) {
				saveSelection();
				updateToolbar();
			}
		});
		return this;
	};
	$.fn.vePersonality.defaults = {
		hotKeys: {
			'ctrl+b meta+b': 'bold',
			'ctrl+i meta+i': 'italic',
			'ctrl+u meta+u': 'underline',
			'ctrl+z meta+z': 'undo',
			'ctrl+y meta+y meta+shift+z': 'redo',
			'ctrl+l meta+l': 'justifyleft',
			'ctrl+r meta+r': 'justifyright',
			'ctrl+e meta+e': 'justifycenter',
			'ctrl+j meta+j': 'justifyfull',
			'shift+tab': 'outdent',
			'tab': 'indent'
		},
		toolbarSelector: '[data-role=editor-toolbar]',
		commandRole: 'edit',
		activeToolbarClass: 'btn-info',
		selectionMarker: 'edit-focus-marker',
		selectionColor: 'darkgrey',
	};
}(window.jQuery));
