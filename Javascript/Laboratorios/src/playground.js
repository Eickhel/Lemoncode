const mainStyle = [
    "background: #607D8B",
    "border: 1px solid #3E0E02",
    "color: white",
    "display: block",
    "text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)",
    "box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
    "line-height: 25px",
    "font-size: 1.2em",
    "font-weight: bold"
].join(";");
const exerciseStyle = ["font-size: 1.1em", "font-weight: bold"].join(";");
// ----------------------------------------------
// - Array operations
// ----------------------------------------------
console.log("%c Array operations ", mainStyle);
const numbers = ["One", "Two", "Three"];
const letters = ["A", "B", "C"];
const agentSmith = {
    name: "Smith",
    role: "Agent",
    country: "The Matrix"
};
// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga
// y devuelva su primer elemento. U􀦞liza destructuring.
const head = ([first]) => first;
console.log("%cHead: ", exerciseStyle, head(numbers)); // "One"
// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada
// devuelta todos menos el primer elemento. U􀦞liza rest operator.
const tail = ([, ...args]) => args;
console.log("%cTail: ", exerciseStyle, tail(numbers)); // ["Two", "Three"]
// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada
// devuelva todos los elementos menos el último. Uliza los métodos que ofrece
// Array.prototype.
const init = inputArray => inputArray.slice(0, inputArray.length - 1);
console.log("%cInit: ", exerciseStyle, init(numbers)); // ["One", Two"]
// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada
// devuelva el último elemento.
const last = inputArray => inputArray.slice(-1);
console.log("%cLast: ", exerciseStyle, last(numbers)); // ["Three"]
// ----------------------------------------------
// - Concat
// ----------------------------------------------
console.log("%c Concat ", mainStyle);
// Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
// devuelva la concatenación de ambos. Utiliza rest / spread operators
const concat = (a, b) => [...a, ...b];
console.log("%cConcat: ", exerciseStyle, concat(numbers, letters)); // ["One", "Two", "Three", "A", "B", "C"]
// Concat - Opcional
// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de
// entrada (más de 2).
const concatOpt = (...args) => [].concat(...args);
console.log("%cConcat - Opt: ", exerciseStyle, concatOpt(numbers, letters, numbers, letters));
// ["One", "Two", "Three", "A", "B", "C", "One", "Two", "Three", "A", "B", "C"]
// ----------------------------------------------
// - Clone Merge
// ----------------------------------------------
console.log("%c Clone Merge ", mainStyle);
// Clone
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
function clone(source) {
    return Object.assign({}, source);
}
console.log("%cClone: ", exerciseStyle, clone(agentSmith)); // { name: "Smith", role: "Agent", country: "The Matrix" }
// Merge
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades
// de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
// Por ejemplo, dados estos 2 objetos:
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
// el resultado de mezclar a sobre b sería:
// merge(a, b) // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
// TIP: Puedes usar la función "clone" del apartado A.
function merge(source, target) {
    return Object.assign(target, source);
}
console.log("%cMerge: ", exerciseStyle, merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
// ----------------------------------------------
// - Read Books
// ----------------------------------------------
console.log("%c Read Books ", mainStyle);
// isBookRead
// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.
// Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false
// TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true }
];
function isBookRead(books, titleToSearch) {
    let result = books.find(book => book.title === titleToSearch);
    return typeof result === "undefined" ? false : result.isRead;
}
console.log("%cisBookRead - Devastación: ", exerciseStyle, isBookRead(books, "Devastación"));
console.log("%cisBookRead - Canción de hielo y fuego: ", exerciseStyle, isBookRead(books, "Canción de hielo y fuego"));
console.log("%cisBookRead - Los Pilares de la Tierra: ", exerciseStyle, isBookRead(books, "Los Pilares de la Tierra"));
// Opcional
// Utiliza Typescript para añadir los tipos adecuados.
console.log("%c Read Books - TypeScript", mainStyle);
const booksTS = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true }
];
const isBookReadTS = (books, titleToSearch) => {
    const result = books.find(book => book.title === titleToSearch);
    return typeof result === "undefined" ? false : result.isRead;
};
console.log("%cisBookRead - Devastación: ", exerciseStyle, isBookReadTS(booksTS, "Devastación"));
console.log("%cisBookRead - Canción de hielo y fuego: ", exerciseStyle, isBookReadTS(booksTS, "Canción de hielo y fuego"));
console.log("%cisBookRead - Los Pilares de la Tierra: ", exerciseStyle, isBookReadTS(booksTS, "Los Pilares de la Tierra"));
// ----------------------------------------------
// - Slot Machine
// ----------------------------------------------
console.log("%c Slot Machine ", mainStyle);
// Slot Machine
// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda.
// Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios
//que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá
// mostrarse por consola el mensaje:
// "Congratulations!!!. You won <número de monedas> coins!!"
// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:
// "Good luck next time!!".
class SlotMachine {
    constructor() {
        this.coins = 0;
    }
    spinSlot() {
        return Boolean(Math.floor(Math.random() * 2));
    }
    play() {
        this.coins++;
        if ((this.spinSlot() === this.spinSlot()) === this.spinSlot()) {
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins = 0;
        }
        else {
            console.log("Good luck next time!!");
        }
    }
}
const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
// ----------------------------------------------
// - Extras
// ----------------------------------------------
// ----------------------------------------------
// Curry Setter
// ----------------------------------------------
// --- EJERCICIO ------------------------------------------------------------------------
console.log("%c Curry Setter ", mainStyle);
// En un formulario tenemos un objeto con los campos name, surname y age que representan un usuario. Crea una función "set"
// que reciba un objeto con los campos de usuario, el nombre de una propiedad y su valor y actualice la propiedad de objeto
// con el valor pasado como argumento. El ejercicio debe de seguir las siguientes normas:
// 1. La función debe ser pura, es decir, debe crear un nuevo objeto sin modificar el existente.
const set = (user, property, value) => {
    let updatedUser = Object.assign({}, user);
    updatedUser[property] = value;
    return updatedUser;
};
const julia = { name: "Julia", surname: "Álvarez", age: 19 };
const updatedJulia = set(julia, "age", 25);
console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false
// --- OPCIONAL ------------------------------------------------------------------------
console.log("%c Curry Setter - Optional", mainStyle);
// Currifica dicha función para que permita crear funciones donde el argumento del nombre de la propiedad
// esté configurado previamente.
// Es decir, modifica la función "set" para poder crear "setName", "setSurname" y "setAge" que reciban sólo
// el objeto y el valor y sepan qué propiedad actualizar.
// Si quieres puedes extraer la firma de la interfaz sin ponerla en línea con la implementación.
const curriedSet = property => (user, value) => {
    let updatedUser = Object.assign({}, user);
    updatedUser[property] = value;
    return updatedUser;
};
const setName = curriedSet("name");
const setSurname = curriedSet("surname");
const setAge = curriedSet("age");
console.log(setName(julia, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurname(julia, "González")); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }
// 2) CALIFICACIONES
// Utilizando TypeScript escribe una función que reciba una lista de estudiantes (que tienen nombre y una lista de notas)
// y devuelva otra lista donde por cada estudiante devuelva su nombre, su nota más alta y la media de sus notas.
// Crea para ello dos entidades, una para representar al estudiante (Student) y otra para representar su nombre,
// nota más alta y media de notas (StudentSummary).
// No se permite el uso de clases.
// En caso de usar funciones auxiliares típalas.
// Puedes usar la función Number.prototype.toPrecision(3) para reducir el número de decimales de la media de calificaciones
// a tres números.
console.log("%c Calificaciones", mainStyle);
const students = [
    { name: "Juan", califications: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34] },
    { name: "Álvaro", califications: [4.49, 1.52, 7.0, 8.3, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01] },
    { name: "María", califications: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.8, 9.3] },
    { name: "Jorge", califications: [4.6, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69] },
    { name: "Mónica", califications: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48] }
];
const mean = list => list.reduce((total, next) => total + next) / list.length;
const summarizeClassRoom = studentList => studentList.map(({ name, califications }) => ({
    name,
    highestCalification: Math.max(...califications),
    averageCalifications: mean(califications).toPrecision(3)
}));
// const summarizeClassRoom = (studentList) => {
//   // Implementation here
// };
console.log(summarizeClassRoom(students));
// [
//   { name: 'Juan', highestCalification: 9.71, averageCalifications: '5.37' },
//   { name: 'Álvaro', highestCalification: 8.3, averageCalifications: '5.58' },
//   { name: 'María', highestCalification: 9.3, averageCalifications: '3.92' },
//   { name: 'Jorge', highestCalification: 9.07, averageCalifications: '5.38' },
//   { name: 'Mónica', highestCalification: 9.72, averageCalifications: '4.42' }
// ]
// Este ejericio ya venía resuelto en la plataforma. Es por esto que he hecho la versión LoDash
// Versión LoDash
console.log("%c Calificaciones - LoDash", mainStyle);
const calculate = (student) => {
    return {
        name: student.name,
        highestCalification: _.maxBy(student.califications),
        averageCalifications: parseFloat(_.meanBy(student.califications).toFixed(2))
    };
};
const _summarizeClassRoom = studentList => _.map(studentList, calculate);
console.log(_summarizeClassRoom(students));
