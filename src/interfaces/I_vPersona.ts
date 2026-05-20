import Cl_mBodega from "../models/Cl_mBodega.js";

// Interfaz para la vista principal (Persona)
export interface I_vPersona {
  // Registra la acción para el botón Nueva Bodega
  onNuevaBodega(callback: () => void): void;
  // Método para mostrar la lista de bodegas y los totales
  mostrarBodegas(data: {
    bodegas: Cl_mBodega[]; // Lista de bodegas
    totalKgs: number; // Total de Kgs calculados
    bodegaMejorPrecio: string; // Nombre de la mejor bodega
    mejorPrecio: number; // Precio por Kg de la mejor bodega
    cantidadRegistros: number; // Cantidad de registros procesados
    ultimoPrecio: number; // Último precio registrado
    nombresConValorSuperiorAlUltimo: string[]; // Nombres con precio por Kg superior al último
    porcentajeVacuno: number; // Porcentaje de carne de vacuno
    bodegaVacunoMasCostosa: string; // Nombre de la bodega de vacuno más costosa
  }): void;
}
