// Las funciones pueden tener un contexto de this
// donde las podremos utilizar para implementar
// herencia basada en prototipos

// Función normal
// Se puede usar como una clase ya que js es un
// lenguaje multiparadigma que tambien implementa
// la herencia basada en prototipos
function Fn() {
    return 'Hola Evelyn'
}

const r = Fn()
console.log(r);

// Podemos llamar a las funciones en js con la
// palabra reservada new para crear una instancia
// las funciones en js tienen un contexto de this
function SecondFn() {
// this es la función
    this.prop = 'propiedad'
    // no es necesario usar el return cuando usamos this
    // por que el prototipo de las funciones se le esta
    // asignando al valor de this
    //return this
}

// Podemos extender el prototipo de esta función
// Agregamos una función anónima
SecondFn.prototype.evelyn = function() {}

// Agregamos una función definida
SecondFn.prototype.omar = function FuncionDePrototipo() {}
// new nos devuelve un objeto literal
// Lo que ocurre es que se crea un objeto literal
// del aire, el segundo paso es que este objeto
// literal toma todas las propiedades que le asignemos
// mediante la palabra reservada this
// y finalmente va a ignorar el return que hayamos definido
// y va a retornar de manera implícita this
const res = new SecondFn()
// Este res tiene un prototype al cual podemos acceder
// usando __proto__
console.log(res.__proto__);

// La palabra reservada de class en Js en unica y
// exclusivamente sugar syntax ya que por debajo
// lo que hace class es que crea una funcion de
// la manera anterior mencionada.
// Cuando creamos los métodos y las propiedades
// lo hace utilizando this.prop = 'propiedad'
// Y los métodos los va a asignar a un prototype
// SecondFn.prototype.omar = function FuncionDePrototipo() {}

// Fat arrow function
// No pueden ser llamadas con la palabra reservado new
const fatFn = () => {
    return 'Hooolaa Evelyn'
}

const r1 = fatFn()
console.log(r1)

// Fat arrow function tienen un return implicito
const fnR = () => 2
console.log(fnR());
