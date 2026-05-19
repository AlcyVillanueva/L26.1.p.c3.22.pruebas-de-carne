// Modelo para la Persona que acumula las bodegas
export default class Cl_mPersona {
    // Lista pública de bodegas procesadas
    bodegas = [];
    // Método para agregar una bodega a la lista
    agregarBodega(bodega) {
        this.bodegas.push(bodega);
    }
    // Getter para obtener el total en Kilogramos
    get totalKgs() {
        return this.bodegas.reduce((sum, b) => sum + b.peso, 0) / 1000;
    }
    // Getter para obtener el total en gramos
    get totalGramos() {
        return this.bodegas.reduce((sum, b) => sum + b.peso, 0);
    }
    // Getter para obtener el nombre de la bodega con mejor precio
    bodegaMejorPrecio() {
        if (this.bodegas.length === 0)
            return "";
        let mejor = this.bodegas[0];
        // Recorremos todas las bodegas de la lista una por una
        this.bodegas.forEach((b) => {
            // 'b' representa la bodega que se está revisando en la vuelta actual
            // Comparamos el precio de la bodega actual con el de la que creíamos mejor
            if (b.precioPorKg() < mejor.precioPorKg()) {
                // Si la actual es más barata, se convierte en la nueva 'mejor'
                mejor = b;
            }
        });
        return mejor.nombre;
    }
    // Getter para obtener el mejor precio por Kg
    mejorPrecio() {
        if (this.bodegas.length === 0)
            return 0;
        let mejor = this.bodegas[0];
        this.bodegas.forEach((b) => {
            if (b.precioPorKg() < mejor.precioPorKg()) {
                mejor = b;
            }
        });
        return mejor.precioPorKg();
    }
}
//# sourceMappingURL=Cl_mPersona.js.map