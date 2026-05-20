// Modelo para una Bodega individual
export default class Cl_mBodega {
  private _nombre: string = ""; // Nombre de la bodega
  private _peso: number = 0; // Peso en gramos
  private _precio: number = 0; // Precio en Bs
  private _tipo: string = ""; // Tipo de carne (vacuno, cerdo, pollo)

  // Constructor que recibe un objeto con los datos
  constructor({ nombre, peso, precio, tipo }: { nombre: string; peso: number; precio: number; tipo: string }) {
    this.nombre = nombre;
    this.peso = peso;
    this.precio = precio;
    this.tipo = tipo;
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

  // Setter para el tipo
  set tipo(value: string) {
    this._tipo = value;
  }
  // Getter para el tipo
  get tipo(): string {
    return this._tipo;
  }

  // Método para calcular el precio por Kilogramo
  precioPorKg(): number {
    return (this._precio / this._peso) * 1000;
  }
}
