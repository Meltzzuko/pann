import Koa from 'koa'
import { koaBody } from 'koa-body'
import cors from '@koa/cors'

import api from './api'
import loadFixtures from './fixtures'
import appConfig from './config'


const app = new Koa()

app
    .use(koaBody())
    .use(cors())
    
    .use(api.routes())
    .listen(8000)

loadFixtures(appConfig.clearDataBeforeLodingFixture)