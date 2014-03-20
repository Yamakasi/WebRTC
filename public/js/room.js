///<reference path="../../lib/tslib/jquery.d.ts" />
///<reference path="./RTC.ts" />

;
(function (win, doc, $, io) {
    $(function () {
        var rtc = new RTC();
        var localVideo = doc.querySelector("#localVideo");
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
})(window, document, jQuery, io);
