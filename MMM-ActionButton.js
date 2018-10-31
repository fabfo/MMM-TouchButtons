

Module.register('MMM-ActionButton', {
    // Default module config.
    defaults: {
        buttons: [
            {
                text: 'Toggle all',
                action: 'toggleall'
            }
        ]
    },

    getStyles: function () {
        'use strict';
        return ['MMM-ActionButton.css', 'font-awesome.css'];
    },

    // Override dom generator.
    getDom: function () {
        var wrapper = document.createElement('div');
        for (let index = 0; index < this.config.buttons.length; index++) {
            const button = this.config.buttons[index];

            var buttonElm = document.createElement('div');
            buttonElm.className = 'button';
            buttonElm.style = 'z-index: 10000;'
            buttonElm.id = `${this.identifier}-button-${index}`;
            if (button.icon) {
                var icon = document.createElement("i");
                icon.className = `fa ${button.icon}`;
                icon.innerHTML = '&nbsp;';
                buttonElm.appendChild(icon);
            }
            if (button.text) {
                var text = document.createElement("span");
                text.innerHTML = button.text;
                buttonElm.appendChild(text);
            }
            buttonElm.addEventListener('click', this.onTouch.bind(this, index));
            wrapper.appendChild(buttonElm);
        }
        return wrapper;
    },

    start: function () {
        Log.info('Starting module: ' + this.name);
    },

    onTouch: function (buttonIdx) {
        const button = this.config.buttons[buttonIdx];
        Log.info(`${this.name} - button ${buttonIdx} touched - action "${button.action}"`);
        switch (button.action) {
            case 'hideall':
                MM.getModules().exceptModule(this).enumerate(function (module) {
                    module.hide(1000, function () {
                        //Module hidden.
                    });
                });
                break;

            case 'showall':
                MM.getModules().exceptModule(this).enumerate(function (module) {
                    module.show(1000, function () {
                        //Module displayed.
                    });
                });
                break;

            case 'toggleall':
                MM.getModules().exceptModule(this).enumerate(function (module) {
                    if(module.hidden) {
                        module.show(1000, function () {
                            //Module hidden.
                        });
                    }
                    else {
                        module.hide(1000, function () {
                            //Module hidden.
                        });
                    }
                });
                break;

            case 'exec':
                this.sendSocketNotification('BUTTON_PRESSED', button);
                break;

            default:

                break;
        }
    }
});