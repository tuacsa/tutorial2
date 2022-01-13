/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["accenture/tutorial3/ui5/tutorial3/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
