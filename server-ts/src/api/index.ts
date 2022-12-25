import Router from "koa-router"
import annoucement from './announcement'

const router = new Router()

router
    .get('/api/greet', async (ctx, next) => {
    ctx.body = {msg: 'Hello world.'}
    })

    .use('/api/announcement', annoucement.routes())
export default router