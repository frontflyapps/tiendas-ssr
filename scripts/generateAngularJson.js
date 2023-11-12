var fs = require('fs');
const angularJsonData = require('../angular.json');

function getProject(name) {
  const appDir = `src/${name}`;

  const assetsDir = `${appDir}/assets`;

  const stylePreprocessorOptions = {
    includePaths: [assetsDir, '/assets'],
  };

  const styles = [
    `${assetsDir}/app.scss`,
    `${assetsDir}/scss/helpers/_helpers.scss`,
    `${assetsDir}/scss/mixins/_breakpoints.scss`,
    'src/common-styles.scss',
    // fixing the issue "Could not find Angular Material core theme"
    'node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css',
    'node_modules/ngx-spinner/animations/ball-scale-multiple.css',
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
      input: `${appDir}/`,
      output: '/',
    })),
    {
      glob: '**/*',
      input: `${appDir}/assets`,
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
          outputPath: `dist/browser`,
          index: `${appDir}/index.html`,
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
            browserTarget: `tienda-ssr:build:production`,
          },
          development: {
            browserTarget: `tienda-ssr:build:development`,
          },
        },
        defaultConfiguration: 'development',
      },
      'extract-i18n': {
        builder: '@ngx-env/builder:extract-i18n',
        options: {
          browserTarget: `tienda-ssr:build`,
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
          outputPath: `dist/server`,
          main: 'server.ts',
          tsConfig: 'tsconfig.server.json',
          inlineStyleLanguage: 'scss',
          stylePreprocessorOptions,
        },
        configurations: {
          production: {
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
            browserTarget: `tienda-ssr:build:development`,
            serverTarget: `tienda-ssr:server:development`,
          },
          production: {
            browserTarget: `tienda-ssr:build:production`,
            serverTarget: `tienda-ssr:server:production`,
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
            browserTarget: `tienda-ssr:build:production`,
            serverTarget: `tienda-ssr:server:production`,
          },
          development: {
            browserTarget: `tienda-ssr:build:development`,
            serverTarget: `tienda-ssr:server:development`,
          },
        },
        defaultConfiguration: 'production',
      },
      storybook: {
        builder: '@storybook/angular:start-storybook',
        options: {
          configDir: '.storybook',
          browserTarget: `tienda-ssr:build`,
          compodoc: false,
          port: 6006,
        },
      },
      'build-storybook': {
        builder: '@storybook/angular:build-storybook',
        options: {
          configDir: '.storybook',
          browserTarget: `tienda-ssr:build`,
          compodoc: false,
          outputDir: `dist/storybook`,
        },
      },
    },
  };
}

function saveJson(filename, data) {
  fs.writeFile(filename, JSON.stringify(data, null, 2), function (err, result) {
    if (err) console.log('error', err);
  });
}

const generateAngularJson = (name) => {
  let newAngularJsonData = JSON.parse(JSON.stringify(angularJsonData));
  newAngularJsonData.projects['tienda-ssr'] = getProject(name);
  saveJson('angular.json', newAngularJsonData);
};

module.exports = {
  generateAngularJson,
};
