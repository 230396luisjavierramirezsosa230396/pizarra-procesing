let cX
let cY
let bandera = 1
let figura = 1
let color
let tama
let rX
let rY
function setup() {
	createCanvas(windowWidth, windowHeight);
	
}
function draw() {
	if (mouseY > 100) {cursor(CROSS)}
	else{cursor(ARROW)}
	CambioColor()
	seleccionTama()
}


function CambioColor(){
	 
	color = document.getElementById('color').value
	fill(color)
}
function seleccionFigura(fig){
	if(fig==1){
		figura=1
	}
	if(fig==2){
		figura=2
	}
	if(fig==3){
		figura=3
	}

}
function seleccionTama(){
	 
	tama = document.getElementById('linea').value
}





function mouseReleased(){
	if (bandera == 1 && mouseY> 125) {
		cX = pmouseX
		cY = pmouseY
		bandera = 0
	}
	else{
		if (mouseY> 125) {
			rX= pmouseX
			rY= pmouseY
			
			if (figura == 1) {
				rect(cX, cY, rX-cX, rY-cY)	
			}
			if (figura == 2) {
				linea(cX, cY, rX, rY)
			}
			if (figura == 3) {
				if (rX>cX) {
					Circulo(cX, cY, rX-cX)
				}
				else{
					Circulo(cX, cY, -rX+cX)
				}

			}
		}
		bandera= 1
	}
	  return false
}

function linea(x1, y1, x2, y2)
{
	let dX;
	let dY;
	let p;
	if (x1 > x2 && y1 > y2)
	{
		p = x1;
		x1 = x2;
		x2 = p;

		p = y1;
		y1 = y2;
		y2 = p;
	}
	dX = Math.abs(x2 - x1);
	dY = Math.abs(y2 - y1);

	if (dX >= dY)
	{
		p = dX;
	} else p = dY;


	if ((x2 - x1) < 0) dX *= -1;
	if ((y2 - y1) < 0) dY *= -1;
	dX = dX / p;
	dY = dY / p;

	p = Math.floor(p);
	for (let i = 0; i != p; i++)
	{	stroke(color)
		strokeWeight(tama)
		point(x1, y1);

		x1 += dX;
		y1 += dY;
	}
	
}

function Circulo(xc, yc, r){
	let p=parseInt(5/4 -r)
	let x=0
	let y=r
	while(x<y){
		if (p<0)
		{
			x++
			p=p+(2*x)+1
		}
		else{
			x++
			y--
			p=p+(2*x)+1-(2*y)
		}
		stroke(color)
		strokeWeight(tama)
		point(x+xc,y+yc)
		point(y+xc,x+yc)
		point(y+xc,-x+yc)
		point(x+xc,-y+yc)
		point(-x+xc,-y+yc)
		point(-y+xc,-x+yc)
		point(-y+xc,x+yc)
		point(-x+xc,y+yc)
	}
}