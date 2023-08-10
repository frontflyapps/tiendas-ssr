var fs = require("fs");
const packageJsonData = require("../package.json");
const angularJsonData = require("../angular.json");

function joinStr(...args) {
  return args.join("");
}

function getProject(name) {
  const stylesPreprocessorIncludePaths = [
    joinStr("src/assets/scss/theme-", name),
    "src/assets/scss/mixins",
  ];

  return {
    projectType: "application",
    schematics: {
      "@schematics/angular:component": {
        style: "scss",
      },
    },
    root: "",
    sourceRoot: "src",
    prefix: "app",
    architect: {
      build: {
        builder: "@ngx-env/builder:browser",
        options: {
          outputPath: joinStr("dist/", name, "/browser"),
          index: "src/index.html",
          main: "src/main.ts",
          polyfills: ["zone.js"],
          tsConfig: "tsconfig.app.json",
          inlineStyleLanguage: "scss",
          assets: ["src/favicon.ico", "src/assets"],
          styles: ["src/styles.scss"],
          stylePreprocessorOptions: {
            includePaths: stylesPreprocessorIncludePaths,
          },
          scripts: [],
        },
        configurations: {
          production: {
            budgets: [
              {
                type: "initial",
                maximumWarning: "500kb",
                maximumError: "1mb",
              },
              {
                type: "anyComponentStyle",
                maximumWarning: "2kb",
                maximumError: "4kb",
              },
            ],
            outputHashing: "all",
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
        defaultConfiguration: "production",
      },
      serve: {
        builder: "@ngx-env/builder:dev-server",
        configurations: {
          production: {
            browserTarget: joinStr(name, ":build:production"),
          },
          development: {
            browserTarget: joinStr(name, ":build:development"),
          },
        },
        defaultConfiguration: "development",
      },
      "extract-i18n": {
        builder: "@ngx-env/builder:extract-i18n",
        options: {
          browserTarget: joinStr(name, ":build"),
        },
      },
      test: {
        builder: "@ngx-env/builder:karma",
        options: {
          polyfills: ["zone.js", "zone.js/testing"],
          tsConfig: "tsconfig.spec.json",
          inlineStyleLanguage: "scss",
          assets: ["src/favicon.ico", "src/assets"],
          styles: ["src/styles.scss"],
          stylePreprocessorOptions: {
            includePaths: stylesPreprocessorIncludePaths,
          },
          scripts: [],
        },
      },
      server: {
        builder: "@ngx-env/builder:server",
        options: {
          outputPath: joinStr("dist/", name, "/server"),
          main: "server.ts",
          tsConfig: "tsconfig.server.json",
          inlineStyleLanguage: "scss",
          stylePreprocessorOptions: {
            includePaths: stylesPreprocessorIncludePaths,
          },
        },
        configurations: {
          production: {
            outputHashing: "media",
          },
          development: {
            buildOptimizer: false,
            optimization: false,
            sourceMap: true,
            extractLicenses: false,
            vendorChunk: true,
          },
        },
        defaultConfiguration: "production",
      },
      "serve-ssr": {
        builder: "@nguniversal/builders:ssr-dev-server",
        configurations: {
          development: {
            browserTarget: joinStr(name, ":build:development"),
            serverTarget: joinStr(name, ":server:development"),
          },
          production: {
            browserTarget: joinStr(name, ":build:production"),
            serverTarget: joinStr(name, ":server:production"),
          },
        },
        defaultConfiguration: "development",
      },
      prerender: {
        builder: "@nguniversal/builders:prerender",
        options: {
          routes: ["/"],
        },
        configurations: {
          production: {
            browserTarget: joinStr(name, ":build:production"),
            serverTarget: joinStr(name, ":server:production"),
          },
          development: {
            browserTarget: joinStr(name, ":build:development"),
            serverTarget: joinStr(name, ":server:development"),
          },
        },
        defaultConfiguration: "production",
      },
    },
  };
}

function updateAngularJSON(data, name) {
  data.projects[name] = getProject(name);
  return data;
}

function updatePackageJSON(data, name) {
  delete data.scripts[joinStr("<<<<<<<<<<<<<<<",name,">>>>>>>>>>>>>>>")];
  data.scripts[joinStr("<<<<<<<<<<<<<<<",name,">>>>>>>>>>>>>>>")] = ""

  //start(CSR)
  delete data.scripts[joinStr("start:", name)];
  data.scripts[joinStr("start:", name)] = joinStr(
    "NG_APP_NAME=",
    name,
    " ng serve ",
    name,
    " --host 0.0.0.0 --public-host tienda.tiendalocal.com --port 4308 --disable-host-check true"
  );

  //build(CSR)
  delete data.scripts[joinStr("build:", name)];
  data.scripts[joinStr("build:", name)] = joinStr(" ng build ", name);

  // start:ssr(SSR)
  delete data.scripts[joinStr("start:ssr:", name)];
  data.scripts[joinStr("start:ssr:", name)] = joinStr(
    "NG_APP_NAME=",
    name,
    " ng run ",
    name,
    ":serve-ssr --port 4308"
  );

  // serve(SSR)
  delete data.scripts[joinStr("serve:ssr:", name)];
  data.scripts[joinStr("serve:ssr:", name)] = joinStr(
    "node dist/",
    name,
    "/serve/main.js"
  );

  delete data.scripts[joinStr("build:ssr:", name)];
  data.scripts[joinStr("build:ssr:", name)] = joinStr(
    "ng build:",
    name,
    " && ng run ",
    name,
    ":server"
  );

  delete data.scripts[joinStr("prerender:", name)];
  data.scripts[joinStr("prerender:", name)] = joinStr(
    "ng run ",
    name,
    ":prerender"
  );

  return data;
}

function saveJson(filename, data) {
  fs.writeFile(filename, JSON.stringify(data, null, 2), function (err, result) {
    if (err) console.log("error", err);
  });
}

const listNames = ["VeoVeo", "Umbralf"];

let newPackageJsonData = JSON.parse(JSON.stringify(packageJsonData));
let newAngularJsonData = JSON.parse(JSON.stringify(angularJsonData));

listNames.forEach((name) => {
  newPackageJsonData = updatePackageJSON(newPackageJsonData, name);
  newAngularJsonData = updateAngularJSON(newAngularJsonData, name);
});

saveJson("package.json", newPackageJsonData);
saveJson("angular.json", newAngularJsonData);
