//Variáveis do cavalo
let xCavalo = 200;
let yCavalo = 400; //350
let comprimentoCavalo = 80;
let alturaCavalo = 100;
let cavaloAparecendo = false;
let animando = false;
let velocidadeAnimacao = 1;
let direcaoAnimacao = -1;

function mostraCavalo(){
  if (cavaloAparecendo){
  image(imagemPonto, xCavalo, yCavalo, comprimentoCavalo, alturaCavalo) 
  }
  if (animando){
    yCavalo += velocidadeAnimacao * direcaoAnimacao
  }
  if (yCavalo < 350){
    direcaoAnimacao = 1;
  }
  if (yCavalo > 400){
    esconderCavalo();
  }
}

function esconderCavalo(){
  cavaloAparecendo = false;
  yCavalo = 400;
  animando = false;
  direcaoAnimacao = -1;
}

function animarCavalo(){
  cavaloAparecendo = true;
  yCavalo = 400;
  animando = true;
}
