function setup(){
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw(){
  background(imagemDaEstrada);
  mostraAtor();
  mostraNave();
  movimentaNave();
  movimentaAtor();
  voltaPosicaoInicialDaNave();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}


