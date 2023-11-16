var fs = require('fs');
const { exec } = require('child_process');
const { environmentFactory } = require('./utils');
const { getFiles } = require('./utils');

function generateDevEnvironments(appName) {
  if (!appName) return;

  const {
    environment: override = {},
    PASARELA_BASE,
  } = require(`../src/${appName}/environments/environment`);

  const environment = environmentFactory(override);

  const content = `export const PASARELA_BASE = '${PASARELA_BASE}';
  
  export const environment = ${JSON.stringify(
    {
      appName,
      ...environment,
    },
    null,
    2,
  )};
    
`;

  fs.writeFile('./environments/environment.ts', content, function (err, result) {
    if (err) console.log('error', err);
  });
}

function generateProdEnvironments(appName) {
  if (!appName) return;

  const {
    environment: override = {},
    PASARELA_BASE,
  } = require(`../src/${appName}/environments/environment.prod`);

  const environment = environmentFactory(override);

  const content = `export const PASARELA_BASE = '${PASARELA_BASE}';
    
    export const environment = ${JSON.stringify(
      {
        appName,
        ...environment,
      },
      null,
      2,
    )};
      
  `;

  fs.writeFile('./environments/environment.prod.ts', content, function (err, result) {
    if (err) console.log('error', err);
  });
}

const generateEnvFiles = (name) => {
  generateDevEnvironments(name);
  generateProdEnvironments(name);

  const envFilenames = getFiles('./environments');

  envFilenames.forEach((filename) => {
    exec(`node ./node_modules/.bin/prettier --write ${filename}`);
  });
};

module.exports = {
  generateEnvFiles,
};
