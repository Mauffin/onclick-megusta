// function eliminarLista(elemento){//elimina el elemento padre 
//     var parent = elemento.parentElement;
//     parent.remove();
// }

function ocultar(elemento) {
    var elemento = document.querySelector("footer");
    elemento.remove();
}


function alerta(elementoli) {
    var a = elementoli.querySelector("a");
    var ciudad = a.innerText
    alert("cargando ciudad...  "+ciudad);
}



function cambio(elementoSelect){
    
    var f0c = elementoSelect.value;
    console.log(f0c);
        for(i=1; i<=8; i++){
            
            var temperatura= document.querySelector("#temperatura"+i);
            console.log(temperatura);
            var temperaturaValue= temperatura.innerText;
            temperaturaValue = parseInt(temperaturaValue);
            console.log(temperaturaValue);
            var newTemp = 0;

            if(f0c == "c"){
                //F -> C
                newTemp = Math.round((temperaturaValue - 32)* 5/9);
            }else{
                newTemp = Math.round(temperaturaValue * 9/5 + 32);
            } 
            temperatura.innerText=newTemp;
        } 
}


