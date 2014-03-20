
module RTC_Client {

    export interface IMediaInfo {
        /**
         *启用音频
         */
        audio: boolean;
        /**
         *启用视频
         */
        video: boolean;
    }

    export interface IPeerConnection {

        onicecandidate: (event) => void;

        onaddstream: (event) => void;

        setRemoteDescription: (conf) => void;

        setLocalDescription: (conf) => void;
    }

    export function getUserMedia(mediaInfo: IMediaInfo, success: (stream:any) => void, error?: (error) => void) {
        return (navigator['getUserMedia'] ||
            navigator['webkitGetUserMedia'] ||
            navigator['mozGetUserMedia'] ||
            navigator['msGetUserMedia']).apply(navigator, arguments);
    }

    export class PeerConnection  {
        constructor(conf?) {
            return ((window['PeerConnection'] ||
                window['webkitPeerConnection'] ||
                window['webkitRTCPeerConnection'] ||
                window['mozRTCPeerConnection']).call(window,conf));
        }
    }
}


interface IMediaInfo {
    /**
     *启用音频
     */
    audio: boolean;
    /**
     *启用视频
     */
    video: boolean;
}

class RTC {

    getUserMedia: (mediaInfo: IMediaInfo, success: (stream: any) => void, error?: (error) => void) => void;

    PeerConnection: any;

    constructor() {

        this.getUserMedia = function() {
            return (navigator['getUserMedia'] ||
                navigator['webkitGetUserMedia'] ||
                navigator['mozGetUserMedia'] ||
                navigator['msGetUserMedia']).apply(navigator, arguments);
        }

        this.PeerConnection = (window['PeerConnection'] ||
        window['webkitPeerConnection'] ||
        window['webkitRTCPeerConnection'] ||
        window['mozRTCPeerConnection']);
    }

    createLocalMediaStream(options: { video: boolean; audio: boolean; success: (stream: any) => void;error?: (error) => void}) {
        this.getUserMedia({ video: options.video, audio: options.audio }, function (stream) {
            options.success(stream);
        }, function (error) {
            options.error(error);
        });
    }

    getRemoteMediaStream() {

    }

    createPeerConnection() {

    }
}
