var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};

makeBlinkyDancer.prototype.setRandomColor = function(){
  var colors = {
    0: 'blue',
    1: 'red',
    2: 'green'
  };

  var randomNum = Math.floor(Math.random() * 3);

  var styleSettings = {
    border: '10px solid ' + colors[randomNum]
  };
  this.$node.css(styleSettings);
}
