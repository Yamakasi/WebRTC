var RTC_Client;
(function (RTC_Client) {
    function getUserMedia(mediaInfo, success, error) {
        return (navigator['getUserMedia'] || navigator['webkitGetUserMedia'] || navigator['mozGetUserMedia'] || navigator['msGetUserMedia']).apply(navigator, arguments);
    }
    RTC_Client.getUserMedia = getUserMedia;

    var PeerConnection = (function () {
        function PeerConnection(conf) {
            return ((window['PeerConnection'] || window['webkitPeerConnection'] || window['webkitRTCPeerConnection'] || window['mozRTCPeerConnection']).call(window, conf));
        }
        return PeerConnection;
    })();
    RTC_Client.PeerConnection = PeerConnection;
})(RTC_Client || (RTC_Client = {}));

var RTC = (function () {
    function RTC() {
        this.getUserMedia = function () {
            return (navigator['getUserMedia'] || navigator['webkitGetUserMedia'] || navigator['mozGetUserMedia'] || navigator['msGetUserMedia']).apply(navigator, arguments);
        };

        this.PeerConnection = (window['PeerConnection'] || window['webkitPeerConnection'] || window['webkitRTCPeerConnection'] || window['mozRTCPeerConnection']);
    }
    RTC.prototype.createLocalMediaStream = function (options) {
        this.getUserMedia({ video: options.video, audio: options.audio }, function (stream) {
            options.success(stream);
        }, function (error) {
            options.error(error);
        });
    };

    RTC.prototype.getRemoteMediaStream = function () {
    };

    RTC.prototype.createPeerConnection = function () {
    };
    return RTC;
})();
