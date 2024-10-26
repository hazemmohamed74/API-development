import { Schema , model,Types} from "mongoose"

const categoryschema = new Schema ({
    name: String,
    userId: {
        type: Types.ObjectId, 
        ref: 'User' 
    },

}
,{timestamps:true})
const categoryModel = model("category",categoryschema)
export default categoryModel