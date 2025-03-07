let texto = "Aula de JavaScript";

//contagem dos caracteres
console.log(texto.length); //18

//Manipulaçãp MAIÚSCULAS e minúsculas
console.log(texto.toUpperCase()); //MAIÚSCULA
console.log(texto.toLowerCase()); //minúscula

// partes da String
console.log(texto.substring(0,4));
console.log(texto.slice(-10));

// Substituição de texto
let NovoTexto = texto.replace("Java" , "type");
console.log(NovoTexto)

// trim (tesoura)
let Textoespaco = "  javaScript  ";
let TextoCortado = Textoespaco.trim();
console.log(Textoespaco);
console.log(TextoCortado);

// split (separação)
let linguagens = "JavaScript, Phyton, PHP, C++, Java";
let linguagensArray = linguagens.split(", ");
console.log(linguagens);
console.log(linguagensArray);