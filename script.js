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
    } // fonte: https://www.horadecodar.com.br/2022/01/16/gerar-cor-aleatoria-com-javascript/
    paletaCores[i].style.backgroundColor = hashtag;
    coresStorage.push(hashtag);
  }
  localStorage.setItem('colorPalette', JSON.stringify(coresStorage));
});

function chamandoPallete() {
  if (localStorage.getItem('colorPallete')) {
    const savedPallete = JSON.parse(localStorage.getItem('colorPallete'));
    for (let i = 0; i < paletaCores.length; i += 1) {
      paletaCores[i].style.backgroundColor = savedPallete[i];
    }
  }
}
chamandoPallete();
