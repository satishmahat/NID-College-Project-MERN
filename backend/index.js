import express from "express";
import { PORT } from "./config.js";


const app = express();

// app.use(express.json()); 


app.get('/', (request,response) => {
    console.log(request)
    return response.status(200).send('Welcome to NID Project')
})

app.listen(PORT , () => {
    console.log(`App is listening to port: ${PORT}`)
})

