// Preguntamos al usuario y almacenamos las respuestas en variables
const nombre = prompt("¿Cuál es tu nombre?");
const edad = prompt("¿Cuántos años tienes?");
const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

// Mostramos el mensaje personalizado
alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

// Preguntamos si le gusta estudiar el lenguaje
const gustaEstudiar = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);

// Estructura condicional para mostrar el mensaje según la respuesta
if (gustaEstudiar == "1") {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (gustaEstudiar == "2") {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
} 
