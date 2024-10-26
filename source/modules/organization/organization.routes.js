import { Router } from "express";
import * as OC from './organization.controllers.js'
import { auth } from "../../middleware/auth.js";
// import {validate} from '../../middleware/validate.js'
// import * as UV from './user.validation.js'

const router = Router()

router.post("/create",OC.createorganization)
router.post("/get",OC.getorganization)
router.delete("/delete",OC.deleteorganization)
router.get("/get",OC.getorganization)
router.update("/update",OC.updateorganization)

export default router