$('.timer').startTimer({
  onComplete: function(element){
    element.addClass('is-complete');
  },
  loop: true,
  loopInterval: 3,
});

