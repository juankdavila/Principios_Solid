class ReportePerro {
  generar() {
    console.log("Generando reporte del perro.");
  }

  guardar() {
    console.log("Guardando reporte en archivo.");
  }
}

const reporte = new ReportePerro();
reporte.generar();
reporte.guardar();