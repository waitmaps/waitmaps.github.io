
let yOponenteAlvo;
let velocidadeMaximaOponente = 6;

function movimentaRaqueteOponenteNormal() {
  let meioRaquete = yRaqueteOponente + raqueteComprimento / 2;
  if (yBolinha > yRaqueteOpoenente && yRaqueteOponente + raqueteComprimento < yBolinha) {
    velocidadeYOponente = 0;
  }
  if (velocidadeYOponente > velocidadeMaximaOponente) {
    velocidadeYOponente = velocidadeMaxima;
  }
  
  let direcao = meioRaquete - yBolinha > 0 ? 1 : -1;
  yRaqueteOponente = velocidadeYOponente * direcao;
}