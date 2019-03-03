var x = 20;
var y = 20;
var s = 20; // size

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


//text
var story = {
    display: function () {
        var title = "Mr.snow man & Ms.snow girl";
        textSize(x * 2);
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

    ellipse(x * 20, y * 22, s * 7);

    ellipse(x * 20, y * 18, s * 5);

    ellipse(x * 20, y * 14.5, s * 4);
}

function bodyGirl(color) {
    colorMode(RGB);
    fill(color);
    noStroke();

    ellipse(x * 30, y * 22, s * 7);

    ellipse(x * 30, y * 18, s * 5);

    ellipse(x * 30, y * 14.5, s * 4);
}

function eyes(color) {
    fill(0);
    noStroke();

    ellipse(x * 19.2, y * 14.2, s / 2);
    ellipse(x * 20.7, y * 14.2, s / 2);
}

function eyesGirl(color) {
    fill(0);
    noStroke();

    ellipse(x * 29.2, y * 14.2, s / 2);
    ellipse(x * 30.7, y * 14.2, s / 2);
}

function nose(color) {
    fill(240, 110, 0);
    triangle(x * 20, y * 15, x * 20, y * 14.5, x * 21, y * 14.7);
}

function noseGirl(color) {
    fill(240, 110, 0);
    triangle(x * 30, y * 15, x * 30, y * 14.5, x * 31, y * 14.7);
}


function mouth(color) {
    fill(0);
    ellipse(x * 19, y * 15.2, s / 2.5);
    ellipse(x * 19.4, y * 15.5, s / 2.5);
    ellipse(x * 19.9, y * 15.6, s / 2.5);
    ellipse(x * 20.5, y * 15.6, s / 2.5);
}

function mouthGirl(color) {
    fill("red");
    ellipse(x * 29, y * 15.2, s / 2.5);
    ellipse(x * 29.4, y * 15.5, s / 2.5);
    ellipse(x * 29.9, y * 15.6, s / 2.5);
    ellipse(x * 30.5, y * 15.6, s / 2.5);
}

function arms(color) {
    stroke(0);
    line(x * 16.5, y * 15.5, x * 17.5, y * 22.5);
}

function armsGirl(color) {
    stroke(0);
    line(x * 33, y * 15.5, x * 33, y * 22.5);
}
