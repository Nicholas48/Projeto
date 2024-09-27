let color;
let posicaohorizontal;//x
let posicaovertical;//y
function setup() {
  createCanvas(400, 400);
background("white");
  color =(random(0,255),random(0,255),random(0,255));
}  

function draw() 
{fill(color);
 circle(posicaohorintal,posicaovertical,50);
 if(mousex<posicaohorizontal){posicaohorizontal=posicaohorizontal-1;         
  (mousex<posicaohorizontal)={posicaohorizontal+1;
                               
                  }
 
                             }
