// cypress.config.js
const { defineConfig } = require('cypress');

//const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
//const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const cucumber = require('cypress-cucumber-preprocessor').default;
//const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

// async function setupNodeEvents(on, config) {
//   require('cypress-mochawesome-reporter/plugin')(on);

//   // Add Cucumber preprocessor plugin
//   //await preprocessor.addCucumberPreprocessorPlugin(on, config);
//   await addCucumberPreprocessorPlugin(on, config);

//   //on("file:preprocessor", browserify.default(config));
//   // on(
//   //   'file:preprocessor',
//   //   createBundler({
//   //     plugins: [createEsbuildPlugin(config)],
//   //   })
//   // );

//   // Make sure to return the config object as it might have been modified by the pluging
//   return config;

// };


module.exports = defineConfig({

  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  env: {
    url: "https://rahulshettyacademy.com/"
  },
  retries: {
    runMode: 1
  },
  projectId: "d11g4t",
  viewportWidth: 1000,
  viewportHeight: 1000,
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      //on('file:preprocessor', createBundler());  // Use createBundler without plugins
      on('file:preprocessor', cucumber());

      return config;
    },
    specPattern: ["cypress/integration/**/*.{js,jsx,ts,tsx,feature}"]

  },
  components: {
    specPattern: ["cypress/integration/**/*.{js,jsx,ts,tsx,feature}"]
  }
  //specPattern: 'cypress/integration/examples/*.js'
  //specPattern: ["cypress/integration/**/*.{js,cy,jsx,ts,tsx,feature}"]
  //specPattern: ["cypress/integration/examples/**/*.{js,cy,jsx,ts,tsx,feature}"]
  //specPattern: ["cypress/integration/examples/BDD/*.{js,cy,jsx,ts,tsx,feature}"]
  //specPattern: ["cypress/integration/**/*.{js,jsx,ts,tsx,feature}"]


});
