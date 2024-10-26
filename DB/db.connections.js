import mongoose from 'mongoose'

export const dbconnection = async() => {

    await mongoose.connect('mongodb+srv://hazem:hazem1907@cluster0.n1b3sux.mongodb.net/task').then(() => {
        console.log("db is coonect");
        
    }).catch((err) => {
        console.log({msg:"db is failed",err});
    })
}             