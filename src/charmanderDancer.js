var makeCharmanderDancer = function(top, left, timeBetweenSteps) {
  makePokemonDancer.apply(this, arguments);
  this.$node = $('<img src="img/charmander.png" class="pokemon">');
};

makeCharmanderDancer.prototype = Object.create(makePokemonDancer.prototype);

makeCharmanderDancer.prototype.constructor = makeCharmanderDancer;

makeCharmanderDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makePokemonDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  // similarities across Pokemon: doubles in size, waddles
    // use .height(size) / .width(size) to double size


    var on = false;
    $(this.$node).click(function() {
    if (!on) {
      $(this).stop().animate({
        marginLeft: '500px'
      }, 200);
      on = true;
    } else {
      $(this).stop().animate({
        marginLeft: '300px'
      }, 200);
      on = false;
    }
  });

};