const { addDataTestId } = require('./addDataTestId');
const { generateAngularJson } = require('./generateAngularJson');
const { generateEnvFiles } = require('./generateEnvFiles');

const [, , name] = process.argv;

generateEnvFiles(name);
addDataTestId();
generateAngularJson(name);
