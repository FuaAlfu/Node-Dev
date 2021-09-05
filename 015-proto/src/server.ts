import * as dotenv from "dotenv";
import express,{Application, Request, Response, NextFunction} from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
 }
 
 const PORT: number = parseInt(process.env.PORT as string, 10);
 const app = express();

//App Configuration :: Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

//route :: testing calls
app.get('/',(req: Request,res: Response, next: NextFunction) =>{
    // console.log(add(2,9));
     res.send('testing');
 })

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });