import { Router } from "express";
// import { auth } from "../../middleware/auth.js";
// import {validate} from '../../middleware/validate.js'
import * as CC from './category.controller.js'

const router = Router()

router.post("/add",CC.addCategory)
router.post("/get",CC.getCategory)
router.put("/update/:_id",CC.updateCategory)
router.delete("/delete/:_id",CC.deleteCategory)


export default router