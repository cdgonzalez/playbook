const pokemon = {
    nombre: "Aggron",
    sayHello: function (){
        console.log(`${this.nombre} te saluda en pokemon`);
    }
}

console.log("Este es el ejemplo 4: Objeto con una Función");
pokemon.sayHello();