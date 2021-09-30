const opts = {
  base: {
    demand: true,
    alias: "b",
  },
  limit: {
    alias: "l",
    default: 10,
  },
};

const argv = require("yargs")
  .command(
    "llistar",
    "Imprimeix en consola la taula de multiplicar en questió",
    opts
  )
  .command("crear", "Genera un fitxer amb taula de multiplicar", opts)
  .help().argv;

module.exports = {
  argv,
};
