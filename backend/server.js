import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// express app
const app = express();

app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

const PORT = process.env.PORT;

// listen for request
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})