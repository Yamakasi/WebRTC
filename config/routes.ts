
///<reference path='../lib/tslib/node.d.ts' />
///<reference path='../lib/tslib/express.d.ts' />

import Example = require('../app/controllers/example_controller');
import Room = require('../app/controllers/room_controller');


export function init(app: Express) {

    app.get('/example', Example.index);

    app.get('/room', Room.index);

    app.get('/room/:id', Room.show);

}