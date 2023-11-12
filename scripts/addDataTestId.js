/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

var fs = require('fs');
const { exec } = require('child_process');
const cheerio = require('cheerio');
const { v4 } = require('uuid');
const { getFiles } = require('./utils');

function addDataTestIdToFilename(htmlFilename) {
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

const addDataTestId = () => {
  const htmlFilenames = getFiles('./src/app').filter((file) => file.endsWith('.html'));

  htmlFilenames.forEach((htmlFilename) => {
    addDataTestIdToFilename(htmlFilename);
    exec(`./node_modules/.bin/prettier --write ${htmlFilename}`);
  });
};
module.exports = {
  addDataTestId,
};
