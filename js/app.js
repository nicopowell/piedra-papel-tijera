let btnPiedra = document.getElementById("btnPiedra");
let btnPapel = document.getElementById("btnPapel");
let btnTijera = document.getElementById("btnTijera");
let parrafoResultado = document.getElementById("parrafoResultado");
let marcador = document.getElementById("marcador");
let btnReiniciar = document.getElementById("btnReiniciar");

let movimientoComputadora,
  numeroRandom,
  movimientoJugador,
  resultado,
  victorias = 0,
  derrotas = 0;

btnPiedra.addEventListener("click", elegirPiedra);
btnPapel.addEventListener("click", elegirPapel);
btnTijera.addEventListener("click", elegirTijera);
btnReiniciar.addEventListener("click", reiniciar);

function movimientoPC() {
  opciones = ["Piedra", "Papel", "Tijera"];
  movimientoComputadora = opciones[Math.floor(Math.random() * 3)];
}

function elegirPiedra() {
  movimientoJugador = "Piedra";
  movimientoPC();
  juegar();
}

function elegirPapel() {
  movimientoJugador = "Papel";
  movimientoPC();
  juegar();
}

function elegirTijera() {
  movimientoJugador = "Tijera";
  movimientoPC();
  juegar();
}

function juegar() {
  if (movimientoJugador == movimientoComputadora) {
    resultado = "Empate";
  } else if (
    (movimientoJugador == "Piedra" && movimientoComputadora == "Tijera") ||
    (movimientoJugador == "Papel" && movimientoComputadora == "Piedra") ||
    (movimientoJugador == "Tijera" && movimientoComputadora == "Papel")
  ) {
    victorias++;
    resultado = "Ganaste!";
  } else {
    derrotas++;
    resultado = "Perdiste...";
  }

  parrafoResultado.innerHTML = `Elegíste ${movimientoJugador} y la PC eligió ${movimientoComputadora}. ${resultado}`;
  mostrarResultado();
}

function mostrarResultado() {
  marcador.innerHTML = `${victorias} : ${derrotas}`;
}

function reiniciar() {
  victorias = 0;
  derrotas = 0;
  parrafoResultado.innerHTML = "";
  mostrarResultado();
}
