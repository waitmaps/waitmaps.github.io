//imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemSangue;
let imagemNave;

//sons do jogo
let somDatrilha;
let somDaColisao;
let somDoSangue;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.jpeg");
  imagemDoAtor = loadImage("imagens/ator.png");
  imagemSangue = loadImage("imagens/sangue.png");
  imagemNave = loadImage("imagens/nave.png");
  
  
  somDaTrilha = loadSound("sons/trilhadojogo.m4a");
  somDaColisao = loadSound("sons/batida.mov");
  somDoSangue = loadSound("sons/sangue.wav")
  somDoPonto = loadSound("sons/ponto.mp3");
  
}

