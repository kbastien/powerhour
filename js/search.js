var videoIDs = [
    'nGt_JGHYEO4',
    'p2cQSPRTdhg',
    'wzMrK-aGCug',
    'b-J95fYuVz4',
    'xvM3YwmDfwE',
    '-I-YY5p0uq8',
    'YWyHZNBz6FE',
    'PdfQtC2EZ1k',
    'avFq9errZCk',
    'AI0gk2KJeho',
    'TUj0otkJEBo',
    '8HYXw1vADFQ',
    'VN4upVaDFFs',
    'M37HHf099oM',
    'JXRN_LkCa_o',
    'BIBNPSsbZmk',
    'ui1JiOZ1zp4',
    'CccnAvfLPvE',
    'BhnQxhjT4hE', 
    '_Ht6gSClAzo',
    'k2rqUlYN1m8',
    '-KKbdErJkiY',
    'eU4ZvfkmOck',
    '-6jhuhsG-7w',
    'X8LUd51IuiA',
    '45Q4Zk3CN8k',
    'zzO4zqWQLvY',
    '-s7TCuCpB5c',
    'FlSbCKne7zE',
    'ae_Ev_lwpUg',
    'cC2ZgCEaLWs',
    'iXZxipry6kE',
    '6l7J1i1OkKs',
    'bbEoRnaOIbs',
    'e2QKlmMT8II',
    'atHekn9KE18',
    'xKkb13IU_DE',
    'cZaJYDPY-YQ',
    'iXZxipry6kE',
    'BiOmXeKyrxo',
    'gczBgNB-p1w',
    'qdsTUfDTEhQ',
    '98TLWIwiH28',
    'oQEhmT7AJ44',
    'vJwKKKd2ZYE',
    'rtodyi12q-4',
    'Z4RV2-YmwwM',
    'dA3Bxc3A5hA',
    'j5Z3KUOrhS0',
    'uQZMaG1eO74',
    'liZm1im2erU',
    'XbGs_qK2PQA',
    'oQEhmT7AJ44',
    '0pot44zodCc',
    'iXZxipry6kE',
    'tfRW88oBbbE',
    'Y34jC4I1m70',
    'gP4n1zyN4KY',
    'tOOPrBWIwBQ',
    'zNMuIPsz6lE'
];

var player, currentVideoId = 0;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '650',
        width: '100%',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
        }
    });
}

function onPlayerReady(event) {
    event.target.loadVideoById({'videoId': videoIDs[currentVideoId], 'startSeconds': 70, 'endSeconds': 130});
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        currentVideoId++;
        if (currentVideoId < videoIDs.length) {
            player.loadVideoById({'videoId': videoIDs[currentVideoId], 'startSeconds': 70, 'endSeconds': 130});
        }
    }
}