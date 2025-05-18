class GeneradorReporte {
  generar() {
    console.log("Generando reporte");
  }
}

class Reporte {
  constructor(generador) {
    this.generador = generador;
  }

  mostrar() {
    this.generador.generar();
  }
}

const generador = new GeneradorReporte();
const reporte = new Reporte(generador);

reporte.mostrar();