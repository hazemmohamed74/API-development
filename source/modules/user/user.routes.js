import { Router } from "express";
import {  logIn, signUp } from "./user.controller.js";
// import { auth } from "../../middleware/auth.js";
// import {validate} from '../../middleware/validate.js'
import * as UV from './user.validation.js'

const router = Router()

router.post("/signup",signUp)
router.post("/signin",logIn)


export default router