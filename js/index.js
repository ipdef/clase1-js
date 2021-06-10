//type
var numero = 7
console.log('El tipo de numero es: ' + typeof(numero))
console.log('Valor', numero);

//string
var cadenaDeCaracteres = "Esto es una cadena";
console.log("El tipo de caracter es: " + typeof(cadenaDeCaracteres))
console.log('Valor', cadenaDeCaracteres)

//boolean
var myBooleanVariable = true; //false
console.log('El tipo de la variable myBooleanVariable es: ' + typeof(myBooleanVariable))
console.log('Valor', myBooleanVariable)

//funciones del navegador
// alert, prompt, confirm

alert("Hola Mundo!")

numero = prompt("Ingrese un numero")
alert('El numero ingresado fue: ' + numero)

myBooleanVariable = confirm('Desea continuar');

alert('Resultado: ' + myBooleanVariable)

if (myBooleanVariable){
    alert('Usted confirmó')
}else{
    alert('Usted no confirmo')
}
if(myBooleanVariable){
    var myvariable = 'Hola';
}
console.log(myvariable);

myBooleanVariable = confirm('Desea continuar');
let numero1 = prompt('Ingrese el primer numero');
let numero2 = prompt('Ingrese el segundo numero');

if(numero1 > numero2){
    alert('El primer número ingresado al segundo')
}else if(numero1 == numero2){
    alert('Los numeros ingresados  son iguales')
}else{
    alert('El primer número ingresado es menor o igual al segundo')
}

let colores = ['amarillo', 'azul']
let color = azul;