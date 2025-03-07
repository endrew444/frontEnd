const readline = require('readline');

// 1. Exibir a data e hora atuais no formato: "Hoje é [dd/mm/aaaa] e agora são [hh:mm:ss]"
function exibirDataEHora() {
    let agora = new Date();
    let dia = String(agora.getDate()).padStart(2, '0');
    let mes = String(agora.getMonth() + 1).padStart(2, '0'); // Meses começam de 0
    let ano = agora.getFullYear();
    let hora = String(agora.getHours()).padStart(2, '0');
    let minuto = String(agora.getMinutes()).padStart(2, '0');
    let segundo = String(agora.getSeconds()).padStart(2, '0');

    let dataHoraAtual = `Hoje é ${dia}/${mes}/${ano} e agora são ${hora}:${minuto}:${segundo}`;
    console.log(dataHoraAtual);
}

exibirDataEHora();

// 2. Calcular a idade do usuário a partir da data de nascimento
function calcularIdade(dataNascimento) {
    let hoje = new Date();
    let nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    let mes = hoje.getMonth() - nascimento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade;
}

// Função para pedir ao usuário a data de nascimento e calcular a idade
function pedirDataNascimento() {
    rl.question("Digite sua data de nascimento (formato: aaaa-mm-dd): ", (dataNascimento) => {
        console.log(`Sua idade é: ${calcularIdade(dataNascimento)} anos`);
        rl.close();
    });
}

// 3. Função para retornar o nome do dia da semana
function nomeDiaSemana(data) {
    const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    let dia = new Date(data).getDay();
    return diasSemana[dia];
}

let dataTeste = "2025-02-14"; // Exemplo de uma data
console.log(`O dia da semana para ${dataTeste} é: ${nomeDiaSemana(dataTeste)}`);

// 4. Calcular os dias faltando para o próximo Natal
function diasParaNatal() {
    let hoje = new Date();
    let natal = new Date(hoje.getFullYear(), 11, 25); // 25 de Dezembro (mês 11 é Dezembro, pois meses começam de 0)
    
    // Se o Natal já passou neste ano, calcula para o próximo ano
    if (hoje > natal) {
        natal.setFullYear(hoje.getFullYear() + 1);
    }
    
    let diferenca = natal - hoje;
    let diasFaltando = Math.floor(diferenca / (1000 * 60 * 60 * 24)); // Convertendo de milissegundos para dias
    return diasFaltando;
}

console.log(`Faltam ${diasParaNatal()} dias para o próximo Natal.`);

// 5. Função para calcular a diferença em dias entre duas datas
function calcularDiferencaEmDias(data1, data2) {
    let d1 = new Date(data1);
    let d2 = new Date(data2);
    let diferenca = d2 - d1; // Diferença em milissegundos
    return Math.floor(diferenca / (1000 * 60 * 60 * 24)); // Convertendo de milissegundos para dias
}

let dataInicial = "2025-02-01";
let dataFinal = "2025-02-14";
console.log(`A diferença entre as datas é de ${calcularDiferencaEmDias(dataInicial, dataFinal)} dias.`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

pedirDataNascimento();
