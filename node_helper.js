const exec = require('child_process').exec;

var NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
	socketNotificationReceived: function(notification, config) {
		switch (notification) {
			case 'BUTTON_PRESSED':
				this.onButtonPressed(config);
				break;
		
			default:

				break;
		}
	},

	onButtonPressed: function(config) {
		console.log('onButtonPressed', config);
		switch (config.action) {
			case 'exec':
				this.doActionExec(config);
				break;
		
			default:

				break;
		}
	},

	doActionExec: function(config) {
		console.log('doActionExec', config);
		console.log(exec(config.command));
	}

	// TODO Find a way to hide/show/toggle other modules from here
	//doActionShowAll
	//doActionHideAll
	//doActionToggleAll
});