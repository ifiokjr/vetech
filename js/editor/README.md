veProactive jQuery Plugin
========

For examples take a look at the examples folder.

This plugin provides a beautiful interface for creating inline-styled text for the personalities.
When interacting with the editor a toolbar appears with the standard editing buttons you'll
probably already be used to as well as some extra features.

The main extras are a a-tag and p-tag button.

Clicking these provides a dropdown with two sections - attributes (for a-tags) and styles.
Attributes are specific to Ve and determine the values that will be used to wrap the selected
text.

The code is run on the content editable to wrap the selected however rather than using the following.

`document.execCommand("insertHTML", false, '<p style="{{ style }}">'+ document.getSelection()+"</span>");`

Styles default to certain values which are included in the plugin as a defaults object.
At the moment it is not possible to change these defaults.

## Caveats

p-tags can't be nested. Clicking on the p-tag button first checks if the parent element is a p-tag
if this is the case the outer p-tag element will be updated with the styles defined in the p-tag.

The inner html of the p-tag is preserved by avoiding the uses of execCommand. However with a tags the
`document.execCommand(...)` is used and any styles defined within the tag will be lost.

The only way to define styles on the a-tag is using the dropdown menu that appears beside it.

On the first enter key press a `<br>` will be added and on the second enter key press a new
paragraph will be added. 


## Usage

`$('ChatFlowDiv').vePersonality({
    outputHTML: window.personalityText, // Where will the output be stored.
});`

A simple plugin with all the templating and other things provided within.

## Dependencies

The library depends on the following:
* [Bootstrap](http://getbootstrap.com/components/) for the layout
* [jQuery](http://jquery.com/) for the interactions
* [jquery.hotkeys](https://github.com/jeresig/jquery.hotkeys) for simpler key-binding.
* [Lodash](http://lodash.com/docs#template) for templating and all round awesomeness.

Within this library we'll be using the [Lumen](http://bootswatch.com/lumen/) as the sugar on top of Bootstrap
