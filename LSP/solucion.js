class Animal {
  hacerSonido() {
    console.log("Sonido.");
  }
}

class Perro extends Animal {
  hacerSonido() {
    console.log("Guau!");
  }
}

class Gato extends Animal {
  hacerSonido() {
    console.log("Miau!");
  }
}

const perro = new Perro();
const gato = new Gato();

perro.hacerSonido();
gato.hacerSonido();