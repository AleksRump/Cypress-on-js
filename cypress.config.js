const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  e2e: {
    // module.exports = {  // хз надо искать почему не пишет видео при запуске через run
    //   video: true
    // },
    watchForFileChanges: false, //это даёт не изменять итоги теста после изменения кода
    //defaultCommandTimeout: 3000     //изменяет timeout с 4000 на 3000
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', { downloadFile })
    },

    "reporter": "mochawesome",
    "reporterOptions": {
      "charts": true,
      "overwrite": false,
      "html": false,
      "json": true,
      "reportDir": "cypress/reports"
    }
  },
});
