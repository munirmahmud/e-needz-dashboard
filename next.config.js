/*
* E-needz - Admin Template
* Author: nouthemes
* Homepage: https://themeforest.net/user/nouthemes/portfolio
* Created at: n/a
* Updated at: n/a

* */
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextSettings = {
  env: {
    title: "E-needz",
    titleDescription: "Admin Template",
  },
};

module.exports = withPlugins([withImages(), nextSettings]);
