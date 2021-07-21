class Particle {
    constructor(x, y, r) {

        var options = {
            restitution: 0.4
        }
        this.r = r;

        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

        // console.log(this.body.position.y)
    }
    check() {
        if (this.body.position.y > 503 && this.body.position.y < 506) {
            score += 1
            if (this.body.position.x < 326) {
                score += 500
            }
            if (this.body.position.x > 326 && this.body.position.y < 568) {
                score += 300
            }
            if (this.body.position.x > 570) {
                score += 100
            }


        }
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }

};