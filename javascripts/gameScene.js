"use strict";
var Bzik = Bzik || {};

Bzik.gameScene = {
    init: function (director) {
        this.scene = director.createScene();
        this.width = director.width;
        this.height = director.height;

        this._createBackground();
        this._createActor();
    },

    _createBackground: function () {
        var bg = new CAAT.ActorContainer().
                setBounds(0, 0, this.width, this.height).
                setFillStyle('#f00');

        bg.mouseClick = function (event) {
            console.log(event);
        };

        this.scene.addChild(bg);
    },

    _createActor: function () {
        var insect = new CAAT.ShapeActor().
                setSize(80, 50).
                setShape(CAAT.ShapeActor.prototype.shape_rectangle).
                setFillStyle('#aaa');

        var path = new CAAT.LinearPath().  setInitialPosition(0, this.height/2).
                setFinalPosition(this.width, this.height/2);

        var pathBehavior = new CAAT.PathBehavior().
                setPath(path).
                setFrameTime(0, 5000).
                setCycle(true).
                setAutoRotate( true ).
                setTranslation(insect.width/2, insect.height/2).
                setPingPong();

        var count = 0;
        insect.mouseClick = function () {
            count += 1;
            console.log('click: ', count);
            this.setFillStyle('#fff');
        };

        insect.addBehavior(pathBehavior);
        this.scene.addChild(insect);
    }
};
