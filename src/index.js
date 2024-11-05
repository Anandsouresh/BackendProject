import dotenv from "dotenv";
import connectDb from "./db/ssss.js";
import express from "express";

const app= express()
// Load environment variables from .env file
dotenv.config({ path: './.env' });

// Connect to the database
connectDb()
.then (()=>{

    app.listen(`${process.env.PORT}` || 8000 ,()=>{

        console.log(`server is ready to listen: ${proces.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO Db is connection Falied!! ",err)
})

// Optional: start the app if necessary
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URL}`);
//     app.on("error", (error) => {
//       console.log("ERROR:", error);
//       throw error;
//     });
//     app.listen(4000, () => {
//       console.log("Server is running on port 4000");
//     });
//   } catch (error) {
//     console.log("ERROR:", error);
//     throw error;
//   }
// })();
