const withSass = require('@zeit/next-sass');
const extraConfig = require('./next.extra.config');

module.exports = withSass({
    ...extraConfig
});