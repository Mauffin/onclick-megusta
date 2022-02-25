

function ocultarLI(elementoli) {
    var elementoli = document.querySelector(".li-1");
    elementoli.remove();
}
function ocultar2do(elementolo) {
    var elementolo = document.querySelector(".li-2");
    elementolo.remove();
}

var likes = [500];
var spans = [
    document.querySelector("#span")
    
];

function like(elemento) {
    likes[elemento]--;
    spans[elemento].innerHTML = likes[elemento] ;
}

var username = document.querySelector(".damian");
function edit(){
    username.innerText = "janne doe";
}