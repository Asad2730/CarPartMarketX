import type { IUser } from "../models/user"
import * as jwt from 'jsonwebtoken';


export const generateJWT = (secret_key: string, user: IUser) => {
    const options = {
        expiresIn: '1h',
    };
    const token = jwt.sign(user, secret_key, options)
    return token
}


export const verifyJWT = (token: string, secret_key: string) => {
    try {
        const verify = jwt.verify(token, secret_key)
        return verify
    } catch (ex) {
        console.error('JWT verification failed: ', ex)
        return null
    }
}