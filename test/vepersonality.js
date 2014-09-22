var should = chai.should();

describe("vePersonality jQuery Plugin", function() {
  var awesome = 1
  beforeEach(function() {
    awesome++;
  });

  it('should now be running okay', function() {
    awesome.should.be.a.number
  });

  describe("ChatFlowDiv", function() {
    var $fixture, $editor, $body, defaultButtons, $toolbar;
    beforeEach(function(){
      $fixture = $($('#VeChat').html());
      $body = $('body');
      $body.append($fixture)
      $editor = $('#ChatFlowDiv')
      $editor.vePersonality();
      $editor.trigger('mousedown');
      $toolbar = $($editor.vePersonality.defaults.toolbarSelector);

    });

    afterEach(function(){
      $fixture.remove();
      $toolbar.remove();
    });

    it('should make the ChatFlowDiv contenteditable', function() {
      $editor.should.have.attr('contenteditable', 'true');
    });

    it('should create a toolbar when editable area is clicked', function() {
      $toolbar.should.exist
    });

    it('should remove the toolbar when area outside area is clicked', function(){
      $toolbar.should.exist
      $body.trigger('mousedown');
      $toolbar.should.not.exist
    });

    it('should store atag and ptag defaults on the editor selector', function() {
      $editor.data().should.haveOwnProperty('atag');
      $editor.data().should.haveOwnProperty('ptag');
    });

    it('should have all default buttons defined', function() {
      _.forEach($editor.vePersonality.defaults.buttons, function(val) {
        $('button[data-edit='+val+']').should.exist();
      });
    })


  });
});
