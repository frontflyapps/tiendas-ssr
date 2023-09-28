const { exec, spawn } = require('child_process');
const { listNames } = require('./constants');

listNames.forEach((name, index) => {
  const child = spawn('npm', ['run', `build-serve:ssr:${name}`], {
    env: {
      ...process.env,
      PORT: 4000 + index,
    },
  });

  child.stdout.on('data', function (code, signal) {
    console.log(`${code}`);
  });
});
