(function($){

  console.log('doc ready');
  var things = ['something', 'making a change' ]
  var thingIndex = 0;
  var thingMaxIndex = things.length - 1; 

  function triggerThingChange() {
    setTimeout(function() {
      changeThing()
    }, 2000);
  }

  changeThing = function() {
    console.log('changeThing called');
    var $element = $('#start_');
    $element.text(things[thingIndex]);

    if (thingIndex < thingMaxIndex) {
      thingIndex++;
    } else {
      thingIndex = 0;
    }

    // recursively call changeThing
    triggerThingChange();

  };

  triggerThingChange();

})(jQuery);
