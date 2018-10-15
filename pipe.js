const imageWidth = 378, imageHeight = 264;
const SURREALIST_TEXT = "Ceci n'est pas une pipe."
let FONT;

function setup() {
    createCanvas(378, 264);
}

let fontSize = 0.1;
let ANIMATE = false;

const boxLeftBound = 39, boxRightBound = 349, boxTopBound = 34, boxBottomBound = 184;

// (194, 109);
let pipeOriginX = boxLeftBound + (boxRightBound - boxLeftBound) / 2; 
let pipeOriginY = boxBottomBound + (boxTopBound - boxBottomBound) / 2;


// Note: 
// the pipe drawing is not parameterized, because it's part of the background and doesn't move. 


function pipe(x, y, size) {
    //background(254, 246, 209);
    fill(216, 193, 152)
    
    push();
        translate(x, y);
        scale(size);

        ellipse(-115, -68, (119 - 39), 14)
        fill(117, 90, 74)
        ellipse(-115, -68, (107 - 54), 6)

        
        // pipe outline
        fill(82, 43, 34);
        beginShape();
            vertex(-155, -68);
            bezierVertex(-174, 5, -159, 51, -143, 59);
            // shared
            bezierVertex(-107, 81, -85, 76, -64, 75);
            bezierVertex(-6, 56, 20, -9, 62, -23);
            bezierVertex(76, -29, 109, -44, 155, -51);
            //end shared
            
        //unique
            bezierVertex(163, -51, 168, -69, 150, -66);
            bezierVertex(94, -66, 65, -57, 4, -24)
            bezierVertex(-25, -3, -51, 11, -66, 12);
            //end unique
            bezierVertex(-66, -21, -60, 6, -75, -68);
            // unique
            bezierVertex(-103, -55, -129, -59, -155, -68);
        endShape();


        // black shading
        fill(15, 16, 11);
        beginShape();
            vertex(-143, 59);
            //shared
            bezierVertex(-107, 81, -85, 76, -64, 75);
            bezierVertex(-6, 56, 20, -9, 62, -23);
            bezierVertex(76, -29, 109, -44, 155, -51);
            // end shared
            //unique
            bezierVertex(98, -57, 36, -24, 18, -9);
            bezierVertex(-2, 21, -44, 33, -74, 36);
            bezierVertex(-64, 20, -66, 17, -66, 12);
            //end unique
            vertex(-66, 12);
            bezierVertex(-66, -21, -60, 6, -75, -68);
            // unique
            bezierVertex(-89, -58, -98, -59, -104, -59);
            bezierVertex(-88, 11, -111, 57, -143, 59);
            // end unique
        endShape(CLOSE);

        fill(114, 64, 46);

        beginShape();
            vertex(-104, -59);
            bezierVertex(-88, 11, -111, 57, -143, 59);
            bezierVertex(-153, 53, -163, 31, -156, 37);
            bezierVertex(-136, 20, -127, -5, -120, -61);
            bezierVertex(-115, -59, -109, -60, -104, -61);
        endShape();



        push();
            strokeWeight(20);
            stroke(166, 120, 86);
            bezier(-139, -54, -144, -35, -143, -7, -144, 1);
        pop();

        push();
            strokeWeight(10);
            stroke(221, 192, 176);
            bezier(-139, -57, -144, -35, -143, -7, -144, 1);
        pop();

        push();
            textSize(fontSize)
            textAlign(CENTER);
            textFont('Georgia');
        
        
            text(SURREALIST_TEXT, 0, 120);
        pop();
        if (ANIMATE) {
            if (fontSize < 20) {
                fontSize += 0.2;
            }
        }
    pop();
}

const inContainingBox = (mouseX, mouseY) => mouseX > boxLeftBound && mouseX < boxRightBound &&
 mouseY > boxTopBound && mouseY < boxBottomBound;
 

function mouseReleased() {
    console.log(inContainingBox(mouseX, mouseY));
    if (inContainingBox(mouseX, mouseY)) {
        ANIMATE = !ANIMATE;
    }
}
