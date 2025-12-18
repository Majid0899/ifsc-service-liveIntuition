import express from 'express'
import { handleRegisterUser } from '../controller/userController.js';

const router=express.Router()


router.post("/",handleRegisterUser)


export default router;