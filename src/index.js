'use strict';
const platform = require('os').platform();
switch(platform) {
    case 'darwin':
        module.exports = require('./platforms/darwin');
        break;
    case 'linux':
        module.exports = require('./platforms/linux');
        break;
    case 'win32':
        module.exports = require('./platforms/win32');
        break;
    default:
        module.exports = {
            sleep: () => {
                console.warn('Calling sleep on an unsupported system');
            },
            wake: () => {
                console.warn('Calling wake on an unsupported system');
            },
            supported: () => {
                return false;
            }
        }
        break;
}