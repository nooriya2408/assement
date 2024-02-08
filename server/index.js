import  express  from "express";
//import { signuprouter } from "./Routes/signup.js"
//import db from "./db.js";
import cors from "cors"
import { productrouter } from "./Routes/products.js";
import { categoryrouter } from "./Routes/category.js";
const app = express();
const port = 3001;
app.use(cors({
    origin:["http://localhost:3000"],
    methods:['GET',"POST","PUT","DELETE"],
    credentials:true
  }));

  app.use(express.json())
app.use('/',productrouter)
app.use('/',categoryrouter)
  app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
  })