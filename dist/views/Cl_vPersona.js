const html = String.raw;
// Vista principal de la aplicación
export default class Cl_vPersona {
    // Elementos del DOM para mostrar resultados
    lblTotalKgs;
    lblBodegaMejorPrecio;
    lblMejorPrecio;
    btNuevaBodega;
    tbBodegas;
    vista;
    // Constructor: Busca los elementos por su ID en el HTML
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevaBodega = document.getElementById("body_btNuevaBodega");
        this.lblTotalKgs = document.getElementById("body_lblTotalKgs");
        this.lblBodegaMejorPrecio = document.getElementById("body_lblBodegaMejorPrecio");
        this.lblMejorPrecio = document.getElementById("body_lblMejorPrecio");
        this.tbBodegas = document.getElementById("body_tbBodegas");
    }
    // Asigna la función que se ejecutará al dar click en Nueva Bodega
    onNuevaBodega(callback) {
        this.btNuevaBodega.onclick = callback;
    }
    // Método para renderizar la tabla y los totales
    mostrarBodegas({ bodegas, totalKgs, bodegaMejorPrecio, mejorPrecio, }) {
        // Limpia la tabla
        this.tbBodegas.innerHTML = "";
        // Agrega una fila por cada bodega
        bodegas.forEach((b) => {
            const tr = document.createElement("tr");
            tr.innerHTML = html `
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
    }
}
//# sourceMappingURL=Cl_vPersona.js.map