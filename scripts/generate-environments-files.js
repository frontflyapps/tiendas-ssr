/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

var fs = require('fs');
const { exec } = require('child_process');
const cheerio = require('cheerio');
const { environmentFactory, appName } = require('./utils');
const { v4 } = require('uuid');
const { getFiles } = require('./utils');

// generate env files
exec('mkdir -p ./environments');
exec('sleep 1s');

function generateDevEnvironments() {
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

function generateProdEnvironments() {
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

generateDevEnvironments();
generateProdEnvironments();

const envFilenames = getFiles('./environments');

envFilenames.forEach((filename) => {
  exec(`node ./node_modules/.bin/prettier --write ${filename}`);
});

// add data-testid

function addDataTestId(htmlFilename) {
  let htmlContent = fs.readFileSync(htmlFilename, 'utf8');

  const cheerioApi = cheerio.load(
    htmlContent,
    {
      xmlMode: true,
    },
    false,
  );

  const replaceAll = (value, match, replace) => value.split(match).join(replace);

  const postProcessingHtml = (htmlValue) => {
    let htmlValueOut = htmlValue;

    htmlValueOut = replaceAll(htmlValueOut, '></img>', '/>');
    htmlValueOut = replaceAll(htmlValueOut, '></input>', '/>');
    htmlValueOut = replaceAll(htmlValueOut, '></br>', '/>');
    htmlValueOut = replaceAll(htmlValueOut, '></source>', '/>');
    htmlValueOut = replaceAll(htmlValueOut, '=""', '');
    htmlValueOut = replaceAll(htmlValueOut, '&amp;nbsp;', '&nbsp;');
    htmlValueOut = replaceAll(htmlValueOut, '&amp;&amp;', '&&');

    return htmlValueOut;
  };

  cheerioApi('*').each(function () {
    const value = cheerioApi(this).attr('data-id');

    if (!value) {
      cheerioApi(this).attr('data-id', v4().slice(0, 8));
    }
  });

  //-----------------OUTPUTR-------------------------------

  let transformedContent = cheerioApi.html({ xmlMode: false });
  transformedContent = postProcessingHtml(transformedContent);

  fs.writeFileSync(htmlFilename, transformedContent, 'utf8');
}

const htmlFilenames = getFiles('./src/app').filter((file) => file.endsWith('.html'));

htmlFilenames.forEach((htmlFilename) => {
  addDataTestId(htmlFilename);
  exec(`node ./node_modules/.bin/prettier --write ${htmlFilename}`);
});
