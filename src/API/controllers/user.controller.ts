import { Request, Response } from 'express'
import { userModel } from '~/models'

interface ReqBodyAddress {
  address: string
}

export const saveUser = async (req: Request, res: Response) => {
  try {
    const address = req.body as ReqBodyAddress
    const saveNewAdress = await new userModel({
      address: address
    }).save()
    return res.status(200).json({
      success: true,
      data: saveNewAdress
    })
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}
