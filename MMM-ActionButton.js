

Module.register('MMM-ActionButton', {
    // Default module config.
    defaults: {
        text: 'Toggle all',
        action: 'toggleall'
    },

    getStyles: function () {
        "use strict";
        return ["MMM-ActionButton.css"];
    },

    // Override dom generator.
    getDom: function () {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = '<div id="' + this.identifier + '-button" class="button" style="z-index: 10000;">' + this.config.text + '</div>';
        wrapper.addEventListener('click', this.onTouch.bind(this));
        return wrapper;
    },

    start: function () {
        Log.info('Starting module: ' + this.name);
    },

    onTouch: function () {
        Log.info(this.name + ' touched');
        switch (this.config.action) {
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
                this.sendSocketNotification('BUTTON_PRESSED', { command: this.config });
                break;

            default:

                break;
        }
    }
});