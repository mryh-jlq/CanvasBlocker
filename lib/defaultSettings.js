"use strict";

var settings = {
};

(function(){
	browser.storage.onChanged.addListener(function(change, area){
		if (area === "local"){
			Object.keys(change).forEach(function(key){
				settings[key] = change[key].newValue;
			});
		}
	});
}());