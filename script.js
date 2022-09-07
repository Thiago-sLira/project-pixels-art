// adicionando aleatoriedade nas cores da paleta
const botaoCorAleatoria = document.getElementById('button-random-color');
const paletaCores = document.querySelectorAll('.color');

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
  }
}
chamandoPallete();

// criando divs com classe;
function createSquares() {
  const section = document.getElementById('pixel-board');
  for (let index = 0; index < 25; index += 1) {
    const squares = document.createElement('div');
    squares.className = 'pixel';
    section.appendChild(squares);
  }
}
createSquares();

// // alterando a classe ao ser clicada;
function changeClass(event) {
  const classSelected = document.querySelector('.selected');
  classSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function catColor() {
  for (let index = 0; index < paletaCores.length; index += 1) {
    paletaCores[index].addEventListener('click', changeClass);
  }
}
catColor();
