/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"accenturetutorial3.ui5./tutorial3/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
