const { addDataTestId } = require('./addDataTestId');
const { generateAngularJson } = require('./generateAngularJson');
const { generateEnvFiles } = require('./generateEnvFiles');

const name = process.env.APP_NAME;

generateEnvFiles(name);
addDataTestId();
generateAngularJson(name);
