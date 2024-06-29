import express, {Request, Response} from "express";



const app = express();



app.get('/', (req: Request, res: Response) => {
   res.send("hello from express-typescript app")
})


app.listen(3000, () => {
    console.log('listening on port 3000')
})