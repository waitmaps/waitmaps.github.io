//Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2 ;

//Velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//Variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;

//Variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;
  
//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilhadojogo.mov");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mov");
  imagemDeFundo = loadImage ("espaco.jpeg");
  imagemPonto = loadImage("cavalo.png");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}


function draw() {
  background(imagemDeFundo);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
  mostraCavalo();
  
  
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha
  yBolinha += velocidadeyBolinha
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width || xBolinha - raio< 0){
    velocidadexBolinha *= -1;
  }
  if(yBolinha + raio> height || yBolinha -raio< 0){
    velocidadeyBolinha *= -1;
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}


function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete)
    velocidadexBolinha *= -1;
    raquetada.play();
}

function verificaColisaoRaquete(x, y){
  colidiu = 
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadexBolinha *= -1;
    raquetada.play();
 }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;  
  yRaqueteOponente += velocidadeYOponente
}

function gerarErroMovimento(){
  return Math.random()*60
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  fill(color(186,85,211));
  textSize(16);
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(186,85,211));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
  
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    animarCavalo();
    ponto.play();
  }
if(xBolinha < 10){
  pontosDoOponente +=1
  animarCavalo();
  ponto.play();
}
}
