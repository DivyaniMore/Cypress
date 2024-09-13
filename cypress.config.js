const { defineConfig } = require("cypress");

module.exports = defineConfig({

  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  video: true,    // Enable video recording (true by default)
  videoCompression: 32, // Compress video (0 for no compression)
  videoUploadOnPasses: false, // Do not upload video if the test 
  downloadsFolder: "cypress/downloads",
  screenshotOnRunFailure: true, // Take screenshot on failure (true by default)
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js'
  },
  defaultCommandTimeout: 10000,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true,
    },
  },

});

