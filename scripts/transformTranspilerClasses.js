const { getFiles } = require('./utils');
const fs = require('fs');
const { exec } = require('child_process');

const getHtmlFilename = (scssFilename) => scssFilename.replace('.scss', '.html');

const processingWithoutMedia = (scssContent, htmlContent, transpilerFlexClasses) => {
  const withOutMedia = transpilerFlexClasses.filter(
    (str) => !str.includes(' @include media-breakpoint'),
  );

  withOutMedia.forEach((classStr) => {
    const percentSymbol = classStr.indexOf('%');
    const percent = classStr.slice(45, percentSymbol);
    const rem5 = percent % 5;
    const result = percent / 5;

    const realPercent = (rem5 > 2.5 ? Math.ceil(result) : Math.round(result)) * 5;
    const classname = classStr.slice(1, 30);

    htmlContent = htmlContent.replace(classname, `flex-sh-${realPercent}`);
    scssContent = scssContent.replace(classStr, '');
  });

  return [scssContent, htmlContent];
};

const processingWithMediaAndNotInitial = (scssContent, htmlContent, transpilerFlexClasses) => {
  const withMedia = transpilerFlexClasses.filter(
    (str) => str.includes('@include media-breakpoint') && !str.includes('flex: initial;'),
  );

  withMedia.forEach((classStr) => {
    const percentSymbol = classStr.indexOf('%');
    const percent = classStr.slice(83, percentSymbol);
    const rem5 = percent % 5;
    const result = percent / 5;

    const realPercent = (rem5 > 2.5 ? Math.ceil(result) : Math.round(result)) * 5;
    const classname = classStr.slice(1, 30);
    const breakpoint = classStr.slice(62, 64);

    htmlContent = htmlContent.replace(classname, `flex-sh-${breakpoint}-${realPercent}`);
    scssContent = scssContent.replace(classStr, '');
  });

  return [scssContent, htmlContent];
};

const processingWithMediaAndInitial = (scssContent, htmlContent, transpilerFlexClasses) => {
  const withMedia = transpilerFlexClasses.filter(
    (str) => str.includes('@include media-breakpoint') && str.includes('flex: initial;'),
  );

  withMedia.forEach((classStr) => {
    const percentSymbol = classStr.indexOf('%');
    const percent = classStr.slice(104, percentSymbol);
    const rem5 = percent % 5;
    const result = percent / 5;

    const realPercent = (rem5 > 2.5 ? Math.ceil(result) : Math.round(result)) * 5;
    const classname = classStr.slice(1, 30);
    const breakpoint = classStr.slice(62, 64);

    htmlContent = htmlContent.replace(
      classname,
      `flex-sh-${realPercent} flex-sh-${breakpoint}-initial`,
    );
    scssContent = scssContent.replace(classStr, '');
  });

  return [scssContent, htmlContent];
};

const processingTranspilerFlex = (scssContent, htmlContent) => {
  const transpilerFlexClasses = scssContent
    .split('\n\n')
    .filter((str) => !!str)
    .filter((str) => str.includes('.transpilerClass-fxFlex'));

  let out = processingWithoutMedia(scssContent, htmlContent, transpilerFlexClasses);
  out = processingWithMediaAndNotInitial(...out, transpilerFlexClasses);
  out = processingWithMediaAndInitial(...out, transpilerFlexClasses);

  return out;
};

function transformFile(scssFilename) {
  const htmlFilename = getHtmlFilename(scssFilename);

  const [scssContent, htmlContent] = processingTranspilerFlex(
    fs.readFileSync(scssFilename, 'utf8'),
    fs.readFileSync(htmlFilename, 'utf8'),
  );

  fs.writeFileSync(scssFilename, scssContent, 'utf8');
  fs.writeFileSync(htmlFilename, htmlContent, 'utf8');

  exec(`node ./node_modules/.bin/prettier --write ${scssFilename}`);
  exec(`node ./node_modules/.bin/prettier --write ${htmlFilename}`);
}

const [, , relativePath] = process.argv;

const allFilenames = getFiles(relativePath);

const scssFilenames = allFilenames.filter((file) => file.endsWith('.scss'));

scssFilenames.forEach((scssFilename) => {
  transformFile(scssFilename);
});
