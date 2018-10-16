var peach,sand,white,teal,blu,terracotta,skin,hair,mint;
var wavePosition,bubbleHeight,bubbleWidth;
var manX,manY,rot,waveY,waveUnderColor,waveStrokeColor,waveShadowColor,hiddenSand;
var clicked;
var translateX, translateY, sceneScale;
function setup(){
	createCanvas(450,600);
	peach = color(255,212,176);
	sand = color(242,183,118);
	white = color(214,232,224);
	teal = color(24,76,87);
	blu = color(24,176,232);
	terracotta = color(235,118,74);
	skin=color(235,157,117);
	hair = color(145,105,62);
	mint = color(196,229,212);
	manX = 48;
	manY = 250;
	rot = PI/3;
	waveY = 440;
	waveUnderColor = white;
	waveStrokeColor = white;
	waveShadowColor = white;
	hiddenSand = white;
	clicked = false;
	sceneScale = 1;
	translateX=0;
	translateY=0;
}
function draw(){
	scale(sceneScale);
	translate(translateX,translateY);
	background(sand);
	sky();
	lightHouse();
	redRock();
	ocean();
	push();
		translate(manX,manY);
		oceanMan();
	pop();
	if (mouseX > 47 && mouseX < 85 && mouseY > 270 && mouseY<500 && clicked){
		if (manX < 180){
			manX+=4;
		}
		else if ( manX > 179 && clicked){
			if (waveY > 360){
				for (var r = 4; r <=12; r+=4){
					rot -= .025;
					waveY -= 2;
					waveUnderColor = teal;
					waveStrokeColor = 150;
					waveShadowColor = 110;
					hiddenSand = sand;
				}
				
			} else if (sceneScale < 12.5){
				sceneScale+=.5;
				translateX-=11;
				translateY-=18;
			}
			else {
				frameRate(60);
				ANIMATE=true;
			} 	
		}
	}
}
function mouseClicked() {
	clicked = true;	
}
function fillAndStroke(x,y,z){
        fill(x,y,z);
        stroke(x,y,z);
}
function setGradient(x,y,w,h,c1,c2){
	for (var i = y; i <= y+h; i++) {
		var inter = map(i,y,y+h,0,1);
		var c = lerpColor(c1,c2,inter);
		stroke(c);
		line(x,i,x+w,i);
	}
}
function wave(x,y,w,h){
	ellipse(x-w/12,y-h/5,.5);
	ellipse(x-w/18,y-h/6,1);
	ellipse(x-w/30,y-h/8,.5);
	beginShape();
		curveVertex(x,y);	
		curveVertex(x,y);
		curveVertex(x+w/2,y+h/15);
		curveVertex(x+w*2/3,y+h/4);
		curveVertex(x+w,y+h);
		curveVertex(x+w,y+h);
	endShape();
	wavePosition = 0;
	bubbleHeight = 1;
	bubbleWidth = 1;
	for (var v=0; v < w/10; v++){
		frameRate(15);
		ellipse(x + wavePosition, y + wavePosition/(w/h),bubbleWidth,bubbleHeight);
		wavePosition+=5;
		bubbleHeight = random(h/4);
		bubbleWidth = random(w/4);
	}
	for (var v=w/10; v < w/5; v++){
		frameRate(15);
		ellipse(x + wavePosition, y + wavePosition/(w/h),bubbleWidth,bubbleHeight);
		wavePosition+=5;
		bubbleHeight = random(h/4);
		
	}
}
function sky(){
	setGradient(0,0,450,177,blu,peach);
}
function redRock(){
	fillAndStroke(terracotta);
	beginShape();
		vertex(0,159);
		vertex(0,177);
		vertex(159,178);
		vertex(155,172);
		vertex(74,169);
		vertex(34,159);
		vertex(3,160);
	endShape();
	//black lines
	stroke(0);
	line(17,177,9,166);
	line(64,177,56,170);
	line(32,161,39,168);
	line(160,177,155,173);
	line(155,173,146,172);
}
function lightHouse(){
	fill(255);
	stroke(130);
	quad(139,171,141,146,146,146,148,171);
	quad(141,145,142,139,145,139,146,145);
	line(143,133,143,145);
	stroke(0);
	line(140,145,146,145);
	line(141,138,145,138);
	fill(0);
	arc(143.5,138,2,4,PI,0);
}
function ocean(){
	fillAndStroke(teal);
	quad(0,177,0,292,449,394,448,178);
	fillAndStroke(white);
	quad(0,291,0,370,width,490,width,380);
	push();
		translate(0,200);
		rotate(PI/15);
		setGradient(0,0,500,90 ,teal,color(55,146,186));
		setGradient(0,60,500,60,color(55,146,186),white);
	pop();
	wave(107,219,230,18);
	wave(229,204,121,8);
	wave(343,227,107,14);
	wave(208,254,231,40);
	wave(2,224,63,8);
	// s a n d   u n d e r   p i p e //
	fillAndStroke(hiddenSand);
	beginShape();
		vertex(180,436);
		vertex(298,423);
		vertex(313,471);
	endShape();
	// hides overflowing hidden wave lines
	fillAndStroke(sand);
	quad(180,436,196,427,321,460,340,488);
	// s h a d o w   f r o m   w a v e //
	fill(waveShadowColor,100);
	stroke(waveShadowColor,100);
	beginShape();
		vertex(232,428);
		vertex(304,438);
		vertex(298,423);
	endShape();
	// p i p e //
	pipe(275, 434, 0.08);
	fill(waveUnderColor);
	
	beginShape();
		curveVertex(232,429);
		curveVertex(232,429);
		curveVertex(245,410);
		curveVertex(260,waveY+(waveY/102));
		curveVertex(282,waveY);
		curveVertex(298,425);
		curveVertex(298,425);
	endShape();

	
	fillAndStroke(white);

	beginShape();
		curveVertex(279,waveY-5);
		curveVertex(279,waveY-5);
		curveVertex(450,443);
		curveVertex(320,454);
		curveVertex(320,454);
	endShape();


	
	

	stroke(waveStrokeColor);
	line(447,430,282,waveY-6);
}
function shoe(){
	fill(76,58,28);
	stroke(30);
	beginShape();
		curveVertex(0,0);
		curveVertex(0,0);
		curveVertex(0,10);
		curveVertex(11,11);
		curveVertex(14,6);
		curveVertex(17,12);
		curveVertex(44,11);
		curveVertex(26,0);
		curveVertex(26,0);
	endShape();
}
function oceanMan(){
	// m o v i n g   a r m 
	push();
		translate(30,55);
		rotate(rot);
		fill(skin);
		stroke(130);
		beginShape()
			curveVertex(22,28);
			curveVertex(22,28);
			curveVertex(50,34);
			curveVertex(49,35);
			curveVertex(65,37);
			curveVertex(58,29);
			curveVertex(31,18);
			curveVertex(31,18);
		endShape();
		fill(mint);
		beginShape();
			curveVertex(-8,19);
			curveVertex(-8,19);
			curveVertex(22,28);
			curveVertex(31,21);
			curveVertex(30,14);
			curveVertex(0,0);
			curveVertex(0,0);
		endShape();
	pop();
	// s h a d o w 
	fill(60,48);
	noStroke();
	quad(3,232,100,240,120,225,6,215);
	// s h o e s //
	push();
		translate(20,211);
		shoe();
	pop();
	push();
		translate(3,220);
		shoe();
	pop();
	// p a n t s //
	fill(150,85,55);
	stroke(30);
	beginShape();
		vertex(0,98);
		vertex(0,98);
		vertex(5,156);
		vertex(1,219);
		vertex(30,219);
		vertex(31,211);
		vertex(48,210);
		vertex(37,99);
		vertex(37,99);
	endShape();
	line(5,210,30,210);
	line(30,210,29.5,200);
	line(29.5,200,31.5,160)
	line(31.5,160,29.3,120);
	stroke(50);
	line(34,202.5,47,202);
	// h e a d   s h a p e
	fill(skin);
	stroke(130);
	beginShape();
		curveVertex(2,18);
		curveVertex(2,18);
		curveVertex(4,10);
		curveVertex(10,2);
		curveVertex(20,0);
		curveVertex(30,6);
		curveVertex(32,15);
		curveVertex(31.5,20);
		curveVertex(31,24);
		curveVertex(33,28);
		curveVertex(32,30);
		curveVertex(30,31.5);
		curveVertex(30.5,35);
		curveVertex(31,40);
		curveVertex(20,43);
		curveVertex(12,42);
		curveVertex(9,40);
		curveVertex(6,37);
		curveVertex(2.1,23);
		curveVertex(2.1,23);
	endShape();
	// A R M
	beginShape();
		curveVertex(-5,92);
		curveVertex(-5,92);
		curveVertex(2,119);
		curveVertex(8,138);
		curveVertex(19,128);
		curveVertex(13,123);
		curveVertex(7,96);
		curveVertex(7,96);
	endShape();
	// h a i r
	fill(hair);
	stroke(70);
	beginShape();
		curveVertex(3,25);
		curveVertex(3,25);
		curveVertex(1,20);
		curveVertex(2,15);
		curveVertex(3,10);
		curveVertex(8,2);
		curveVertex(19,-1);
		curveVertex(28,3);
		curveVertex(31,6);
		curveVertex(34,12);
		curveVertex(31.5,11);
		curveVertex(26,8.5);
		curveVertex(20,15);
		curveVertex(17,21);
		curveVertex(13,25);
		curveVertex(9,23);
		curveVertex(3,25);
		curveVertex(3,25);
	endShape(); 
	// h a i r   l i n e s
	bezier(10,1,17,1,29,6,29,10);
	bezier(20,3,15,5,10,8,5,15);
	bezier(25,7,19,10,16,13,13,17.5);
	// e y e
	ellipse(25,23,3,2);
	// b r o w
	stroke(hair);
	line(24,18,27,17);
	// l i p
	stroke(90);
	line(30,35,25,33);
	// e a r //
	fillAndStroke(skin);
	ellipse(9.5,23,6,9);
	// s h i r t //
	fill(mint);	
	stroke(130);
	beginShape();
		vertex(6,44);
		vertex(6,44);
		vertex(0,50);
		vertex(-3,54);
		vertex(-5,70);
		vertex(-4,91);
		vertex(-5,91);
		vertex(-5.5,96);
		vertex(8,98);
		vertex(8,65);
		vertex(10,99.5);
		vertex(37,101);
		vertex(36,101);
		vertex(37,75);
		vertex(33,56);
		vertex(25,46);
		vertex(25,46);
	endShape();
	// c o l l a r //
	beginShape();
		vertex(8,40);
		vertex(8,40);
		vertex(6,44);
		vertex(12,46);
		vertex(18,47);
		vertex(25,48);
		vertex(25,45);
		vertex(8,40);
		vertex(8,40);
	endShape();
	// t i e //
	fill(55,130,80);
	stroke(50);
	beginShape();
		vertex(24,47);
		vertex(24,47);
		vertex(28,86);
		vertex(33,94);
		vertex(35,84);
		vertex(25,46);
		vertex(25,46);
	endShape();
	// t i e   l i n e s //
	var tieX = 25.6;
	var tieY = 57;
		for (var counter = 0; counter< 10; counter++){
			line(tieX,tieY,tieX+(2+5*counter/10),tieY+2);
			tieY+=3;
			tieX+=.2;
		}
	line(24,50,25.5,52);
	line(25,54,26.3,55);
	line(29,87.5,33,89);
	
}
