var makeCharmanderDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node = $('<img src="img/charmander.png" class="charmander pokemonBefore">');
  this.$fire = $('<div class="fire"></div>');
};

makeCharmanderDancer.prototype = Object.create(makeDancer.prototype);

makeCharmanderDancer.prototype.constructor = makeCharmanderDancer;

makeCharmanderDancer.prototype.step = function() {
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

  $(this.$node).mouseenter(function() {
    $(this).append('<img src="img/fire.png" class="fire" />')
  });

  $(this.$node).mouseleave(function() {
    $(this).animate({
      'marginLeft': '65%',
      'marginTop': '7%'
    });
  });
};
