export class Curriculo {
  // Construtor da classe Curriculo, define os atributos do currículo
  constructor(
    public id: number,
    public nome: string,
    public descricao: string,
    public pretensao: number,
    public linguas?: string,
    public telefone?: string,
    public email?: string
  ) {}

  // Converte o objeto Curriculo em um objeto literal para salvar no banco de dados
  toMap(): { [key: string]: any } {
    return {
      id: this.id,
      nome: this.nome,
      descricao: this.descricao,
      pretensao: this.pretensao,
      linguas: this.linguas,
      telefone: this.telefone,
      email: this.email
    };
  }

  // Cria um objeto Curriculo a partir de um objeto literal (ex: vindo do banco de dados)
  static fromMap(map: any): Curriculo {
    return new Curriculo(
      map.id,
      map.nome,
      map.descricao,
      map.pretensao,
      map.linguas,
      map.telefone,
      map.email
    );
  }
}