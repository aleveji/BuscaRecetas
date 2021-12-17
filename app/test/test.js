const test = require('aqa');
var ingrediente = require('../ingrediente.js');

var newIngrediente1 = new ingrediente.Ingrediente("Tomate", 18.12, 0.11, 3.5, 1);
var newIngrediente2 = new ingrediente.Ingrediente("Lechuga", 15, 0.2, 2.9, 1.4);
var newIngrediente3 = new ingrediente.Ingrediente("Manzana", 52, 0.2, 14, 0.3);
var newIngrediente4 = new ingrediente.Ingrediente("Piña", 50, 0.1, 13, 0.5);
var newIngrediente5 = new ingrediente.Ingrediente("Atún", 130, 0.6, 0, 29);

let ingredientes = [];
ingredientes.push(newIngrediente1);
ingredientes.push(newIngrediente2);
ingredientes.push(newIngrediente3);
ingredientes.push(newIngrediente4);
ingredientes.push(newIngrediente5);

test("Tests ingredientes", t => {
    t.deepEqual(newIngrediente1.toString(), "Ingrediente -> Tomate [Calorias: 18.12, Grasas: 0.11, Hidratos: 3.5, Proteinas: 1]", "Ingrediente Tomate no creado correctamente");
    t.deepEqual(newIngrediente1.getNombre(), "Tomate", "Getter de nombre de Tomate no funciona correctamente");
    t.deepEqual(newIngrediente1.getCalorias(), 18.12, "Getter de calorias de Tomate no funciona correctamente");
    t.deepEqual(newIngrediente1.getProteinas(), 1, "Getter de proteinas de Tomate no funciona correctamente");

    t.deepEqual(newIngrediente2.toString(), "Ingrediente -> Lechuga [Calorias: 15, Grasas: 0.2, Hidratos: 2.9, Proteinas: 1.4]", "Ingrediente Lechuga no creado correctamente");
    t.deepEqual(newIngrediente2.getNombre(), "Lechuga", "Getter de nombre de Lechuga no funciona correctamente");
    t.deepEqual(newIngrediente2.getCalorias(), 15, "Getter de calorias de Lechuga no funciona correctamente");
    t.deepEqual(newIngrediente2.getProteinas(), 1.4, "Getter de proteinas de Lechuga no funciona correctamente");

    t.deepEqual(newIngrediente3.toString(), "Ingrediente -> Manzana [Calorias: 52, Grasas: 0.2, Hidratos: 14, Proteinas: 0.3]", "Ingrediente Manzana no creado correctamente");
    t.deepEqual(newIngrediente3.getNombre(), "Manzana", "Getter de nombre de Manzana no funciona correctamente");
    t.deepEqual(newIngrediente3.getCalorias(), 52, "Getter de calorias de Manzana no funciona correctamente");
    t.deepEqual(newIngrediente3.getProteinas(), 0.3, "Getter de proteinas de Manzana no funciona correctamente");

    t.deepEqual(newIngrediente4.toString(), "Ingrediente -> Piña [Calorias: 50, Grasas: 0.1, Hidratos: 13, Proteinas: 0.5]", "Ingrediente Piña no creado correctamente");
    t.deepEqual(newIngrediente4.getNombre(), "Piña", "Getter de nombre de Piña no funciona correctamente");
    t.deepEqual(newIngrediente4.getCalorias(), 50, "Getter de calorias de Piña no funciona correctamente");
    t.deepEqual(newIngrediente4.getProteinas(), 0.5, "Getter de proteinas de Piña no funciona correctamente");

    t.deepEqual(newIngrediente5.toString(), "Ingrediente -> Atún [Calorias: 130, Grasas: 0.6, Hidratos: 0, Proteinas: 29]", "Ingrediente Atún no creado correctamente");
    t.deepEqual(newIngrediente5.getNombre(), "Atún", "Getter de nombre de Atún no funciona correctamente");
    t.deepEqual(newIngrediente5.getCalorias(), 130, "Getter de calorias de Atún no funciona correctamente");
    t.deepEqual(newIngrediente5.getProteinas(), 29, "Getter de proteinas de Atún no funciona correctamente");

    t.deepEqual(ingrediente.maxProteinas(ingredientes,100).toString(),"Lechuga,Tomate,Piña","La funcion maxProteinas no funciona correctamente");
});
