var myIdek = [];
var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 5, 3, 1, 2, 2, 2, 3];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	
	for(var i = 0; i < random(1, 10); i++){
		myIdek.push(new Idek(1));
	}
	
		for(var i = 0; i < myIdek.length; i++){
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
		ellipse(this.x, this.y, 100, 100);
		fill(redBlah+50, greenBlah+50, blueBlah+50);
		ellipse(this.x, this.y, mouth, mouth);
		fill(redBlah, greenBlah, blueBlah);
		ellipse(this.x, this.y, mouth-10, mouth-10);
		rect(this.x-50, this.y-50, 100, 50);
		fill(redBlah+50, greenBlah+50, blueBlah+50);
		ellipse(this.x-27, this.y-27, eye, eye);
		ellipse(this.x+27, this.y-27, eye, eye);
		textSize(25)
		text("budee "+(how+1), this.x-50, this.y+75)
	
		fill(redBlah+50, greenBlah+50, blueBlah+50);
		triangle(this.x-hatW, this.y-50, this.x+hatW, this.y-50, this.x, this.y-50-hatH) 
}
	}
}

function draw() {
	

}
