const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Pedir ao usuário para inserir seu nome e exibir a quantidade de caracteres desse nome
rl.question("Digite seu nome: ", (nome) => {
    console.log(`O nome "${nome}" tem ${nome.length} caracteres.`);
    
    // 2. Função que recebe uma frase e retorna a mesma frase toda em maiúsculas
    function fraseEmMaiusculas(frase) {
        return frase.toUpperCase();
    }

    rl.question("Digite uma frase para colocar em maiúsculas: ", (frase) => {
        console.log(`Frase em maiúsculas: ${fraseEmMaiusculas(frase)}`);
        
        // 3. Substituir todas as ocorrências da palavra "JavaScript" por "JS"
        rl.question("Digite uma frase para substituir 'JavaScript' por 'JS': ", (texto) => {
            let textoAlterado = texto.replace(/JavaScript/g, 'JS');
            console.log(`Texto alterado: ${textoAlterado}`);
            
            // 4. Função que recebe um nome completo e retorna apenas o primeiro nome
            function primeiroNome(nomeCompleto) {
                return nomeCompleto.split(" ")[0];
            }

            rl.question("Digite seu nome completo: ", (nomeCompleto) => {
                console.log(`Seu primeiro nome é: ${primeiroNome(nomeCompleto)}`);
                
                // 5. Pedir ao usuário para inserir um texto contendo vírgulas e transformá-lo em um array de palavras
                rl.question("Digite um texto contendo vírgulas: ", (textoComVirgulas) => {
                    let arrayDePalavras = textoComVirgulas.split(",");
                    console.log("Array de palavras:", arrayDePalavras);
                    
                    // 6. Validar se um e-mail contém "@" e "."
                    function validarEmail(email) {
                        return email.includes("@") && email.includes(".");
                    }

                    rl.question("Digite seu e-mail: ", (email) => {
                        if (validarEmail(email)) {
                            console.log("E-mail válido!");
                        } else {
                            console.log("E-mail inválido!");
                        }
                        
                        rl.close();
                    });
                });
            });
        });
    });
});
