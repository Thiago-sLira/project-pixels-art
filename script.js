// adicionando aleatoriedade nas cores da paleta

const botaoCorAleatoria = document.getElementById('button-random-color');
const paletaCores = document.querySelectorAll('.color');
const buttonClear = document.getElementById('clear-board');
const buttonVQV = document.getElementById('generate-board');
// const inputNumber = document.querySelector('#board-size').value;

// salvando no localStorage

botaoCorAleatoria.addEventListener('click', () => {
  const coresStorage = [];
  coresStorage.push('#000000');
  paletaCores[0].style.backgroundColor = '#000000';
  for (let i = 1; i < paletaCores.length; i += 1) {
    const caracteres = '0123456789ABCDEF';
    let hashtag = '#';
    for (let index = 0; index < 6; index += 1) {
      hashtag += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
    paletaCores[i].style.backgroundColor = hashtag;
    coresStorage.push(hashtag);
  }
  localStorage.setItem('colorPalette', JSON.stringify(coresStorage));
});

// chamando do localStorage

function chamandoPallete() {
  if (localStorage.getItem('colorPalette')) {
    const savedPallete = JSON.parse(localStorage.getItem('colorPalette'));
    for (let i = 0; i < paletaCores.length; i += 1) {
      paletaCores[i].style.backgroundColor = savedPallete[i];
    }
    // paletaCores[0].classList.add('selected');
  }
}
chamandoPallete();

// criando divs com classe;

function createSquares(numero) {
  const section = document.getElementById('pixel-board');
  for (let index = 0; index < numero; index += 1) {
    // squares.className = 'pixel';
    const squares = document.createElement('div');
    section.appendChild(squares);
    for (let i = 0; i < numero; i += 1) {
      const squaresDiv = document.createElement('div');
      squaresDiv.className = 'pixel';
      squares.appendChild(squaresDiv);
    }
  }
}
createSquares(5);

// alterando a classe ao ser clicada;

function changeClass(event) {
  const classSelected = document.querySelectorAll('.selected');
  classSelected[0].classList.remove('selected');
  event.target.classList.add('selected');
}

function catColor() {
  for (let index = 0; index < paletaCores.length; index += 1) {
    paletaCores[index].addEventListener('click', changeClass);
  }
}
catColor();

let square = document.querySelectorAll('.pixel');

// salvado a os pixels no localStorage

function saveLocal() {
  const savedStorage = [];
  for (let i = 0; i < square.length; i += 1) {
    savedStorage[i] = square[i].style.backgroundColor;
  }
  localStorage.setItem('pixelBoard', JSON.stringify(savedStorage));
}

// pintando os pixels

function printColor(event) {
  const classSelected = document.querySelector('.selected');
  const arroz = event.target;
  arroz.style.backgroundColor = window.getComputedStyle(classSelected, null).backgroundColor; // https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  saveLocal();
}

// for (let index = 0; index < square.length; index += 1) {
//   square[index].addEventListener('click', printColor);
// }

function updateSquare() {
  square = document.querySelectorAll('.pixel');
  for (let index = 0; index < square.length; index += 1) {
    square[index].addEventListener('click', printColor);
  }
} updateSquare();

// botão de limpar os pixels

buttonClear.addEventListener('click', () => {
  for (let index = 0; index < square.length; index += 1) {
    square[index].style.backgroundColor = '#ffffff';
    localStorage.removeItem('pixelBoard');
  }
});

// resgatando do localStorage

function catchColor() {
  let pegaColor = localStorage.getItem('pixelBoard');
  if (pegaColor) {
    pegaColor = JSON.parse(pegaColor);
    for (let i = 0; i < square.length; i += 1) {
      square[i].style.backgroundColor = pegaColor[i];
    }
  }
} catchColor();

// Alterando o tamanho dos pixels
// buttonVQV(generate-board) inputNumber(board-size)

let pixels = document.querySelectorAll('#pixel-board > div');

function removeFilho() {
  pixels = document.querySelectorAll('#pixel-board > div');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].parentNode.removeChild(pixels[i]);
  }
}

function botao() {
  let inputNumber = document.querySelector('#board-size').value;
  if (inputNumber === '') {
    alert('Board inválido!');
  }
  if (inputNumber < 5) {
    inputNumber = 5;
  } else if (inputNumber > 50) {
    inputNumber = 50;
  }
  removeFilho();
  createSquares(inputNumber);
  updateSquare();
  localStorage.setItem('boardSize', inputNumber);
}

buttonVQV.addEventListener('click', botao);

const pegaSquare = localStorage.getItem('boardSize');
if (pegaSquare) {
  removeFilho();
  createSquares(pegaSquare);
  updateSquare();
  catchColor();
}
