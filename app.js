require("colors");
const argv = require("./config/yargs").argv;
const { llistarTaula, crearFitxer } = require("./helper/multiplica");
console.clear();

console.log(argv);
let param = argv._[0];

console.log(param);

switch (param) {
  case "llistar":
    //console.log("Llisto la taula de multiplicar");
    llistarTaula(argv.base, argv.limit);
    break;
  case "crear":
    crearFitxer(argv.base, argv.limit);
    //console.log("creo nou fitxer");
    break;
  default:
    console.log("Unknown command");
    npm;
}
