import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileDestination: string;
  fileName: string;
}

export class ServerApp {
  static run({
    base,
    limit,
    showTable,
    fileDestination,
    fileName,
  }: RunOptions) {
    console.log('Server running ...');

    const fileContent = new CreateTable().execute({ base, limit });
    const wasSave = new SaveFile().execute({
      fileContent,
      fileDestination,
      fileName,
    });
    wasSave
      ? console.log('file wash Created')
      : console.log('file wash not created');

    if (showTable) console.log(fileContent);
  }
}
