"use strict";
cc._RF.push(module, '0f727RVfzZIHZgekF5A2mIS', 'ZIndexSet');
// script/ZIndexSet.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        zIndex: 0
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.node.zIndex = this.zIndex;
    }

});

cc._RF.pop();