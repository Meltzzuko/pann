import Router from "koa-router"
import annoucement from './announcement'
import user_result from './user_result'
const router = new Router()

router
    .get('/api/greet', async (ctx, next) => {
    ctx.body = {msg: 'Hello world.'}
    })

    .use('/api/announcement', annoucement.routes())
    .use('/api/user_result', user_result.routes())
    
export default router