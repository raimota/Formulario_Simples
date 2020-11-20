const btn = document.getElementsByTagName("button");
const parag = document.getElementsByTagName("p");
let espaco = document.getElementsByTagName("input");
const troca = function(){
    let aux;
    aux = espaco[0].value;
    espaco[0].value = espaco[1].value;
    espaco[1].value = aux;
};