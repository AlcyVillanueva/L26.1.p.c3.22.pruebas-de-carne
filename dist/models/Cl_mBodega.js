// Modelo para una Bodega individual
export default class Cl_mBodega {
    _nombre = ""; // Nombre de la bodega
    _peso = 0; // Peso en gramos
    _precio = 0; // Precio en Bs
    // Constructor que recibe un objeto con los datos
    constructor({ nombre, peso, precio }) {
        this.nombre = nombre;
        this.peso = peso;
        this.precio = precio;
    }
    // Setter para el nombre
    set nombre(value) {
        this._nombre = value;
    }
    // Getter para el nombre
    get nombre() {
        return this._nombre;
    }
    // Setter para el peso (convierte a número)
    set peso(value) {
        this._peso = +value;
    }
    // Getter para el peso
    get peso() {
        return this._peso;
    }
    // Setter para el precio (convierte a número)
    set precio(value) {
        this._precio = +value;
    }
    // Getter para el precio
    get precio() {
        return this._precio;
    }
    // Método para calcular el precio por Kilogramo
    precioPorKg() {
        return (this._precio / this._peso) * 1000;
    }
}
//# sourceMappingURL=Cl_mBodega.js.map