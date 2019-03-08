var x = 100;
var y = 100;
var s = 100; // size
var o = 25; // offset
var title = "Mr.snow man & Ms.snow girl";

function setup() {
    createCanvas(900, 600);
    background(255, 204, 0);
    ellipseMode(CENTER);
    rectMode(CENTER);

    //title
    textSize(x / 2);
    fill('white');
    text(title, 10, 50);

    // snowman
    fill("white");

    //body
    noStroke();
    ellipse(x + o, y + o, s);
    ellipse(x + o, y + o * 5, s + o * 2);
    ellipse(x + o, y + o * 10, s + o * 4);

    //eyes
    fill("black");
    noStroke();
    ellipse(x + o / 2, y, s / o);
    ellipse(x + o * 1.5, y, s / o);

    //nose
    fill("orange");
    triangle(x + o, y + o, x + o * 2, y + o, x + o, y + o / 3);

    //mouth
    fill("black");
    ellipse(x, y + o, s / o - 10);
    ellipse(x + o / 4, y + o + 10, s / o - 10);
    ellipse(x + o * .5, y + o + 15, s / o - 10);
    ellipse(x + o * 1, y + o + 15, s / o - 10);

    //arm
    stroke(0);
    line(x - o, y + o * 6, x - o * 2, y + o * 2);


    x += 300;

    //snowwoman
    fill("pink")
    //body
    noStroke();
    ellipse(x + o, y + o, s);
    ellipse(x + o, y + o * 5, s + o * 2);
    ellipse(x + o, y + o * 10, s + o * 4);

    //eyes
    fill("black");
    noStroke();
    ellipse(x + o / 2, y, s / o);
    ellipse(x + o * 1.5, y, s / o);

    //nose
    fill("orange");
    triangle(x + o, y + o, x + o * 2, y + o, x + o, y + o / 3);

    //mouth
    fill("red");
    ellipse(x, y + o, s / o - 10);
    ellipse(x + o / 4, y + o + 10, s / o - 10);
    ellipse(x + o * .5, y + o + 15, s / o - 10);
    ellipse(x + o * 1, y + o + 15, s / o - 10);

    //arm
    stroke(0);
    line(x - o, y + o * 6, x - o * 2, y + o * 2);

}
