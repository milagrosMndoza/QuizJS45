
//Ejercicio 1
var n1 = parseInt(prompt("ingrese el primer numero"));
var n2 = parseInt(prompt('ingrese el segundo numero'));
var n3 = parseInt(prompt('ingrese el tercer numero'));
if((n1>=n2)&&(n1>=n3)){
	var respuesta = n1;
	console.log("El numero mayor es: " + n1)
}
else if ((n2>=n1)&&(n2>=n3)){
	respuesta= n2;
	console.log("El numero mayor es: " + n2)
}
else if ((n3>=n1)&&(n3>=n2)){
	respuesta = n3;
	console.log("El numero mayor es : " + n3)
}
if ((n1<=n2)&&(n1<=n3)){
respuesta = n1;
	console.log("El numero menor es : " + n1)
}
else if ((n2<=n1)&&(n2<=n3)){
respuesta = n2;
	console.log("El numero menor es : " + n2)
}
else if ((n3<=n1)&&(n3<=n2)){
respuesta = n3;
	console.log("El numero menor es : " + n3)
}

//Ejercicio 2
var a =[15,  29, 78, 29, 40, 20, 18, 100, 78, 68];
var indicePares = [];
var indiceImpares=[];
a.map(function(elemento,indice){
  if (indice % 2 == 0) indicePares.push(elemento);
  else{
    indiceImpares.push(elemento);
  }
    
  });
document.write("Elementos de posición par: " +indicePares); +"\n"+
document.write("  Elementos de posición impar: " +indiceImpares);

//Ejercicio 3
var A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var respuesta = A.reverse();
console.log(respuesta)

//Ejercicio 4
var n = 4;
var n = 5;

function espacios (n)
{
  var s = "";
  for (var i = 0; i < n; i++)
   s += " ";
  return s;
}

for (var i = 0; i < n; i++) {
  var sp = espacios (n - (i+1));
  var content = "";
  for (j = 0; j < i+i; j++)
    content +=  j;
  console.log(sp + content);
}







