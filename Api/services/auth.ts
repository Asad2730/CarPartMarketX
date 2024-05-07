import type { IUser } from '../models/user'
import user from '../models/user'


export const createUser = async (userData: IUser): Promise<void> => {
    const new_user = new user(userData)
    await new_user.save()
}

export const findUserByEmail = async (email: string): Promise<any> => {
    const obj = await user.findOne({ email })
    return obj
}

export const findByEmail_Password = async (email: string, password: string): Promise<any> => {
    const obj = await user.find({ email: email, password: password })
    return obj
}