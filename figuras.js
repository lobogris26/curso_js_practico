//Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//Código del Triángulo
console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

//console.log("El perímetro del triángulo es :" + perimetroTriangulo + "cm");
function areaTriangulo(base, altura) {
    return (base * altura) /2;
}

//console.log("El area del triángulo es :" + areaTriangulo + "cm2");
console.groupEnd();

//Código del Círculo
console.group("Círculo");

function diametroCirculo(radio) {
    return radio * 2;
}

// Pi
const PI = Math.PI;
console.log("El PI del círculo es " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {

}

function calcularAreaTriangulo() {
    
}