import mongoose from "mongoose";

export const  connectDB = async () =>{

    // await mongoose.connect('mongodb://localhost:27017/food-del').then(()=>console.log("DB Connected"));
    await mongoose.connect('mongodb+srv://manvithamanni13:231336@cluster0.zsw3k.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.