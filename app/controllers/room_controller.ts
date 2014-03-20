
///<reference path='../../lib/tslib/node.d.ts' />
///<reference path='../../lib/tslib/express.d.ts' />

export class Room {

    constructor(public req: ExpressServerRequest, public res: ExpressServerResponse) {
    }

    index() {
        this.res.render('roomList.html', {});
    }

    show() {
        var roomId = this.req.params.id;
        this.res.render('room.html', {
            roomId: roomId
        });            
    }
}


export function index(req: ExpressServerRequest, res: ExpressServerResponse) {
    return new Room(req, res).index();
}

export function show(req: ExpressServerRequest, res: ExpressServerResponse) {
    return new Room(req, res).show();
}

