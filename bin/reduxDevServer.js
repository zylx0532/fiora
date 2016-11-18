const remotedev = require('remotedev-server');
const config = require('../config/config');

remotedev({ hostname: 'localhost', port: config.reduxDevPort });
