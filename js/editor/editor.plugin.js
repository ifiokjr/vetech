(function (global, $, _) {
	'use strict';
	// Style Guide
	// All jQuery objects are prefixed with `$`
  // make sure that all styles are added with inline css rather than tags.
		
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

	$.fn.vePersonality = function (userOptions) {

		var $editor = this,
				options,
        selectedRange, 
        toolbarBtnSelector = 'button[data-edit]',
        $textButtons,
        toolbarHtml = '<div class="btn-toolbar" data-role="editor-toolbar"></div>',
        
        styleWithCss = function() {
          if (!document.queryCommandState('styleWithCSS')) {
            document.execCommand('styleWithCSS', null, true); // make sure that
            // contenteditable regions use styles not html markup.
          }
        },

        execCommand = function (commandWithArgs, valueArg) {
          var commandArr = commandWithArgs.split(' '),
          command = commandArr.shift(),
          args = commandArr.join(' ') + (valueArg || '');
          document.execCommand(command, 0, args);
          restyleToolbar();
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
        
        atagHtml = function(styles) {
          var atagString = '<div class="btn-group'
        }
        
        ptagHtml = function(styles) {
          var ptagString = '<div class="btn-group dropup"><button type="button" class="btn btn-default">Dropup</button><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="caret"></span><span class="sr-only">Toggle Dropdown</span></button><ul class="dropdown-menu" id="p-tag-styles" role="menu"><!-- Dropdown menu links --></ul></div>';
          var styleString = '<div class="row"><div class="col-xs-6"><input type="text" value="<%= styleName %>" class="form-control" placeholder="Style Name"></div><div class="col-xs-6"><input type="text" value="<%= styleValue %>" class="form-control" placeholder="Style Value"></div>';
          
  				var outputStyleString = '';
                  
          
          
          
        },
        
        textEditHtml = function () {
          var htmlString = '<button class="btn btn-default" data-edit="<%= command %>" title="" data-original-title="<%= desc %>"><i class="fa fa-<%= icon %>"></i></a>',

          var outputString = '';
          _.forEach(buttonGroups.text, function(val, key){
            var data = {command: key, desc: val.desc, icon: val.icon};
            outputString += _.template(htmlString, data);
          });
          return outputString;
        },

        createButtonGroup = function(html) {
          var btnGroup = $('<div class="btn-grp btn-grp-sm">').html(html);
          return btnGroup;
        },

        changePosition = function(pos, $toolbar) {
          $toolbar.animate({'top': pos.y, 'left': pos.x}, { queue: false });
        },

				restyleToolbar = function() {
          $(options.toolbarSelector).find(toolbarBtnSelector).each(function () {
          var command = $(this).data('edit');
          if (document.queryCommandState(command)) {
            $(this).addClass('btn-primary').removeClass('btn-default');
          } else {
            $(this).removeClass('btn-primary').addClass('btn-default');
          }
        });
        }, 
        updateToolbar = function( e , updatePosition) {
          e.stopPropagation();
          var $toolbar = $(options.toolbarSelector);
          if(!$toolbar.length) {

            // Create the toolbar that is slightly above the editor touch point. 
            $toolbar = $(toolbarHtml).css({zIndex: 100000, position: 'absolute'});
            var $textButtons = createButtonGroup(textEditHtml());
            // set up text buttons. 
            $toolbar.append($textButtons);
            document.body.appendChild($toolbar[0]);
            // TODO store data (current selector, atag and ptag data on $editor)
          }

          // Bind bodyclick events
          $('body').off('mousedown.toolbar').on('mousedown.toolbar', function(e) {
            var target = e.target || e.srcElement; // for IE
            if($(target).not(options.toolbarSelector +', ' + options.toolbarSelector + ' *').length){
              $toolbar.remove();
              $(this).off('mousedown.toolbar');
            }


            // Turn off the bindings on the model.

          });
          
          
          bindToolbar($toolbar)
			
					if (updatePosition) {
            var newPosition = {x: e.pageX - 15, y: e.pageY - 100};
            changePosition(newPosition, $toolbar);
          }
        },
        
        
        bindToolbar = function (toolbar, options) {
          toolbar.find(toolbarBtnSelector).click(function () {
            restoreSelection();
            $editor.focus();
            execCommand($(this).data('edit'));
            saveSelection();
          });
          toolbar.find('[data-toggle=dropdown]').click(restoreSelection);
        },

        options = $.extend({}, $.fn.vePersonality.defaults, userOptions);
    
        styleWithCss(); // Set the styles to be done CSS. 
        $editor.attr('contenteditable', true)
        .on('mouseup keyup mouseout', function (e) {
          saveSelection();
          updateToolbar(e, false);
        }).on('paste',function(e) { // paste defaults to plain text
          e.preventDefault();
          var text = (e.originalEvent || e).clipboardData.getData('text/plain') || prompt('Paste something..');
          document.execCommand('insertText', false, text);
        })
        .on('mousedown.editor', function( e ){
          saveSelection();
          updateToolbar( e, true );
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
