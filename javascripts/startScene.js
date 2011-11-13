"use strict";
var Bzik = Bzik || {};

Bzik.startScene = {
    init: function (director) {
        this.scene = director.createScene();
        this.width = director.width;
        this.height = director.height;

        this._createBackground();
        this._createButtons(); 
    },

    _createBackground: function () {
        var bg = new CAAT.ActorContainer().
                setBounds(0, 0, this.width, this.height).
                setFillStyle('#fff');
        this.scene.addChild(bg);
    },

    _createButtons: function () {
        var startButton = new CAAT.ShapeActor().
            centerAt(this.width/2, this.height/2).
            setSize(80, 80).
            setShape(CAAT.ShapeActor.prototype.shape_rectangle).
            setFillStyle('#999999');

        var that = this;
        startButton.mouseClick = function (event) {
            that.onStartClick(event);
        };

        this.scene.addChild(startButton);
    }
};
