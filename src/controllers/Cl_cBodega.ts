import { I_vBodega } from "../interfaces/I_vBodega.js";
import Cl_mBodega from "../models/Cl_mBodega.js";

// Controlador para la vista de la Bodega
export default class Cl_cBodega {
  private vista: I_vBodega;
  // Callback para devolver la bodega creada o nulo
  private callback!: (bodega: Cl_mBodega | null) => void;

  // Constructor: Recibe la vista y se suscribe a sus eventos
  constructor(vista: I_vBodega) {
    this.vista = vista;
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }

  // Método que llama el controlador principal para pedir datos
  solicitarBodega(callback: (bodega: Cl_mBodega | null) => void) {
    this.callback = callback;
    this.vista.mostrar(); // Muestra el formulario
  }

  // Manejador del botón Cancelar
  private btCancelarOnClick() {
    this.callback(null); // Devuelve nulo
    this.vista.ocultar(); // Oculta el formulario
  }

  // Manejador del botón Aceptar
  private btAceptarOnClick() {
    // Crea el modelo con los datos de la vista y lo devuelve
    this.callback(
      new Cl_mBodega({
        nombre: this.vista.nombre,
        peso: this.vista.peso,
        precio: this.vista.precio,
      }),
    );
    this.vista.ocultar(); // Oculta el formulario
  }
}
