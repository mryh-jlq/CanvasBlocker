
var createLog = function(){
	"use strict";
	
	var div = document.getElementById("log");
	
	return function createLog(){
		var logDiv = document.createElement("div");
		logDiv.className = "log";
		div.appendChild(logDiv);
		return function createLine(str){
			var logLine = document.createElement("div");
			logLine.className = "logLine";
			logDiv.appendChild(logLine);
			logLine.textContent = str;
			return function updateLine(str){
				logLine.textContent = str;
			};
		};
	};
}();

var log = createLog();

log("user agent equal between server and client: " + (window.serverUserAgent === navigator.userAgent));

Object.keys(navigator.__proto__).sort().forEach(function(property){
	"use strict";
	
	var value = navigator[property];
	if ((typeof value) === "string"){
		log(property + ": " + value);
	}
});
