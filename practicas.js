class Usuario{
  constructor(nombre, apellido){
      this.nombre = nombre
      this.apellido = apellido
      this.libros = []
      this.mascotas = []
  }

  getFullName(){
    return `Bienvenido ${this.nombre} ${this.apellido}`
  }
  addMascotas(nuevaMascota){
    return this.mascotas.push(nuevaMascota)
  }
  countMascotas(){
    return `Usted tiene  ${this.mascotas.length} mascotas`
  }
  addBook(nombre,autor){
    return this.libros.push({"nombre":nombre, "autor":autor})
  }
  geetBookNames(){
    return this.libros.map(obra => obra.nombre)
  }

}
const usuario = new Usuario("Elonk", "Musk")
// addMascotas
usuario.addMascotas("perro")
usuario.addMascotas("gato")

//addBook
usuario.addBook("Hamsun Knut","Hambre")
usuario.addBook("Victor Hugo","Los Miserables")

console.log(usuario.getFullName());
console.log(usuario.countMascotas());
console.log(usuario.geetBookNames());




    
