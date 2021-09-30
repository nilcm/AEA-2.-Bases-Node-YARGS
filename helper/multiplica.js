//node app.js llistar --b 7 --l 20 --> Llista
//node app.js crear -b 9 --> Crea un fitxer amb els parametres que indiquis.

require("colors");
const fs = require("fs");

const llistarTaula = (base, limit = 10) => {
  console.log("==============".green);
  console.log(`Taula del ${base}`.red);
  console.log("==============".green);

  for (let i = 0; i < limit; i++) {
    console.log(`${base} * ${i} = ${base * i}`.cyan);
  }
};

const crearFitxer = (base, limit = 10) => {
  if (!Number(base)) {
    console.log("El valor de la base ha de ser numèric.");
    return;
  }
  let data = "";
  for (let i = 1; i <= limit; i++) {
    data += `${base}*${i}=  ${base * i}\n`;
  }

  fs.writeFile(`taula-${base},${limit}.txt`, data, (err) => {
    if (err) throw Error(err);
    else console.log(`taula-${base},${limit}.txt`);
  });
};

module.exports = {
  llistarTaula,
  crearFitxer,
};
