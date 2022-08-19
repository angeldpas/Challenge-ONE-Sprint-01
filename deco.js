
/**
 * Sustituye las vocales de un texto por un código.
 * @returns el valor de la variable emparejada.
 */
/**
 * Toma el texto del área de texto, reemplaza las vocales con el código correspondiente y muestra el
 * resultado en el párrafo
 * @returns el valor de la variable emparejada.
 */
function codificar(){
var textarea=document.querySelector("#cod_des").value;

var codificar = {a:"ai",e:"enter",i:"imes",o:"ober",u:"efat"};
textarea = textarea.replace(/a|e|i|o|u/g, function(matched){
 return codificar[matched];
});
console.log(textarea);
document.getElementById("cod_desr").innerHTML=textarea;
document.querySelector('.rv2 > img').style.display = "none";
    document.getElementById("cod_des").value = "";
    document.querySelector('.caja-textos').style.display="none";
    document.getElementById("cod_desr").style.display = "block";
    document.getElementById("bt-copiar").style.display = "inherit";
}


var boton1 = document.querySelector("#bt-codificar");
boton1.onclick = codificar;

/**
 * La función descodificar() toma el texto del área de texto con el id cod_des, reemplaza las palabras
 * ai, enter, imes, ober y efat con las letras a, e, i, o y u, y luego muestra el resultado en el área
 * de texto con el id cod_desr
 * @returns Se está devolviendo el área de texto.
 */
/**
 * Reemplaza las vocales con las vocales en el código.
 * @returns Se está devolviendo el área de texto.
 */
function descodificar(){
  var textarea=document.querySelector("#cod_des").value;
  
  var descodificar = {ai:"a",enter:"e",imes:"i",ober:"o",efat:"u"};
  textarea = textarea.replace(/ai|enter|imes|ober|efat/g, function(matched){
   return descodificar[matched];
  });
  
  document.getElementById("cod_desr").innerHTML=textarea;
  document.querySelector('.rv2 > img').style.display = "none";
    document.getElementById("cod_des").value = "";
    document.querySelector('.caja-textos').style.display="none";
    document.getElementById("cod_desr").style.display = "block";
    document.getElementById("bt-copiar").style.display = "inherit";
  
  }
  
  
  var boton1 = document.querySelector("#bt-descodificar");
  boton1.onclick = descodificar;

/**
 * Selecciona el texto en el área de texto, luego lo copia en el portapapeles
 */
function copiar(){
  var texto = document.getElementById("cod_desr");
  texto.select();
  navigator.clipboard.writeText(texto.value);
}