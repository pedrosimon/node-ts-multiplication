import { yarg } from './config/plugins/args.plugin';
import { ServerApp } from './presentation/server-app';

// console.log(process.argv)

// console.log(argv)

const { b, base } = yarg;

console.log(b, base, yarg);

(async () => {
  await main();
})();

async function main() {
  const {
    b: base,
    l: limit,
    s: showTable,
    n: fileName,
    d: fileDestination,
  } = yarg;
  ServerApp.run({ base, limit, showTable, fileDestination, fileName });
}
