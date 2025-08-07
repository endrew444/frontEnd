export class Usuario{
    id?: number; //opcional - gerado pelo json server
    nome: string;
    email: string;
    senha: string;
    dataCriacao?: Date; //adc pelo servidor

    constructor(nome:string, email:string, senha:string){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}