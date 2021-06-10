//Pedimos los valores al usuario

let firstNumber = prompt("Ingrese un número");
let secondNumber = prompt("Ingrese un numero");

//Validamos que ambos datos ingresados sean numericos
//firstNumber debe ser numerico y secondNumber debe ser numerico
if(!isNaN(firstNumber) && !isNaN(secondNumber)){
    let suma = parseInt(firstNumber) + parseInt(secondNumber);
}else{
    alert("Los valores deben ser númericos");
}
alert("Suma " + suma);


//Ejercicio 1


var kmxTanque = 45*15;
var distanciaRecorrer = parseInt(prompt("Distancia a recorrer"));

if(kmxTanque > distanciaRecorrer){
    alert("Puedes viajar sin reabastecer ");
}else{
    let reabastecer = distanciaRecorrer/kmxTanque;
    mensaje = "Deberas reabastecer " + Math.round(reabastecer)  + " veces ";
    alert(mensaje);
}



// Ejercicio 2

var modelo = prompt("Ingrese el modelo");
var cantidad;

if(modelo == 'Motor1.6'){
    cantidad = prompt("Ingrese cantidad");
    var tanques = (15*cantidad)/50;
    alert("Va necesitar " + tanques + "tanques de nafta");
    }else if(modelo == 'Motor1.8'){
        cantidad = prompt("Ingrese cantidad");
        var tanques = (12*cantidad)/50;
        alert(tanques);
        }else if(modelo == 'Motor2.0'){
            cantidad = prompt("Ingrese cantidad");
            var tanques = (10*cantidad)/50;
            alert(tanques);
        }
else{
    alert("ERROR en el nombre del modelo");
}



//Ejercicio 3
var dial = parseInt(prompt("Ingrese un dial"));

if(dial%2==0){
    alert("Ingrese un numero impar");
}else if(dial >= 89.9){
    alert("El dial es mayor a 89.9");
}else if(dial < 107.9){
    alert("El dial es menor a 107.9");
}else{
    alert("Fuera de rango");
}


//Ejercicio 4

var cantidad = parseInt(prompt("Ingrese la cantidad de dinero que quiere transferir"));
let fondo = 100;

if(fondo < cantidad){
    alert("Usted tiene cantidad de dinero para transferir");
    let destinatario = "yadhira";
    destinatario = prompt("Ingrese destinatario");
    if(true){
        alert("El destinatario Existe, Hola " + destinatario);

    }else{
        alert("El destintario no existe");
    }
    alert("Transaccion Exitosa");
}
else {
    alert("Usted no tiene la cantidad de dinero");
}



