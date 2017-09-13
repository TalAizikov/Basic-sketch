function setup() {
    createCanvas(400,400);
    console.log("Check,Check");
}

function draw() {
    background (50,100);
    fill(10,100,200);
    ellipse(mouseX, mouseY, 50, 50);
}
var randomShape = Math.floor(Math.random() * 2) + 1;
if (randomShape === 1) {
    function draw() {
        ellipse(50,50,50,50);
    }
}
else  {
    function draw() {
        rect(50,50,50,50);
    }
}
