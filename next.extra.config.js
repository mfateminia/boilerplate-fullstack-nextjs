module.exports = {
    publicRuntimeConfig: {
        tag: process.env.TAG || null,
        env: process.env.ENV || 'development',
        nodeEnv: process.env.NODE_ENV || 'development',
    }
}