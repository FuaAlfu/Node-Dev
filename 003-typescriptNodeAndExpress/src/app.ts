/*
const nums: num[] = [77,88,99];
const hi: hi = 'hi';
*/

import express,{Application, Request, Response, NextFunction} from 'express';

//const app = express()
//const app = express.Application();
const app: Application = express();
const port =  5000;

//for printing
//const add = (a: num, b: num): num => a + b;

app.get('/',(req: Request,res: Response, next: NextFunction) =>{
   // console.log(add(2,9));
    res.send('testing');
})


app.listen(port, () => console.log('server runinig at localhost:5000'));