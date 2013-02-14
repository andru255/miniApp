/*
* miniApp v0.5.4
*/
var miniApp = (function () {
    "use strict";
    var mods = {};
    return {
        /*path.module*/
        addModule: function (name, foo) {
            if (mods[name] === undefined) {
                mods[name] = foo;
            }else{
                throw 'module "'+name+'" is already defined, Please set it again';
            }
        },
        getModule: function(name) {
            if (name && mods[name]) {
                return mods[name];
            }else{
                throw 'param "Name" is not defined or module not found';
            }
        },
        runModule: function (item, st) {
                if (mods[item] !== undefined) {
                    if (mods[item].hasOwnProperty('init')) {
                        if(st == undefined){
                            var st = {};
                        }
                        st.moduleName = item;
                        this.getModule(item).init(st);
                    } else {
                        throw 'init function is not defined in the module "'+mods[item]+'"';
                    }
                } else {
                    throw 'module "'+item+'" is not defined or module not found';
                }
        },
        runModules: function (modules) {
            for (var item in modules) {
                if (mods[modules[item]] !== undefined) {
                    if (mods[modules[item]].hasOwnProperty('init')) {
                        this.getModule(modules[item]).init();
                    } else {
                        throw 'init function is not defined in the module "'+modules[item]+'"';
                    }
                } else {
                    throw 'module "'+modules[item]+'" is not defined or module not found';
                }
            }
        }
    }
})();