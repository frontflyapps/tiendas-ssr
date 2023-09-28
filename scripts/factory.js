var fs = require('fs');
const packageJsonData = require('../package.json');
const angularJsonData = require('../angular.json');
const { listNames } = require('./constants');

function joinStr(...args) {
  return args.join('');
}

function getProject(name) {
  const appDir = joinStr('src/', name);

  const assetsDir = joinStr(appDir, '/assets');

  const stylePreprocessorOptions = {
    includePaths: [assetsDir, '/assets'],
  };

  const styles = [
    joinStr(assetsDir, '/app.scss'),
    joinStr(assetsDir, '/scss/helpers/_helpers.scss'),
    joinStr(assetsDir, '/scss/mixins/_breakpoints.scss'),
    'src/common-styles.scss',
    // fixing the issue "Could not find Angular Material core theme"
    'node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css',
  ];

  const assets = [
    ...[
      'favicon-16x16.png',
      'favicon-32x32.png',
      'favicon.ico',
      'apple-touch-icon.png',
      'android-chrome-192x192.png',
      'android-chrome-512x512.png',
      'manifest.webmanifest',
      'site.webmanifest',
    ].map((assetsFile) => ({
      glob: assetsFile,
      input: joinStr(appDir, '/'),
      output: '/',
    })),
    {
      glob: '**/*',
      input: joinStr(appDir, '/assets'),
      output: '/assets/',
    },
  ];

  return {
    projectType: 'application',
    schematics: {
      '@schematics/angular:component': {
        style: 'scss',
      },
    },
    root: '',
    sourceRoot: 'src',
    prefix: 'app',
    architect: {
      build: {
        builder: '@ngx-env/builder:browser',
        options: {
          outputPath: joinStr('dist/', name, '/browser'),
          index: joinStr(appDir, '/index.html'),
          main: 'src/main.ts',
          polyfills: ['zone.js'],
          tsConfig: 'tsconfig.app.json',
          inlineStyleLanguage: 'scss',
          assets,
          styles,
          stylePreprocessorOptions,
          scripts: [],
          allowedCommonJsDependencies: [
            'buffer',
            'rxjs',
            'rxjs/internal/observable/of',
            'rxjs/internal/Subject',
            'crypto-js',
            'resize-observer',
            '@angular/common/locales/es',
            'socket.io-client',
            'socket.io',
            'socket.io-parser',
            'jspdf',
            'ngx-material-timepicker',
          ],
        },
        configurations: {
          production: {
            budgets: [
              {
                type: 'initial',
                maximumWarning: '1mb',
              },
            ],
            outputHashing: 'all',
          },
          development: {
            buildOptimizer: false,
            optimization: false,
            vendorChunk: true,
            extractLicenses: false,
            sourceMap: true,
            namedChunks: true,
          },
        },
        defaultConfiguration: 'production',
      },
      serve: {
        builder: '@ngx-env/builder:dev-server',
        configurations: {
          production: {
            browserTarget: joinStr(name, ':build:production'),
          },
          development: {
            browserTarget: joinStr(name, ':build:development'),
          },
        },
        defaultConfiguration: 'development',
      },
      'extract-i18n': {
        builder: '@ngx-env/builder:extract-i18n',
        options: {
          browserTarget: joinStr(name, ':build'),
        },
      },
      test: {
        builder: '@ngx-env/builder:karma',
        options: {
          polyfills: ['zone.js', 'zone.js/testing'],
          tsConfig: 'tsconfig.spec.json',
          inlineStyleLanguage: 'scss',
          assets,
          styles,
          stylePreprocessorOptions,
          scripts: [],
        },
      },
      server: {
        builder: '@ngx-env/builder:server',
        options: {
          outputPath: joinStr('dist/', name, '/server'),
          main: 'server.ts',
          tsConfig: 'tsconfig.server.json',
          inlineStyleLanguage: 'scss',
          stylePreprocessorOptions,
        },
        configurations: {
          production: {
            optimization: false,
            outputHashing: 'media',
          },
          development: {
            buildOptimizer: false,
            optimization: false,
            sourceMap: true,
            extractLicenses: false,
            vendorChunk: true,
          },
        },
        defaultConfiguration: 'production',
      },
      'serve-ssr': {
        builder: '@nguniversal/builders:ssr-dev-server',
        configurations: {
          development: {
            browserTarget: joinStr(name, ':build:development'),
            serverTarget: joinStr(name, ':server:development'),
          },
          production: {
            browserTarget: joinStr(name, ':build:production'),
            serverTarget: joinStr(name, ':server:production'),
          },
        },
        defaultConfiguration: 'development',
      },
      prerender: {
        builder: '@nguniversal/builders:prerender',
        options: {
          routes: ['/'],
        },
        configurations: {
          production: {
            browserTarget: joinStr(name, ':build:production'),
            serverTarget: joinStr(name, ':server:production'),
          },
          development: {
            browserTarget: joinStr(name, ':build:development'),
            serverTarget: joinStr(name, ':server:development'),
          },
        },
        defaultConfiguration: 'production',
      },
      storybook: {
        builder: '@storybook/angular:start-storybook',
        options: {
          configDir: '.storybook',
          browserTarget: joinStr(name, ':build'),
          compodoc: false,
          port: 6006,
        },
      },
      'build-storybook': {
        builder: '@storybook/angular:build-storybook',
        options: {
          configDir: '.storybook',
          browserTarget: joinStr(name, ':build'),
          compodoc: false,
          outputDir: joinStr('dist/storybook/', name),
        },
      },
    },
  };
}

function updateAngularJSON(data, name) {
  data.projects[name] = getProject(name);
  return data;
}

function updatePackageJSON(data, name) {
  delete data.scripts[joinStr('<<<<<<<<<<<<<<<', name, '>>>>>>>>>>>>>>>')];
  data.scripts[joinStr('<<<<<<<<<<<<<<<', name, '>>>>>>>>>>>>>>>')] = '';

  //start(CSR)
  delete data.scripts[joinStr('start:', name)];
  data.scripts[joinStr('start:', name)] = joinStr(
    'NG_APP_NAME=',
    name,
    ' ng serve ',
    name,
    ' --host 0.0.0.0 --public-host tienda.tiendalocal.com --port 4308 --disable-host-check true',
  );

  //build(CSR)
  delete data.scripts[joinStr('build:', name)];
  data.scripts[joinStr('build:', name)] = joinStr(' ng build ', name);

  // start:ssr(SSR)
  delete data.scripts[joinStr('start:ssr:', name)];
  data.scripts[joinStr('start:ssr:', name)] = joinStr(
    'NG_APP_NAME=',
    name,
    ' ng run ',
    name,
    ':serve-ssr --port 4308',
  );

  // serve(SSR)
  delete data.scripts[joinStr('serve:ssr:', name)];
  data.scripts[joinStr('serve:ssr:', name)] = joinStr(
    'NG_APP_NAME=',
    name,
    ' node dist/',
    name,
    '/server/main.js',
  );

  delete data.scripts[joinStr('build:ssr:', name)];
  data.scripts[joinStr('build:ssr:', name)] = joinStr(
    'NG_APP_NAME=',
    name,
    ' rm -rf ./dist/',
    name,
    ' && ng build ',
    name,
    ' && ng run ',
    name,
    ':server',
  );

  delete data.scripts[joinStr('build-serve:ssr:', name)];
  data.scripts[joinStr('build-serve:ssr:', name)] = joinStr(
    'NG_APP_NAME=',
    name,
    ' npm run build:ssr:',
    name,
    ' && npm run serve:ssr:',
    name,
  );

  delete data.scripts[joinStr('prerender:', name)];
  data.scripts[joinStr('prerender:', name)] = joinStr('ng run ', name, ':prerender');

  delete data.scripts[joinStr('storybook:', name)];
  data.scripts[joinStr('storybook:', name)] = joinStr(
    'STORYBOOK_APP_NAME=',
    name,
    ' ng run ',
    name,
    ':storybook',
  );

  return data;
}

function saveJson(filename, data) {
  fs.writeFile(filename, JSON.stringify(data, null, 2), function (err, result) {
    if (err) console.log('error', err);
  });
}

let newPackageJsonData = JSON.parse(JSON.stringify(packageJsonData));
let newAngularJsonData = JSON.parse(JSON.stringify(angularJsonData));

listNames.forEach((name) => {
  newPackageJsonData = updatePackageJSON(newPackageJsonData, name);
  newAngularJsonData = updateAngularJSON(newAngularJsonData, name);
});

saveJson('package.json', newPackageJsonData);
saveJson('angular.json', newAngularJsonData);
