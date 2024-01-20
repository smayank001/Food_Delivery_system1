

const express = require('express')
const app = express()
const port = 5000;
const cors = require("cors")

app.use(
  cors({
      origin: "*",
      exposedHeaders: 'Authorization'
  })
);

const mongoose = require("mongoose");

mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://FOODZONE:8851432459MS@cluster0.lmpwhvs.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));


app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./Routes/Auth'));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

