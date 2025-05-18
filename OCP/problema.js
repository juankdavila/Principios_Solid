class Reporte {
  generar(tipo) {
    if (tipo === "perro") {
      console.log("Reporte de perro");
    } else if (tipo === "gato") {
      console.log("Reporte de gato");
    }
  }
}

const resp = new Reporte();
resp.generar("perro");
resp.generar("gato");