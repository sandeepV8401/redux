import express from "express";
import mongoose from "mongoose";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/redux", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
.then(console.log("Connection to database is successful."));

app.get("/", (req,res)=>{
    res.send("Server is ready");
})

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("server is listening at port: "+port);
})