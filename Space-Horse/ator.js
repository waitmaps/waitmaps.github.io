//ator

let xAtor = 85;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;
let atorMorto = false;
let podeMover = true;

function mostraAtor(){
  if (atorMorto){ 
    mostraSangue();
 } 
  else{
   image(imagemDoAtor, xAtor, yAtor, 30, 30);
 }
}

function mostraSangue(){
  image(imagemSangue, xAtor, yAtor, 30, 30);
}

function reiniciarAtor(){
  voltaAtorParaPosicaoInicial();
  atorMorto = false;
  podeMover = false;
  setTimeout(liberaMovimentoAtor,500)
}

function liberaMovimentoAtor(){
  podeMover = true;
}

function movimentaAtor(){
  if (atorMorto || !podeMover){
    return;
  }
  if (keyIsDown(UP_ARROW)){
     yAtor -= 3;
  }

  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
     yAtor += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < xNaves.length; i++){
    colisao = collideRectCircle(xNaves[i], yNaves[i], comprimentoNave, alturaNave, xAtor, yAtor, 15)
    if (colisao && !atorMorto){
      atorMorto = true;
      setTimeout(reiniciarAtor, 1000);
      somDaColisao.play();
      somDoSangue.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366; 
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color (255, 240, 60));
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    reiniciarAtor();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 367;
}