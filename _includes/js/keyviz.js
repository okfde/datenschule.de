$(document).ready(function () {

	var speed = 30000;
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
	var bus_path = s.circlePath(500, 370, 256).attr({fill: "none", stroke: "none"});
	var bus_pathLength = Snap.path.getTotalLength(bus_path);
	var bus = s.select('.bus');

	var moveBus = function (movePoint) {
		bus.transform('t' + parseInt(movePoint.x - (760)) + ',' + parseInt(movePoint.y - 344) + 'r' + (movePoint.alpha - 266));
	};


	var collisioncache = [];
	var SPRITES = {
		HOUSE: 0,
		LANTERN: 1
	};

	var init = function () {

		var houses = s.selectAll('.house');
		var houses_shapes = s.selectAll('.house .shape');
		var lanterns = s.selectAll('.lantern');
		var lanterns_shapes = s.selectAll('.lantern line');
		for (var pos = 0; pos <= bus_pathLength; pos += 4) {
			var movePoint = Snap.path.getPointAtLength(bus_path, pos);
			moveBus(movePoint);
			var bus_bbox = bus.getBBox();
			houses.forEach(function (house, i) {
				if (!house.cache) {
					var shape = houses_shapes[i];
					var intersects = Snap.path.isPointInside(shape, movePoint.x, movePoint.y);
					if (intersects) {
						if (!shape.cache) shape.cache = {min: pos, max: 0, type: SPRITES.HOUSE, count: 0};
						shape.cache.max = pos;
					} else {
						house.cache = shape.cache;
						collisioncache.push(house);
					}
				}
			});
			lanterns.forEach(function (lantern, i) {
				if (!lantern.cache) {
					var shape = lanterns_shapes[i];
					var intersects = Snap.path.isBBoxIntersect(shape.getBBox(), bus_bbox);
					if (intersects) {
						if (!shape.cache) shape.cache = {min: pos, max: 0, type: SPRITES.LANTERN, count: 0};
						shape.cache.max = pos;
					} else {
						lantern.cache = shape.cache;
						collisioncache.push(lantern);
					}
				}
			});
		}

		moveBus(Snap.path.getPointAtLength(bus_path, 0));
	};

	moveBus(Snap.path.getPointAtLength(bus_path, 0));

	var highlight = function (movePoint, pos) {
		collisioncache.forEach(function (obj) {
			if ((pos >= obj.cache.min) && (pos <= obj.cache.max)) {
				if (!obj.highlighted) {
					obj.addClass('highlight');
					obj.highlighted = true;
					obj.cache.count++;
				}
			} else {
				if (obj.highlighted) {
					if ((obj.cache.type !== SPRITES.HOUSE) || (obj.cache.count % 2 === 0))
						obj.removeClass('highlight');
					obj.highlighted = false;
				}
			}
		});
	};

	var driving = null;
	var paused = false;
	var drive = function () {
		driving = Snap.animate(0, bus_pathLength, function (value) {
			var movePoint = Snap.path.getPointAtLength(bus_path, value);
			moveBus(movePoint);
			highlight(movePoint, value);
		}, speed, null, function () {
			setTimeout(drive, 0);
		});
	};

	var startstop = function () {
		if (!driving) drive();
		else {
			if (paused) driving.resume();
			else driving.pause();
			paused = !paused;
		}
	};

	bus.click(startstop);

	setTimeout(function () {
		init();
		setTimeout(function () {
			startstop();
		}, 200);
	}, 1000);
});

