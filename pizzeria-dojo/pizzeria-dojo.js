
//Crea una pizza con: "estilo Chicago", "tradicional", ["mozzarella"] y ["pepperoni", "salchicha"]  
//Crea una pizza con: "lanzada a mano" , "marinara" , ["mozzarella", "feta"] y ["champiñones", "aceitunas", "cebollas"] 
// ¡Crea 2 pizzas más con los ingredientes que quieras!


function pizzaOven(nombrePizza,tipoCorteza,queso,tipoSalsas,proteina){
    var pizza = {};
    pizza.nombrePizza = nombrePizza;
    pizza.tipoCorteza = tipoCorteza;
    pizza.queso = queso;
    pizza.tipoSalsas = tipoSalsas;
    pizza.proteina = proteina;
    return pizza;
}


var pizza = pizzaOven ("estilo chicago","tradicional","mozarella",["salsa de tomate","salchicha"]);
console.log(pizza);

var pizza2 = pizzaOven ("tradicional","masa madre",["mozarella","feta"],["champinones","aceitunas","cebollas"]);
console.log(pizza2);
var pizza3 = pizzaOven ("chiken bbq","tradicional","mozarella",["salsa BBQ","cebolla morada",],["pollo","tocino"]);
console.log(pizza3);

var pizza4 = pizzaOven ("steakhouse","masa madre",["mozarella","feta"],["pimiento verde","cebolla grillada"],["vacuno","pepperoni",]);
console.log(pizza4);


// function sandwichFactory(pan, proteína, queso, salsas) {
//     var pizza = {};
//     sandwich.pan = pan;
//     sandwich.proteína = proteína;
//     sandwich.queso = queso;
//     sandwich.salsas = salsas;
//     return sandwich;
// }
    
// var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
// console.log(s1);