import * as dotenv from 'dotenv'
import path from "path"
dotenv.config({path: path.resolve("config/.env")})
const port = 5000
import {dbconnection}   from '../DB/db.connections.js'
import userRoutes from './modules/user/user.routes.js'
import organizatioRoutes from './modules/organization/organization.routes.js'
import categoryRoutes from './modules/category/category.routes.js'




export const initApp =(app,express)=>{
    
    app.use(express.json())
    app.use("/users",userRoutes)
    app.use("/organizatios",organizatioRoutes)
    app.use("/categories",categoryRoutes)
    
    app.all("*",(req,res,next)=>{
        return res.json({msg:`invalid req on ${req.originalUrl}`})
    })
    dbconnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))}