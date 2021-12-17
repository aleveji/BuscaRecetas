
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

    getProteinas() {
        return this.proteinas;
    }

    toString() {
        return "Ingrediente -> " + this.nombre + " [Calorias: " + this.calorias + ", Grasas: " + this.grasas + ", Hidratos: " + this.hidratos + ", Proteinas: " + this.proteinas + "]";
    }
}

function maxProteinas(ingredientes, maxCalorias) {
    ingredientes.sort(function(a,b){return (b.getProteinas()/b.getCalorias())-(a.getProteinas()/a.getCalorias())}); //ordena de mayor a menor segun la proporcion proteinas/calorias
    
    let aDevolver = [];
    let calorias = 0;
    for (let x of ingredientes) {
        if ((calorias + x.getCalorias()) < maxCalorias) {
            aDevolver.push(x.getNombre());
            calorias += x.getCalorias();
        }
    }
    
    return aDevolver;
}

module.exports.Ingrediente = Ingrediente;
module.exports.maxProteinas = maxProteinas;
