var assert = require('assert');
var ingrediente = require('../ingrediente.js');

var newIngrediente = new ingrediente.Ingrediente("Tomate", 18.12, 0.11, 3.5, 1);

describe('Ingrediente', function() {
    describe('Creación', function() {
        it('Ingrediente creado correctamente', function() {
            assert.strictEqual(newIngrediente.toString(), "Ingrediente -> Tomate [Calorias: 18.12, Grasas: 0.11, Hidratos: 3.5, Proteinas: 1]");
        });
    });

    describe('Getters', function() {
        it('Getter de nombre', function() {
            assert.strictEqual(newIngrediente.getNombre(), "Tomate");
        });

        it('Getter de calorias', function() {
            assert.strictEqual(newIngrediente.getCalorias(), 18.12);
        });
    });
});
