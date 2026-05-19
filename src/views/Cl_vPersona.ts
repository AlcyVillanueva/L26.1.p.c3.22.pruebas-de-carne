import { I_vPersona } from "../interfaces/I_vPersona.js";
import Cl_mBodega from "../models/Cl_mBodega.js";

const html = String.raw;

// Vista principal de la aplicación
export default class Cl_vPersona implements I_vPersona {
  // Elementos del DOM para mostrar resultados
  lblTotalKgs: HTMLLabelElement;
  lblBodegaMejorPrecio: HTMLLabelElement;
  lblMejorPrecio: HTMLLabelElement;
  lblCantidadRegistros: HTMLLabelElement;
  lblUltimoPrecio: HTMLLabelElement;
  lblNombresSuperiorAlUltimo: HTMLLabelElement;
  btNuevaBodega: HTMLButtonElement;
  tbBodegas: HTMLTableElement;
  vista: HTMLElement | null;

  // Constructor: Busca los elementos por su ID en el HTML
  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevaBodega = document.getElementById("body_btNuevaBodega") as HTMLButtonElement;
    this.lblTotalKgs = document.getElementById("body_lblTotalKgs") as HTMLLabelElement;
    this.lblBodegaMejorPrecio = document.getElementById("body_lblBodegaMejorPrecio") as HTMLLabelElement;
    this.lblMejorPrecio = document.getElementById("body_lblMejorPrecio") as HTMLLabelElement;
    this.lblCantidadRegistros = document.getElementById("body_lblCantidadRegistros") as HTMLLabelElement;
    this.lblUltimoPrecio = document.getElementById("body_lblUltimoPrecio") as HTMLLabelElement;
    this.lblNombresSuperiorAlUltimo = document.getElementById("body_lblNombresSuperiorAlUltimo") as HTMLLabelElement;
    this.tbBodegas = document.getElementById("body_tbBodegas") as HTMLTableElement;
  }

  // Asigna la función que se ejecutará al dar click en Nueva Bodega
  onNuevaBodega(callback: () => void): void {
    this.btNuevaBodega.onclick = callback;
  }

  // Método para renderizar la tabla y los totales
  mostrarBodegas({
    bodegas,
    totalKgs,
    bodegaMejorPrecio,
    mejorPrecio,
    cantidadRegistros,
    ultimoPrecio,
    nombresConValorSuperiorAlUltimo,
  }: {
    bodegas: Cl_mBodega[];
    totalKgs: number;
    bodegaMejorPrecio: string;
    mejorPrecio: number;
    cantidadRegistros: number;
    ultimoPrecio: number;
    nombresConValorSuperiorAlUltimo: string[];
  }): void {
    // Limpia la tabla
    this.tbBodegas.innerHTML = "";
    // Agrega una fila por cada bodega
    bodegas.forEach((b) => {
      const tr = document.createElement("tr");
      tr.innerHTML = html`
        <td>${b.nombre}</td>
        <td>${b.peso}</td>
        <td>${b.precio}</td>
        <td>${b.precioPorKg().toFixed(2)}</td>
      `;
      this.tbBodegas.appendChild(tr);
    });
    // Actualiza las etiquetas de resumen
    this.lblTotalKgs.innerHTML = totalKgs.toFixed(2);
    this.lblBodegaMejorPrecio.innerHTML = bodegaMejorPrecio;
    this.lblMejorPrecio.innerHTML = mejorPrecio.toFixed(2);
    this.lblCantidadRegistros.innerHTML = cantidadRegistros.toString();
    this.lblUltimoPrecio.innerHTML = ultimoPrecio.toFixed(2);
    this.lblNombresSuperiorAlUltimo.innerHTML = nombresConValorSuperiorAlUltimo.length > 0
      ? nombresConValorSuperiorAlUltimo.join(", ")
      : "-";
  }
}
