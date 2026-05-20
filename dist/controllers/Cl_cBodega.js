import Cl_mBodega from "../models/Cl_mBodega.js";
// Controlador para la vista de la Bodega
export default class Cl_cBodega {
    vista;
    // Callback para devolver la bodega creada o nulo
    callback;
    // Constructor: Recibe la vista y se suscribe a sus eventos
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    // Método que llama el controlador principal para pedir datos
    solicitarBodega(callback) {
        this.callback = callback;
        this.vista.mostrar(); // Muestra el formulario
    }
    // Manejador del botón Cancelar
    btCancelarOnClick() {
        this.callback(null); // Devuelve nulo
        this.vista.ocultar(); // Oculta el formulario
    }
    // Manejador del botón Aceptar
    btAceptarOnClick() {
        // Crea el modelo con los datos de la vista y lo devuelve
        this.callback(new Cl_mBodega({
            nombre: this.vista.nombre,
            peso: this.vista.peso,
            precio: this.vista.precio,
            tipo: this.vista.tipo,
        }));
        this.vista.ocultar(); // Oculta el formulario
    }
}
//# sourceMappingURL=Cl_cBodega.js.map