function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	
	for(var i = 0; i < random(1, 10); i++){
		myIdek.push(new Idek(1));
	}
	
	for(var i = 0; i < myIdek.length; i++){
		var ex = random(10, width-10);
		var ey = random(10, height-10);
		var redBlah = random(1, 205);
	var greenBlah = random(1, 205);
	var blueBlah = random(1, 205);
	var mouth = random(10, 90)
	var eye = random(5, 40)
	var siz = random (1, 200)
	var hatW = random(10, 50)
	var hatH = random(20, 100)
	
	noStroke()
	fill(redBlah, greenBlah, blueBlah);
  ellipse(ex, ey, 100, 100);
	fill(redBlah+50, greenBlah+50, blueBlah+50);
	ellipse(ex, ey, mouth, mouth);
	fill(redBlah, greenBlah, blueBlah);
	ellipse(ex, ey, mouth-10, mouth-10);
	rect(ex-50, ey-50, 100, 50);
	fill(redBlah+50, greenBlah+50, blueBlah+50);
	ellipse(ex-27, ey-27, eye, eye);
	ellipse(ex+27, ey-27, eye, eye);
	textSize(25)
	text("budee "+(i+1), ex-50, ey+75)
	
	fill(redBlah+50, greenBlah+50, blueBlah+50);
	triangle(ex-hatW, ey-50, ex+hatW, ey-50, ex, ey-50-hatH);
}

function draw() {
}

}
