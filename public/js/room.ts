///<reference path="../../lib/tslib/jquery.d.ts" />
///<reference path="./RTC.ts" />

declare var io: any;

; (function (win: Window, doc: Document, $: JQueryStatic,io) {

    $(function () {
        var rtc = new RTC();
        var localVideo = <HTMLVideoElement>doc.querySelector("#localVideo");
        rtc.createLocalMediaStream({
            video: true,
            audio: true,
            success: function (stream) {
                localVideo.src = URL.createObjectURL(stream);
            },
            error: function (error) {
                console.log("getUserMedia error");
                throw error;
            }
        });


        var socket = io.connect('http://localhost:3000');

        socket.on('connected', function (data) {
            console.log(data);
        });
    });

})(window,document,jQuery,io);