const { exec, spawn } = require('child_process');

const listNames = ['VeoVeo', 'Umbralf'];

listNames.forEach((name, index) => {
  const child = spawn('ng', ['run', `${name}:serve-ssr`, '--port', 4000 + index], {
    env: {
      ...process.env,
      NG_APP_NAME: name,
    },
  });

  child.stdout.on('data', function (code, signal) {
    console.log(`${code}`);
  });
});


