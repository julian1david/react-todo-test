const totalTodos = 0;
console.log(totalTodos > 0); // Esto da false
const hayTodos = totalTodos;
console.log(hayTodos); // Esto da 0
const hayTodosBoolean = !!totalTodos;
console.log(hayTodosBoolean); // Esto da false
const hayTodosBoolean2 = !totalTodos;
console.log(hayTodosBoolean2); // Esto da true

/* With arrays */
const searchTodos = [];
console.log(searchTodos.length); // Esto da 0.
console.log(!searchTodos.length); // Esto da true.
console.log(!!searchTodos.length); // Esto da false.
const hola = searchTodos.map(item => console.log(item));
console.log(hola);
searchTodos.push('Item one');
console.log(!searchTodos.length); // Esto da false.
console.log(!!searchTodos.length); // Esto da true.

const suma = 7 + '25';
console.log(suma);
