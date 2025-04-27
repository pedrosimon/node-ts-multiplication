export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() /*
   * DI - Dependecy Injection
   */ {}

  execute({ base, limit = 10 }: CreateTableOptions) {
    let resultado = '';
    for (let i = 1; i <= limit; i++) {
      resultado += `${base} x ${i} = ${base * i}\n`;
    }

    return resultado;
  }
}
