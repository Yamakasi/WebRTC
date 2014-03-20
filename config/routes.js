///<reference path='../lib/tslib/node.d.ts' />
///<reference path='../lib/tslib/express.d.ts' />
var Example = require('../app/controllers/example_controller');
var Room = require('../app/controllers/room_controller');

function init(app) {
    app.get('/example', Example.index);

    app.get('/room', Room.index);

    app.get('/room/:id', Room.show);
}
exports.init = init;
