const pokemon = {
    nombre: "Aggron",
    tipo: 'Acero/Roca',
    debilidades: [
        "Lucha",
        "Tierra",
        "Agua",
    ],
    evoluciones: {
        pre_evolucion: "Lairon",
        evolucion: "Mega-Aggron",
    }
};
console.log("Este es el Ejemplo 3: Un Objeto con diferentes propiedades")
console.log(pokemon)
console.log(pokemon.nombre)
console.log(pokemon["evoluciones"])

