import type { IUser } from '../models/user'
import type { Request, Response } from 'express'
import { createUser, findByEmail_Password, findUserByEmail } from '../services/auth'
import { generateJWT } from '../middleware/auth'


//encrypt passwords...
export const signup = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData: IUser = req.body
        const userExists = await findUserByEmail(userData.email)
        if (userExists) {
            res.status(400).json({ message: 'User with this email already exists' });
            return
        }
        await createUser(userData)
        res.status(201).json({ message: 'User created successfully' })
    } catch (ex) {
        res.status(500).json({ message: 'Internal server error' })
    }
}


export const login_with_email_password = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body
        const rs = await findByEmail_Password(email, password)

        if (!rs) {
            res.status(401).json({ message: 'Invalid email or password' })
            return
        }

        const token = await generateJWT('secret_key', rs)
        res.status(200).json(token)
    } catch (ex) {
        res.status(500).json({ message: 'Internal server error' })
    }
}