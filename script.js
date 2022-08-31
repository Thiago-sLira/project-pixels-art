// adicionando aleatoriedade nas cores da paleta
const botaoCorAleatoria = document.getElementById('button-random-color');
const paletaCores = document.querySelectorAll('.color');

botaoCorAleatoria.addEventListener('click', () => {
  for (let i = 1; i < paletaCores.length; i += 1) {
    const caracteres = '0123456789ABCDEF';
    let hashtag = '#';
    for (let index = 0; index < 6; index += 1) {
      hashtag += caracteres[Math.floor(Math.random() * hashtag.length)];
    } // fonte: https://www.horadecodar.com.br/2022/01/16/gerar-cor-aleatoria-com-javascript/
    paletaCores[i].style.backgroundColor = hashtag;
  }
});
