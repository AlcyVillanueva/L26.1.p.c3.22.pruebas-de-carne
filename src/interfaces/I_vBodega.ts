// Interfaz para la vista de la Bodega (formulario de entrada)
export interface I_vBodega {
  // Obtiene el nombre ingresado por el usuario
  get nombre(): string;
  // Obtiene el peso ingresado por el usuario
  get peso(): number;
  // Obtiene el precio ingresado por el usuario
  get precio(): number;
  // Obtiene el tipo de carne ingresado por el usuario
  get tipo(): string;
  
  // Muestra el formulario
  mostrar(): void;
  // Oculta el formulario
  ocultar(): void;
  
  // Registra la acción para el botón Aceptar
  onAceptar(callback: () => void): void;
  // Registra la acción para el botón Cancelar
  onCancelar(callback: () => void): void;
}
