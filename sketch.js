var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var score = 0;
var gamestate = "play"

var clicks = 0

function setup() {
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width / 2, height, width, 20);


    for (var k = 0; k <= width; k = k + 80) {
        divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
    }


    for (var j = 75; j <= width; j = j + 50) {

        plinkos.push(new Plinko(j, 75));
    }

    for (var j = 50; j <= width - 10; j = j + 50) {

        plinkos.push(new Plinko(j, 175));
    }

    for (var j = 75; j <= width; j = j + 50) {

        plinkos.push(new Plinko(j, 275));
    }

    for (var j = 50; j <= width - 10; j = j + 50) {

        plinkos.push(new Plinko(j, 375));
    }




}

function mousePressed() {
    if (gamestate != "end") {
        particles.push(new Particle(mouseX, 10, 10));
        clicks += 1
    }
}

function draw() {
    background("black");
    textSize(20)
    text("Score : " + score, 20, 30);
    Engine.update(engine);
    if (clicks >= 5) {
        gamestate = "end"
        textSize(100)
        text("Game over", 150, 250)
    }

    console.log(Particle.y)
    for (var i = 0; i < plinkos.length; i++) {

        plinkos[i].display();

    }
    console.log(score)
    console.log(mouseX)
    for (var j = 0; j < particles.length; j++) {
        if (particles != null) {
            particles[j].display();
            particles[j].check()
                //particles[j] = null
        }

    }
    for (var k = 0; k < divisions.length; k++) {

        divisions[k].display();
    }
    // i was too lazy here so i use a for loop
    for (var i = 15; i < 300; i += 80) {
        textSize(30)
        text("500", i, 525)
    }
    for (var i = 335; i < 500; i += 80) {
        textSize(30)
        text("300", i, 525)
    }
    for (var i = 572.5; i < 800; i += 80) {
        textSize(30)
        text("400", i, 525)
    }

}