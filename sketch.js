function setup() {
    createCanvas(900, 600);
    background(255, 204, 0);
    ellipseMode(CENTER);
    rectMode(CENTER);
    story;
}

function draw() {
    snowMan.display();
    snowGirl.display();
    story.display();
}


//title
var story = {
    display: function () {
        var title = "Mr.snow man & Ms.snow girl";
        textSize(40);
        fill('white');
        text(title, width / 5, 50);

    }

}


//snow man
var snowMan = {
    display: function () {
        body('white');
        eyes('');
        nose('');
        mouth('');
        arms('');
    }
};

//snow girl
var snowGirl = {
    display: function () {
        bodyGirl('pink');
        eyesGirl();
        noseGirl();
        mouthGirl();
        armsGirl();

    }
};

function body(color) {
    colorMode(RGB);
    fill(color);
    noStroke();

    ellipse(400, 430, 140);

    ellipse(400, 350, 100);

    ellipse(400, 290, 75);
}

function bodyGirl(color) {
    colorMode(RGB);
    fill(color);
    noStroke();

    ellipse(600, 430, 140);

    ellipse(600, 350, 100);

    ellipse(600, 290, 75);
}

function eyes(color) {
    fill(0);
    noStroke();

    ellipse(385, 285, 10);
    ellipse(415, 285, 10);
}

function eyesGirl(color) {
    fill(0);
    noStroke();

    ellipse(585, 285, 10);
    ellipse(615, 285, 10);
}

function nose(color) {
    fill(240, 110, 0);
    triangle(398, 300, 398, 290, 415, 295);
}

function noseGirl(color) {
    fill(240, 110, 0);
    triangle(598, 300, 598, 290, 615, 295);
}


function mouth(color) {
    fill(0);
    ellipse(380, 305, 8);
    ellipse(388, 310, 8);
    ellipse(397, 312, 8);
    ellipse(406, 312, 8);
}

function mouthGirl(color) {
    fill(0);
    ellipse(580, 305, 8);
    ellipse(588, 310, 8);
    ellipse(597, 312, 8);
    ellipse(606, 312, 8);
}

function arms(color) {
    stroke(0);
    line(330, 310, 350, 450);
}

function armsGirl(color) {
    stroke(0);
    line(700, 310, 650, 450);
}
