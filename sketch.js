function setup() {

	createCanvas(1500,1000);
	


}

function draw() {

background(255,204,0);
ellipseMode(CENTER);
rectMode(CENTER);
snowMan.display();
snowGirl.display();    

    
}

// global variables

var story = "Mr.snow man & Ms.snow girl";
var storyX;
var storyY;



//snow man
var snowMan = {
	display: function(){
		body('white');
		eyes('');
		nose('');
		mouth('');
		arms('');
       
	}
};

//snow girl

var snowGirl = {
	display: function(){
		body('pink');
		eyes();
		nose();
		mouth();
		arms();

	}
};

function body(color){
	colorMode(RGB);
  	fill(color);
  	noStroke();

	ellipse(400,430,140);

	ellipse(400,350,100);

	ellipse(400,290,75);
}

function eyes(color){
	fill(0);
	noStroke();

	ellipse(385,285,10);
	ellipse(415,285,10);
}

function nose(color){
	fill(240,110,0);
	triangle(398,300,398,290,415,295);
}

function mouth(color){
	fill(0);
	ellipse(380,305,8);
	ellipse(388,310,8);
	ellipse(397,312,8);
	ellipse(406,312,8);
}

function arms(color){
	stroke(0);
	line(330,310,350,450);
}









