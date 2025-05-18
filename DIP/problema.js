class GeneradorReporte {
  generar() {
    console.log("Generando reporte");
  }
}

class Reporte {
  constructor() {
    this.generador = new GeneradorReporte();
  }

  mostrar() {
    this.generador.generar();
  }
}