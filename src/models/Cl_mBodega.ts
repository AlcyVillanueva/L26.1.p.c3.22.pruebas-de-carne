// Modelo para una Bodega individual
export default class Cl_mBodega {
  private _nombre: string = ""; // Nombre de la bodega
  private _peso: number = 0; // Peso en gramos
  private _precio: number = 0; // Precio en Bs

  // Constructor que recibe un objeto con los datos
  constructor({ nombre, peso, precio }: { nombre: string; peso: number; precio: number }) {
    this.nombre = nombre;
    this.peso = peso;
    this.precio = precio;
  }

  // Setter para el nombre
  set nombre(value: string) {
    this._nombre = value;
  }
  // Getter para el nombre
  get nombre(): string {
    return this._nombre;
  }

  // Setter para el peso (convierte a número)
  set peso(value: number) {
    this._peso = +value;
  }
  // Getter para el peso
  get peso(): number {
    return this._peso;
  }

  // Setter para el precio (convierte a número)
  set precio(value: number) {
    this._precio = +value;
  }
  // Getter para el precio
  get precio(): number {
    return this._precio;
  }

  // Método para calcular el precio por Kilogramo
  precioPorKg(): number {
    return (this._precio / this._peso) * 1000;
  }
}
