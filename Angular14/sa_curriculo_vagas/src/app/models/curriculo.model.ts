export class Curriculo {
  constructor(
    public id: number,
    public nome: string,
    public foto: string,
    public descricao: string,
    public pretensao: number
  ) {}

  // Converte o objeto Curriculo para um mapa (objeto literal)
  toMap(): { [key: string]: any } {
    return {
      id: this.id,
      nome: this.nome,
      foto: this.foto,
      descricao: this.descricao,
      pretensao: this.pretensao
    };
  }

  // Cria um objeto Curriculo a partir de um mapa (objeto literal)
  static fromMap(map: any): Curriculo {
    return new Curriculo(
      map.id,
      map.nome,
      map.foto,
      map.descricao,
      map.pretensao
    );
  }
}