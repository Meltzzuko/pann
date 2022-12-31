import Koa from 'koa'
import api from './api'
import loadFixtures from './fixtures'
import appConfig from './config'


const app = new Koa()

app
    .use(api.routes())
    .listen(8000)

loadFixtures(appConfig.clearDataBeforeLodingFixture)