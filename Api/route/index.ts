import { AsyncRouter } from 'express-async-router'
import auth from './routes/auth'

const routes = AsyncRouter()

routes.use('/auth',auth)

export default routes

