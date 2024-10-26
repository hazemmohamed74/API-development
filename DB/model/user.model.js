import { Schema , model} from "mongoose"

const userschema = new Schema ({
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age: Number,
    phone: Number
    ,
    password:{
        type:String,
        required:true,
    },

}
,{timestamps:true})
const userModel = model("user",userschema)
export default userModel