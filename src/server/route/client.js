const Auth = require('../model/auth');

const clientRoute = {
    'GET /clients': function* () {
        const sockets = this.io.sockets.clients().sockets;
        const clients = [];
        for (const id in sockets) {
            if (Object.prototype.hasOwnProperty.call(sockets, id)) {
                clients.push(id);
            }
        }
        this.end(200, clients);
    },

    'GET /auths': function* () {
        const auths = yield Auth.find();
        this.end(200, auths);
    },
};

module.exports = clientRoute;
