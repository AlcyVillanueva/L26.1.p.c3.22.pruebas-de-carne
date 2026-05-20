import Cl_mPersona from "../models/Cl_mPersona.js";
import { I_vPersona } from "../interfaces/I_vPersona.js";
import Cl_cBodega from "./Cl_cBodega.js";
import Cl_mBodega from "../models/Cl_mBodega.js";

// Controlador principal para la Persona
export default class Cl_cPersona {
  // Instancia del modelo Persona
  private mPersona: Cl_mPersona = new Cl_mPersona();
  private vPersona: I_vPersona; // Vista principal
  private cBodega: Cl_cBodega; // Controlador de la bodega

  // Constructor: Recibe la vista principal y el controlador de bodega
  constructor(vistaPersona: I_vPersona, controladorBodega: Cl_cBodega) {
    this.vPersona = vistaPersona;
    this.cBodega = controladorBodega;

    // Carga los datos iniciales y se suscribe a eventos
    this.cargarBodegasIniciales();
    this.vPersona.onNuevaBodega(() => this.procesar1Bodega());
  }

  // Método para cargar las notas iniciales de la carne
  private cargarBodegasIniciales() {
    // Arreglo con los datos iniciales de las bodegas
    const notas = [
      { nombre: "la esquina", peso: 500, precio: 150, tipo: "vacuno" },
      { nombre: "la viejita", peso: 400, precio: 132, tipo: "cerdo" },
      { nombre: "mini market", peso: 800, precio: 400, tipo: "pollo" },
      { nombre: "al frente", peso: 200, precio: 120, tipo: "vacuno" },
    ];

    // Recorre cada nota y la agrega al modelo de persona
    notas.forEach((nota) => {
      this.mPersona.agregarBodega(new Cl_mBodega(nota));
    });

    // Actualiza la vista con los datos cargados
    this.actualizarVista();
  }

  // Método para procesar una nueva bodega desde la vista
  private procesar1Bodega() {
    // Solicita los datos de la bodega a la vista (asincrónico)
    this.cBodega.solicitarBodega((bodega) => {
      // Si el usuario no canceló (bodega no es nula)
      if (bodega !== null) {
        // Agrega la nueva bodega al modelo
        this.mPersona.agregarBodega(bodega);
        // Actualiza la vista con los nuevos totales
        this.actualizarVista();
      }
    });
  }

  // Método para refrescar los datos en la vista
  private actualizarVista() {
    // Llama al método de la vista pasando los datos calculados
    this.vPersona.mostrarBodegas({
      bodegas: this.mPersona.bodegas,
      totalKgs: this.mPersona.totalKgs,
      bodegaMejorPrecio: this.mPersona.bodegaMejorPrecio(),
      mejorPrecio: this.mPersona.mejorPrecio(),
      cantidadRegistros: this.mPersona.cantidadRegistros(),
      ultimoPrecio: this.mPersona.ultimoPrecio(),
      nombresConValorSuperiorAlUltimo: this.mPersona.nombresConValorSuperiorAlUltimo(),
      porcentajeVacuno: this.mPersona.porcentajeVacuno(),
      bodegaVacunoMasCostosa: this.mPersona.bodegaVacunoMasCostosa(),
    });
  }
}
