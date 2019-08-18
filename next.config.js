const withSass = require('@zeit/next-sass');
const withTypescript = require("@zeit/next-typescript")
const extraConfig = require('./next.extra.config');

module.exports = withSass(withTypescript({
    ...extraConfig
}));