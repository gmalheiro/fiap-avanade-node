import fs from "fs";

const dir = "./upload";
const file = "lakers.txt";
const path = `${dir}/${file}`;
if (!fs.existsSync(dir)) {
  fs.mkdir(dir, (err) => {
    //se der um erro, ele vai retornar um erro e pára o processo.
    if (err) throw err;
    //se passar do throw ele vai executar o código abaixo.
    console.log(`Diretório ${dir} criado com sucesso`);
  });
} else {
  console.log(`Acessando o diretório: ${dir}`);
}

let msg = "O segundo melhor time de basquete do mundo é o Los Angeles Lakers";
if (!fs.existsSync(path)) {
  fs.writeFile(path, msg, (err) => {
    if (err) throw err;
    console.log(`Arquivo ${file} criado com sucesso`);
  });
}