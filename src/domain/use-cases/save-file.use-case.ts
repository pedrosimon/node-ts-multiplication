import fs from 'fs';

export interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean;
}
export interface SaveFileOptions {
  fileDestination?: string;
  fileContent: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {
    /* repository */
  }

  execute({
    fileContent,
    fileDestination = 'outputs',
    fileName = 'table',
  }: SaveFileOptions): boolean {
    try {
      fs.mkdirSync(fileDestination, { recursive: true });
      
      fs.writeFileSync(
        `${fileDestination}/${fileName}.txt`,
        fileContent,
        'utf8'
      );

      console.log(`Archivo "${fileName}.txt" guardado exitosamente.`);

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
