const fs = require('fs');

function getFiles(path, files = []) {
  const stats = fs.statSync(path);

  if (stats.isFile()) {
    files.push(path);
  }

  if (stats.isDirectory()) {
    const fileList = fs.readdirSync(path);
    for (const file of fileList) {
      getFiles(`${path}/${file}`, files);
    }
  }

  return files;
}

module.exports = {
  getFiles,
};
