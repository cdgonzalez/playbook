const pokemon = {
    name: "Aggron",
    sayHelloTrainer: function(yourName) {
        console.log(`Hola ${yourName} has saludado a ${this.name}`);
    }
}
console.log("Este es el ejemplo 5: Objeto con una función que recibe parametros.");
pokemon.sayHelloTrainer("Launch-X");