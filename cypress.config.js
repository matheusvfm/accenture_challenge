const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://sampleapp.tricentis.com/101',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
