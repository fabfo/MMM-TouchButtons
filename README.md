# MMM-ActionButton
An action button Module for MagicMirror<sup>2</sup>

## Dependencies
  * An installation of [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror)

## Installation
 1. Clone this repo into `~/MagicMirror/modules` directory.
 2. Configure your `~/MagicMirror/config/config.js`:
	```
	{
		module: 'MMM-ActionButton',
		position: 'top_right',
		config: {
			action: 'hideall', 
			command: '',
			...
		}
	}
	```

## Config Options
### `text`
* Description : the text displayed in the button
* Default : `'Toggle all'`
### `action`
* Description : The action to do when the button is pressed.
* Possible values :
	* `toggleall` : Hide or show all other modules
	* `hideall`	: Hide all other modules
	* `showall` : Show all other modules
	* `exec` : Execute a command
* Default : `'toggleall'`
### `command`
* Description : The command to execute if the action is `exec`.