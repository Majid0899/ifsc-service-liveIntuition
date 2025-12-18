import express from 'express'
import {handleFetchIfsc} from '../controller/ifscController.js'
import { jwtAuthMiddleware } from '../middleware/authMiddleware.js'

const router=express.Router()

router.get("/:ifscCode",jwtAuthMiddleware,handleFetchIfsc)

export default router