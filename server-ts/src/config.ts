const isProd = process.env.NODE_ENV == 'production'
let appConfig = {
    isProd,
    isDev : !isProd,
    clearDataBeforeLodingFixture: isProd ? false : true,
}

export default appConfig