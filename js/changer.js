window.changer = function($targetElement, data, delayTime) {
  var self = this;
  self.delayTime = delayTime || 2000;
  self.index = 0;
  self.maxIndex = function() {
    return data.length -1;
  };
  
  self.triggerChange = function() {
    setTimeout(function() {
      self.changeThing();
    }, self.delayTime);
  }
  
  self.changeThing = function() {
    $targetElement.text(data[self.index]);

    if (self.index < self.maxIndex()) {
     self.index++;
    } else {
      self.index = 0;
    }

    // recursively call changeThing()
    self.triggerChange();
  };

  var exports = {
    start: self.triggerChange
  };

  return exports;
};



(function($){

  // Initialize changers

  window.startSomethingChanger = new changer($('#start_'), ['something', 'a movement', 'today']);
  window.startSomethingChanger.start();

  var ctaData = _.map($('[data-changer="cta"]'), function(element){ return element.textContent; });
  window.ctaChanger = new changer($('#cta-holder'), ctaData, 5000);
  $('#cta-holder').text(ctaData[0]);
  $('#cta-response').removeClass('hidden');
  window.ctaChanger.start();

})(jQuery);
