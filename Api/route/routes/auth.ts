import { AsyncRouter } from 'express-async-router'
import { login_with_email_password,signup } from '../controller/auth'

const auth = AsyncRouter()

auth.post('/login',login_with_email_password)
auth.post('/signup',signup)

export default auth