import { type Request, type Response, type NextFunction } from 'express'
import { UserModel } from '../models/user'

async function retrieveUsers (req: Request, res: Response, next: NextFunction) {
  try {
    const users = await UserModel.findAll()
    res.json({
      status: 'success',
      data: users.map((user) => ({
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        profileImage: user.profileImage,
        isActive: user.isActive,
        lastLoginIp: user.lastLoginIp,
        password: user.password,
        totpSecret: user.totpSecret
      }))
    })
  } catch (error) {
    next(error)
  }
}

export { retrieveUsers }
