import config from '../../config/config';

let socketClient = null;
let platformSocketParam = { };
if (window.navigator.product === 'ReactNative') {
    socketClient = require('../../node_modules/socket.io-client/socket.io');

    window.navigator.userAgent = 'react-native';
    window.location = {};
    window.location.protocol = 'http:';
    platformSocketParam = { jsonp: false };
}
else {
    socketClient = require('socket.io-client');
}

function createInterface(method) {
    return function (path, data, cb) {
        if (this.token !== '') {
            data.token = this.token;
        }
        this.emit('message', { method: method, path: path, data: data }, cb);
    };
}

function setToken(newToken) {
    this.token = newToken;
}

function socketWrap(socket) {
    socket.token = '';
    socket.get = createInterface('GET');
    socket.post = createInterface('POST');
    socket.put = createInterface('PUT');
    socket.delete = createInterface('DELETE');
    socket.setToken = setToken;
    return socket;
}

const serverUrl = process.env.NODE_ENV === 'production' ?
    `http://${config.server}:${config.port}/` :
    `http://${config.localServer}:${config.localPort}/`;
export default socketWrap(socketClient(serverUrl, platformSocketParam));
