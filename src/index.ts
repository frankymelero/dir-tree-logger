import fs = require('fs');
import path = require('path');

function initialize(startingDir:string, excludedDirectories:string[]) {
  console.log(startingDir);
  listDirectories(startingDir, '', excludedDirectories);
}

function listDirectories(directoryPath:string, prefix:string = '', excludedDirectories:string[] ) {
  try {
    const files = fs.readdirSync(directoryPath);

    files.forEach((file:string) => {
      const fullPath = path.join(directoryPath, file);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory() && !excludedDirectories.includes(file)) {
        // Es un directorio y no está en la lista de directorios excluidos.
        console.log(`${prefix}${file}/`);
        listDirectories(fullPath, `${prefix}  |-- `, excludedDirectories);
      } else if (stats.isDirectory() && excludedDirectories.includes(file)) {
        // Es un directorio y está en la lista de directorios excluidos.
      } else {
        // Es un archivo
        console.log(`${prefix}${file}`);
      }
    });
  } catch (error) {
    console.error(`Error al leer el directorio: ${directoryPath}`, error);
  }
}

initialize("./",["node_modules"]);

module.exports = {
  initialize,
};