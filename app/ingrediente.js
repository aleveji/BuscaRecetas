
class Ingrediente{

    constructor(nombre, calorias, grasas, hidratos, proteinas){
        this.nombre = nombre;
        this.calorias = calorias;
        this.grasas = grasas;
        this.hidratos = hidratos;
        this.proteinas = proteinas;
    }

    getNombre(){
        return this.nombre;
    }

    getCalorias(){
        return this.calorias;
    }
}
