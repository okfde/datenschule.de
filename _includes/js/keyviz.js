$(document).ready(function () {

	var speed = 50000;
	// var speed = 6000;

	Snap.plugin(function (Snap, Element, Paper, global) {
		Paper.prototype.circlePath = function (cx, cy, r) {
			var p = "M" + cx + "," + cy;
			p += "m" + r + ",0";
			// rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y
			p += "a" + r + "," + r + " 0 1,1 " + -(r * 2) + ",0";
			p += "a" + r + "," + r + " 0 1,1 " + (r * 2) + ",0";
			return this.path(p, cx, cy);
		};
	});

	var s = Snap("#keyviz");
	var path = s.circlePath(500, 370, 256).attr({fill: "none", stroke: "none"});
	var bus = s.select('.bus');
	var movePoint = Snap.path.getPointAtLength(path, 0);
	var busTrans = 't' + parseInt(movePoint.x - (760)) + ',' + parseInt(movePoint.y - 344) + 'r' + (movePoint.alpha - 266);
	bus.transform(busTrans);

	var pathLength = Snap.path.getTotalLength(path);
	var driving = null;
	var paused = false;
	var drive = function () {
		driving = Snap.animate(0, pathLength, function (value) {
			var movePoint = Snap.path.getPointAtLength(path, value);
			var busTrans = 't' + parseInt(movePoint.x - (760)) + ',' + parseInt(movePoint.y - 344) + 'r' + (movePoint.alpha - 266);
			bus.transform(busTrans);
		}, speed, null, function () {
			drive();
		});
	};
	bus.click(function () {
		if (!driving) drive();
		else {
			if (paused) driving.resume();
			else driving.pause();
			paused = !paused;
		}
	});

});

