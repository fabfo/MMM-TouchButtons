const exec = require('child_process').exec;

var NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
	socketNotificationReceived: function(notification, button) {
		switch (notification) {
			case 'BUTTON_PRESSED':
				this.onButtonPressed(button);
				break;
		
			default:

				break;
		}
	},

	onButtonPressed: function(button) {
		console.log('MMM-TouchButtons button pressed');
		switch (button.action) {
			case 'exec':
				this.doActionExec(button);
				break;
		
			default:

				break;
		}
	},

	doActionExec: function(button) {
		console.log('MMM-TouchButtons do action exec:', button.command);
		console.log(exec(button.command));
	}

	// TODO Find a way to hide/show/toggle other modules from here
	//doActionShowAll
	//doActionHideAll
	//doActionToggleAll
});