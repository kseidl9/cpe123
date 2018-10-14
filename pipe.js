const imageWidth = 378, imageHeight = 264;
const SURREALIST_TEXT = "Ceci n'est pas une pipe."
let FONT;

function setup() {
    createCanvas(378, 264);
}

let fontSize = 0.1;
let ANIMATE = false;
let ANIMATION_STARTED = false;

// Note: 
// the pipe drawing is not parameterized, because it's part of the background and doesn't move. 
function draw() {
    background(254, 246, 209);
    fill(216, 193, 152)
    ellipse(79, 41, (119 - 39), 14)
    fill(117, 90, 74)
    ellipse(79, 41, (107 - 54), 6)

    fill(82, 43, 34);

    // pipe outline
    beginShape();
    vertex(39, 41);
    bezierVertex(20, 114, 35, 160, 51, 168);

    // shared
    bezierVertex(87, 190, 109, 185, 130, 184);
    bezierVertex(188, 165, 214, 100, 256, 86);
    bezierVertex(270, 80, 303, 65, 349, 58);
    //end shared
    
   //unique
    bezierVertex(357, 58, 362, 40, 344, 43);
    bezierVertex(288, 43, 259, 52, 198, 85)
    bezierVertex(169, 106, 143, 120, 128, 121);
    //end unique
    bezierVertex(128, 88, 134, 115, 119, 41);
    // unique
    bezierVertex(91, 54, 65, 50, 39, 41);
    //end unique 
    endShape();


     // black shading
    fill(15, 16, 11);
    beginShape();
        vertex(51, 168);
        //shared
        bezierVertex(87, 190, 109, 185, 130, 184);
        bezierVertex(188, 165, 214, 100, 256, 86);
        bezierVertex(270, 80, 303, 65, 349, 58);
        // end shared
        //unique
        bezierVertex(292, 52, 230, 85, 212, 100);
        bezierVertex(192, 130, 150, 142, 120, 145);
        bezierVertex(130, 129, 128, 126, 128, 121);
        //end unique
        vertex(128, 121);
        bezierVertex(128, 88, 134, 115, 119, 41);
        // unique
        bezierVertex(105, 51, 96, 50, 90, 50);
        bezierVertex(106, 120, 83, 166, 51, 168);
        // end unique

    endShape(CLOSE);

    fill(114, 64, 46);
    beginShape();
    vertex(90, 50);
    bezierVertex(106, 120, 83, 166, 51, 168);
    bezierVertex(41, 162, 31, 140, 38, 146);
    bezierVertex(58, 129, 67, 104, 74, 48);
    bezierVertex(79, 50, 85, 49, 90, 48);
    endShape();



    push();
    strokeWeight(20);
    stroke(166, 120, 86);
    bezier(55, 55, 50, 74, 51, 102, 50, 110);
    pop();

    push();
    strokeWeight(10);
    stroke(221, 192, 176);
    bezier(55, 52, 50, 74, 51, 102, 50, 110);
    pop();

	push();
	textSize(fontSize)
	textAlign(CENTER);
	textFont('Georgia');
   
   
	text(SURREALIST_TEXT, imageWidth / 2, 7 * imageHeight / 8);
	pop();
	if (ANIMATE) {
		if (fontSize < 20) {
			fontSize += 0.2;
		}
	}
}

const boxLeftBound = 39, boxRightBound = 349, boxTopBound = 34, boxBottomBound = 184;

const inContainingBox = (mouseX, mouseY) => mouseX > boxLeftBound && mouseX < boxRightBound &&
 mouseY > boxTopBound && mouseY < boxBottomBound;
 

function mouseReleased() {
    if (inContainingBox(mouseX, mouseY)) {
        ANIMATE = !ANIMATE;
    }
}
