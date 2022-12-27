const notas= [5, 7, 6, 9, 7, 6, 8, 10, 9, 7];

let soma= 0; notas.forEach (nota=> {soma+=nota;
});

let media=soma/notas.length;console.log("Média: ", media);