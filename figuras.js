//Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden:" + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es :" + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es :" + areaCuadrado + "cm2");
console.groupEnd();

//Código del Triángulo
console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triángulo miden: " 
+ ladoTriangulo1 + "cm, " 
+ ladoTriangulo2 + "cm, " 
+ baseTriangulo3 + "cm");

console.log("La altura del triángulo es de " + alturaTriangulo + "cm");
const perimetroTriangulo = (ladoTriangulo1+ladoTriangulo2+baseTriangulo3);
console.log("El perímetro del triángulo es :" + perimetroTriangulo + "cm");
const areaTriangulo = (baseTriangulo3*alturaTriangulo) /2;
console.log("El area del triángulo es :" + areaTriangulo + "cm2");
console.groupEnd();

//Código del Círculo
console.group("Círculo");

// Radio
const radioCirculo = 4;
console.log("El radio del círculo es " + radioCirculo + "cm");

// Diámetro
const diametroCirculo = radioCirculo*2;
console.log("El diámetro del círculo es " + diametroCirculo + "cm");

// Pi
const PI = Math.PI;
console.log("El PI del círculo es " + PI);

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es " + perimetroCirculo + "cm");

// Area
const areaCirculo = (radioCirculo*radioCirculo*PI);
console.log("El area del círculo es " + areaCirculo + "cm2");

console.groupEnd();
