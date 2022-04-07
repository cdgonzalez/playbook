class Pokemon {
    constructor (name) { //constructor para la clase
        this.name = name
    }
    sayHello() { //Funcion sayHello
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }
    sayMessage(message) { //Funcion sayMessage
        console.log(`Mi pokemon ${this.name} dice: ${message}`)
    } 
}
module.exports = Pokemon
/* module.exports.sayHello = () => {
    console.log(`Mi pokemon ${this.name} te saluda!!!`)
}

module.exports.sayMessage = (message) => {
    console.log(`Mi pokemon ${this.name} dice: ${message}`)
} 
 */