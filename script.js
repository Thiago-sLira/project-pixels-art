// adicionando aleatoriedade nas cores da paleta
const botaoAleatorio = document.getElementById('button-random-color');
const paletaCores = document.getElementsByClassName('color');

botaoAleatorio.addEventListener('click', function () {


const caracteres = '0123456789ABCDEF';
let hashtag = '#';
for (let i = 0; i < 6; i += 1) {
    hashtag += caracteres[Math.floor(Math.random() * caracteres.length)];
    hashtag = colorRed;
}
}) console.log(generateColor());// fonte https://www.horadecodar.com.br/2022/01/16/gerar-cor-aleatoria-com-javascript/
