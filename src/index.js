'use strict';

const isWsl = require('is-wsl');

const constants = require('./config/constants');
const linux = require('./linux');
const macos = require('./macos');
const windows = require('./windows');

const getplatform = () => {
    if (process.platform === constants.platforms.windows || isWsl)
        return windows;
    if (process.platform === constants.platforms.linux) return linux;
    if (process.platform === constants.platforms.macos) return macos;
    throw new Error('Unknown OS');
};

const platform = getplatform();

module.exports = {
    register: platform.register,
    checkifExists: platform.checkifExists
};
