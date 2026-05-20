import { I_vBodega } from "../interfaces/I_vBodega.js";

// Vista para el formulario de la Bodega
export default class Cl_vBodega implements I_vBodega {
  // Elementos del DOM
  inNombre: HTMLInputElement;
  inTipo: HTMLSelectElement;
  inPeso: HTMLInputElement;
  inPrecio: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;

  // Constructor: Busca los elementos por su ID en el HTML
  constructor() {
    this.vista = document.getElementById("Bodega") as HTMLElement;
    this.inNombre = document.getElementById("Bodega_inNombre") as HTMLInputElement;
    this.inTipo = document.getElementById("Bodega_inTipo") as HTMLSelectElement;
    this.inPeso = document.getElementById("Bodega_inPeso") as HTMLInputElement;
    this.inPrecio = document.getElementById("Bodega_inPrecio") as HTMLInputElement;
    this.btCancelar = document.getElementById("Bodega_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("Bodega_btAceptar") as HTMLButtonElement;
  }

  // Obtiene el nombre limpiando espacios
  get nombre(): string {
    return this.inNombre.value.trim();
  }
  // Obtiene el peso como número flotante
  get peso(): number {
    return parseFloat(this.inPeso.value.trim());
  }
  // Obtiene el precio como número flotante
  get precio(): number {
    return parseFloat(this.inPrecio.value.trim());
  }
  // Obtiene el tipo de carne
  get tipo(): string {
    return this.inTipo.value;
  }

  // Asigna la función que se ejecutará al dar click en Aceptar
  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }
  // Asigna la función que se ejecutará al dar click en Cancelar
  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  // Hace visible el formulario
  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  // Oculta el formulario
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}
