import { Schema , model,Types} from "mongoose"

const organizationschema = new Schema ({
    title: String,
    content: Types.Mixed, // Text body or list items
    isPublic:{ 
        type: Boolean,
        default: false 
    },
    organization_Id: String,
    name: String,
    description: String,

}
,{timestamps:true})
const organizationModel = model("organization",organizationschema)
export default organizationModel