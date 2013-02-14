
/*statement of my catalog*/
var modules = {
	'index': {
		controllers: {
			'index': {
				actions: {
					'add-comment' : function(){
						console.log('ejecutando el modulo "index/index/add-comment" y pasandole 2 parametros');
						miniApp.runModule(route.entire(), { param1: 'parametro 1', param2: 'parametro 2' });
					},
					'default' : function(path){
						/*
						//miniApp.runModule(path.module+'/'+path.controller+'/index', {});
						aqui se ejecuta un modulo "index" o algun modulo por defecto para este controller
						*/
					}
				}
			},
			'default' : {
				actions: {
					'default' : function(path){
						//miniApp.runModule(path.module+'/index/index', {});
					}
				}
			}
		}
	},
	'default': {
		controllers: {
			'default' : {
				actions: {
					'default' : function(){
						miniApp.runModule('default', {});
					}
				}
			}
		}
	}
}




/*loading of actions according to route.entire()*/
for (module in modules) {
	if (route.module == module && route.module != '') {
	 	for (controller in modules[module].controllers) {
	 		if (route.controller == controller && route.controller != '') {
	 			for (action in modules[module].controllers[controller].actions) {
	 				if (route.action == action && route.action != '') {
	 					modules[module].controllers[controller].actions[action]();
	 				}else{
	 					if (action == 'default') {	 						
	 						modules[module].controllers[controller].actions['default']({module: module, controller: controller});
	 					}
	 				}
	 			}
	 		}else{
				if (controller == 'default') {					
					modules[module].controllers['default'].actions['default']({module: module});
				}
			}
	 	}
	}	
}
