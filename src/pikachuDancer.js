var makePikachuDancer = function(top, left, timeBetweenSteps) {
  this.top = 500;
  this.left = 500;
  makeDancer.apply(this, arguments);
  this.$node = $('<img src="img/pikachu.png" class="pikachu pokemonBefore">');
};

makePikachuDancer.prototype = Object.create(makeDancer.prototype);

makePikachuDancer.prototype.constructor = makePikachuDancer;

makePikachuDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  // similarities across Pokemon: doubles in size, waddles
    // use .height(size) / .width(size) to double size

  $(this.$node).click(function() {
    $(this).toggleClass('pokemonBefore');
  });

  $(this.$node).jrumble();

  $(this.$node).hover(function() {
    $(this).trigger('startRumble');
  }, function() {
    $(this).trigger('stopRumble');
  });

  $(this.$node).mouseleave(function() {
    $(this).animate({
      'marginLeft': '5%',
      'marginTop': '53%'
    });
  });
};

makePikachuDancer.prototype.setPosition = function() {
  makeDancer.prototype.setPosition.call(this);
};