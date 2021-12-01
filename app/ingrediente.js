
class Ingrediente {

    constructor(nombre, calorias, grasas, hidratos, proteinas) {
        this.nombre = nombre;
        this.calorias = calorias;
        this.grasas = grasas;
        this.hidratos = hidratos;
        this.proteinas = proteinas;
    }

    getNombre() {
        return this.nombre;
    }

    getCalorias() {
        return this.calorias;
    }

    toString() {
        return "Ingrediente -> " + this.nombre + " [Calorias: " + this.calorias + ", Grasas: " + this.grasas + ", Hidratos: " + this.hidratos + ", Proteinas: " + this.proteinas + "]";
    }
}

module.exports.Ingrediente = Ingrediente;