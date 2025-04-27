import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

const { b: base, l: limit, s: show } = yarg;

const generarHeader = () => `
==================================
            Tabla del ${base}
==================================\n
`;

const generarTabla = () => {
  let resultado = '';
  for (let i = 1; i <= limit; i++) {
    resultado += `${base} x ${i} = ${base * i}\n`;
  }

  return resultado;
};
const header = generarHeader();
const resultado = generarTabla();
if (show) console.log(header + resultado);

const guardarTablaEnArchivo = (nombreArchivo: string): void => {
  const outPath = `outputs/probando`;
  const header = generarHeader();
  const contenido = generarTabla();

  if (fs.existsSync(outPath.split('/')[0])) {
    fs.rmSync(outPath.split('/')[0], { recursive: true });
    console.log('directorio eliminado');
  }
  fs.mkdirSync(outPath, { recursive: true });
  fs.writeFileSync(`${outPath}/${nombreArchivo}`, header + contenido, 'utf8');
  console.log(`Archivo "${nombreArchivo}" guardado exitosamente.`);
};
guardarTablaEnArchivo(`tabla-${base}.txt`);
