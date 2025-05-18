class Animal {
  volar() {}
  correr() {}
}

class Perro extends Animal {
  volar() {
    throw new Error("¡No puedo volar!");
  }

  correr() {
    console.log("Perro corriendo");
  }
}
  