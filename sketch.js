//variáveis da bolhinha
let xBolhinha = 300;
let yBolhinha = 200;
let diametro = 20;
let raio = diametro/2;

//velocidade da bolhinha
let velocidadeXBolhinha = 6;
let velocidadeYBolhinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let colidiu = false;

//placar do jogo
let meusPontos =0;
let pontosDoOponente =0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw(){ 
  background(
    0);
  mostraBolhinha();
  movimentaBolhinha();
  verificaColisaoBorda();
  mostrarRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisãoRaqute(xRaquete, yRaquete);
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisãoRaqute(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
 
}

function mostraBolhinha(){
  circle(xBolhinha, yBolhinha, diametro);
}

function movimentaBolhinha(){
xBolhinha += velocidadeXBolhinha;
yBolhinha += velocidadeYBolhinha;
}

function verificaColisaoBorda(){
  
  if (xBolhinha+raio>width||xBolhinha-raio<0){velocidadeXBolhinha*=-1;}
  
  if (yBolhinha+raio>height||yBolhinha-raio<0){velocidadeYBolhinha*=-1;}
}

function mostrarRaquete(x,y){
  fill(color(248,248,255))
  rect(x, y, raqueteComprimento, raqueteAltura)
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -=10;
  }
  
   if (keyIsDown(DOWN_ARROW)){
    yRaquete +=10;
  }
}

function verificaColisaoRaquete(){
  if (xBolhinha-raio<xRaquete+raqueteComprimento&&yBolhinha-raio<yRaquete+raqueteAltura&&yBolhinha+raio>yRaquete){
    velocidadeXBolhinha*=-1;
    raquetada.play();
  }
}

function verificaColisãoRaqute(x,y){
 colidiu =  collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolhinha,yBolhinha,raio);
if (colidiu){
  velocidadeXBolhinha*=-1;
  raquetada.play();
}
}

function movimentaRaqueteOponente() {
     if (keyIsDown(87)){
    yRaqueteOponente -=10;
  }
  
   if (keyIsDown(83)){
    yRaqueteOponente +=10;
  }
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  fill(color(0,0,255));
  rect(150,10,40,20);
  fill(250);
  text(meusPontos,170,27);
  fill(color(255,0,0));
  rect(450,10,40,20);
  fill(250);
  text(pontosDoOponente,470,27);
}

function marcaPonto(){
  if (xBolhinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolhinha < 10){
    pontosDoOponente += 1;
    ponto.play();
  }
}
