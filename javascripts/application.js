"use strict";
var Bzik = Bzik || {};

Bzik.app = {
    init: function () {
        var canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
        this.director = new CAAT.Director().initialize(700, 500, canvas);
    },

    start: function () {
        this.initStartScene();
        CAAT.loop(60);
    },

    initStartScene: function () {
        var that = this;
        Bzik.startScene.init(Bzik.app.director);
        Bzik.startScene.onStartClick = function (event) {
            that.initGameScene();
        };
    },

    initGameScene: function () {
        Bzik.gameScene.init(Bzik.app.director); 
        this.director.switchToNextScene(1000, false, true);
    }
};


window.addEventListener('load', function () {
    Bzik.app.init(); 
    Bzik.app.start();
}, false);

