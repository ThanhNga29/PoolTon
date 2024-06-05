import express from 'express'
import { saveUser } from '../controllers/user.controller'

const route: express.Router = express.Router()

route.post('/save', saveUser)

export default route
