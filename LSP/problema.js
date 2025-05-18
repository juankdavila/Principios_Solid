class Animal {
  hacerSonido() {
    console.log("Sonido.");
  }
}

class Gato extends Animal {
  hacerSonido() {
    throw new Error("¡Gato no ladra!");
  }
}

const gato = new Gato();
gato.hacerSonido(); 