"use strict";
cc._RF.push(module, '3c5e9FYHD9LxZWZ39udQFni', 'BackBtnCp');
// script/BackBtnCp.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...

    },

    onClick: function onClick() {
        //this.node.parent.destroy()
        cc.director.loadScene("gameScene");
    },

    // use this for initialization
    onLoad: function onLoad() {}

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();