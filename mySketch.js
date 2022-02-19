import Idek from 'Idek.js';

var myIdek = [];
var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 5, 3, 1, 2, 2, 2, 3];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	
	for(var i = 0; i < random(1, 10); i++){
		myIdek.push(new Idek(1));
	}
	
	for(var i = 0; i < myIdek.length; i++){
		myIdek[i].display(i);
	}
}

function draw() {
	

}
