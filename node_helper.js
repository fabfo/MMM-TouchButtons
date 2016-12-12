const exec = require('child_process').exec;

var NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
	socketNotificationReceived: function(notification, payload) {
		switch (notification) {
			case 'BUTTON_PRESSED':
				onButtonPressed(payload);
				break;
		
			default:

				break;
		}
	},

	onButtonPressed: function(payload) {
		exec(payload.command);
	}
});