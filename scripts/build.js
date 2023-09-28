const { spawn } = require('child_process');
const { listNames } = require('./constants');

listNames.forEach((name) => {
  const child = spawn('npm', ['run', `build:ssr:${name}`]);

  child.stdout.on('data', function (code) {
    console.log(`${code}`);
  });
});
