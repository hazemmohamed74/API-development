import userModel from "../../../DB/model/user.model.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { asynchandler,AppError } from "../../utilits/asyncHandlers.js";




    export const signUp = asynchandler(async (req, res, next) => {
const { name, email, password } = req.body;
const exist = await userModel.findOne({ email });
    if (exist) {
        return next (new AppError("email is found ",409))
    }
const hash = bcrypt.hashSync(password, +process.env.SALT_ROUND);
const user = await userModel.create({ name, email, password: hash });
    res.json({ msg: "done" ,user});
});
    export const logIn = asynchandler(async (req, res, next) => {
console.log(process.env.SIGNATURE);
const { email, password } = req.body;
const user = await userModel.findOne({ email });
    if (!user) {
        return next (new AppError("email is not found ",409))
    }
const match = bcrypt.compareSync(password, user.password);
    if (!match) {
        return next (new AppError("password not match ",409))
    }
const token = Jwt.sign(
    { id: user._id, email: user.email },process.env.SIGNATURE);
console.log(process.env.SIGNATURE);
res.json({ msg: "done", token });
});