const notas = [5, 7, 6, 9, 7, 6, 8, 10, 9, 7];

let i = 0;
let soma = 0;
let media;
let tam = notas.length;

while (i < tam) {
    soma = (soma + notas[i]);
    media = soma/tam;
    i = i + 1;
}

console.log(`Média: ${media}`);
