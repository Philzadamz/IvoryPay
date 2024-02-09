const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    MAILOSAUR_API_KEY: "UqEeTV6nz2gGQ23QMVgpRNATbiJ4HWIj",
    watchForFileChanges: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
