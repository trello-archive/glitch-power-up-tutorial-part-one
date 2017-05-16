/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var estimateSelector = document.getElementById('estimate');

document.getElementById('save').addEventListener('click', function(){
  return t.set('card', 'shared', 'estimate', estimateSelector.value)
  .then(function(){
    t.closePopup();
  });
});

t.render(function(){
  return t.get('card', 'shared', 'estimate')
  .then(function(estimate){
    estimateSelector.value = estimate;
  })
  .then(function(){
    t.sizeTo('#content')
    .done();
  });
});