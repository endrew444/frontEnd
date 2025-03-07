const readline = require('readline');

// Criando a interface para capturar a entrada do usuário no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Sorteio entre 10 participantes
const participantes = ["Ana", "Bruno", "Marcelo", "Cida", "Endrew", "Felipe", "Gabrielly", "julia", "Igor", "Juliana"];

function sorteioParticipante() {
    let vencedor = participantes[Math.floor(Math.random() * participantes.length)];
    console.log(`O vencedor do sorteio é: ${vencedor}`);
}

// 2. Calcular quantos dias faltam para o vencimento de uma conta
function diasParaVencimento(dataVencimento) {
    const hoje = new Date();
    const vencimento = new Date(dataVencimento);
    const diferencaEmMilissegundos = vencimento - hoje;
    const dias = diferencaEmMilissegundos / (1000 * 60 * 60 * 24);
    
    if (dias > 0) {
        console.log(`Faltam ${Math.ceil(dias)} dias para o vencimento.`);
    } else {
        console.log(`A conta venceu há ${Math.abs(Math.floor(dias))} dias.`);
    }
}

// 3. Remover pontos e hífen do CPF
function formatarCPF(cpf) {
    return cpf.replace(/[^\d]/g, ''); // Remove qualquer caractere que não seja número
}

// 4. Sistema de agendamento de eventos e contagem regressiva
function agendarEvento() {
    rl.question("Digite o nome do evento: ", (evento) => {
        rl.question("Digite a data do evento (formato yyyy-mm-dd): ", (dataEvento) => {
            const dataEventoObj = new Date(dataEvento);
            const hoje = new Date();
            const diferencaEmMilissegundos = dataEventoObj - hoje;
            const diasRestantes = diferencaEmMilissegundos / (1000 * 60 * 60 * 24);

            if (diasRestantes > 0) {
                console.log(`Faltam ${Math.ceil(diasRestantes)} dias para o evento "${evento}".`);
            } else if (diasRestantes < 0) {
                console.log(`O evento "${evento}" já passou.`);
            } else {
                console.log(`O evento "${evento}" é hoje!`);
            }

            rl.close();
        });
    });
}

// 5. Jogo de adivinhar um número aleatório entre 1 e 50
function jogoAdivinhacao() {
    const numeroAleatorio = Math.floor(Math.random() * 50) + 1;
    let tentativas = 0;

    function tentarAdivinhar() {
        rl.question("Tente adivinhar um número entre 1 e 50: ", (resposta) => {
            const numero = parseInt(resposta);
            tentativas++;

            if (numero > numeroAleatorio) {
                console.log("Muito alto! Tente novamente.");
                tentarAdivinhar();
            } else if (numero < numeroAleatorio) {
                console.log("Muito baixo! Tente novamente.");
                tentarAdivinhar();
            } else {
                console.log(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
                rl.close();
            }
        });
    }

    tentarAdivinhar();
}

// Funções para execução das tarefas

// Sorteio de participante
sorteioParticipante();

// Calcular dias para o vencimento de uma conta
rl.question("Digite a data de vencimento da conta (formato yyyy-mm-dd): ", (dataVencimento) => {
    diasParaVencimento(dataVencimento);
    
    // Remover pontos e hífen do CPF
    rl.question("Digite um CPF (formato xxx.xxx.xxx-xx): ", (cpf) => {
        const cpfFormatado = formatarCPF(cpf);
        console.log(`CPF sem formatação: ${cpfFormatado}`);
        
        // Agendar evento
        agendarEvento();

        // Iniciar jogo de adivinhação
        jogoAdivinhacao();
    });
});
