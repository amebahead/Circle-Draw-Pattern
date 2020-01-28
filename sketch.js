// 미쳤다 미쳤어 109 : 11

var c1 = null;

function setup() {
	createCanvas(1200, 900);
	initCanvas();

	c1 = new MetaCircle(300, 200, 200, 109, false);
	c2 = new MetaCircle(700, 600, 200, 11, false);
}

function draw() {

	c1.drawCircle();
	c1.drawPoint();

	c2.drawCircle();
	c2.drawPoint();

	// Draw Metapo
	var metapoY = c1.getUniqY();
	var metapoX = c2.getUniqX();

	fill(255);
	ellipse(metapoX, metapoY, 5, 5);

	// draw guide line
	stroke('rgba(230,230,250, 0.1)');
	strokeWeight(1);
	line(c1.getUniqX(), c1.getUniqY(), metapoX, metapoY);
	line(c2.getUniqX(), c2.getUniqY(), metapoX, metapoY);
}


// init canvas
function initCanvas() {
	background(0);
}

// Circle Class
function MetaCircle(_x, _y, _diameter, _fast, _reverse) {
	var count = 0;

	var x = _x;
	var y = _y;
	var diameter = _diameter;
	var speed = _fast;
	var reverse = _reverse;

	var uniqX = 0;
	var uniqY = 0;

	this.getX = function() {
		return x;
	}

	this.getY = function() {
		return y;
	}

	this.getUniqX = function() {
		return uniqX;
	}

	this.getUniqY = function() {
		return uniqY;
	}

	this.drawCircle = function() {

		// Circle		
		stroke(150);
		strokeWeight(2);
		fill(0);
		ellipse(x, y, diameter, diameter);

		fill(255)
		ellipse(x, y, 5, 5);
	}

	this.drawPoint = function() {
		// apply speed
		var radi = radians(count * speed);

		var sinValue = 0;
		if (reverse === true) {
			sinValue = sin(radi) * (diameter / 2) * -1;
		} else {
			sinValue = sin(radi) * (diameter / 2);
		}

		var cosValue = cos(radi) * (diameter / 2);

		fill(255);
		ellipse(x + cosValue, y + sinValue, 7, 7);

		if (count > 360) {
			count = 0;
			// initCanvas();
		} else {
			count++;
		}

		// Draw Line - x,y to radian x,y
		fill(255);
		line(x, y, x + cosValue, y + sinValue);

		// Store unique value
		uniqX = x + cosValue;
		uniqY = y + sinValue;
	}
}