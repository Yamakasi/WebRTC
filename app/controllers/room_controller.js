///<reference path='../../lib/tslib/node.d.ts' />
///<reference path='../../lib/tslib/express.d.ts' />
var Room = (function () {
    function Room(req, res) {
        this.req = req;
        this.res = res;
    }
    Room.prototype.index = function () {
        this.res.render('roomList.html', {});
    };

    Room.prototype.show = function () {
        var roomId = this.req.params.id;
        this.res.render('room.html', {
            roomId: roomId
        });
    };
    return Room;
})();
exports.Room = Room;

function index(req, res) {
    return new Room(req, res).index();
}
exports.index = index;

function show(req, res) {
    return new Room(req, res).show();
}
exports.show = show;
