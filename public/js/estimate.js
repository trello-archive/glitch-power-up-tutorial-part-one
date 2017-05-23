/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

// Elements with IDs are available as properties of `window`.
window.estimate.addEventListener('submit', function(event){
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  return t.set('card', 'shared', 'estimate', window.estimateSize.value)
  .then(function(){
    t.closePopup();
  });
});

t.render(function(){
  return t.get('card', 'shared', 'estimate')
  .then(function(estimate){
    window.estimateSize.value = estimate;
  })
  .then(function(){
    t.sizeTo('#estimate').done();
  });
});