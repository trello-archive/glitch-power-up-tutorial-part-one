/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';

TrelloPowerUp.initialize({
	'card-buttons': function(t, options) {
		return [{
			icon: BLACK_ROCKET_ICON,
			text: 'Estimate Size',
      callback: function(t) {
        return t.popup({
          title: "Estimation",
          url: 'estimate.html',
        });
      }
		}];
	},
});
