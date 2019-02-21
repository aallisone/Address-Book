const express = require('express')
const app = express()
const port = 4000
const monk = require('monk')
const url = 'mongodb://user1:Password@cluster0-shard-00-00-rahtc.mongodb.net:27017,cluster0-shard-00-01-rahtc.mongodb.net:27017,cluster0-shard-00-02-rahtc.mongodb.net:27017/my-database?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
const db = monk(url);
const cors = require('cors')
const bodyParser = require('body-parser')


app.use(cors())
app.use(bodyParser.json())


db.then(() => {
  console.log('Connected correctly to server')
})

const people = db.get('learning-this')

app.get('/', async (req, res) => { 
const results = await people.find() 
res.status(200).send(results)
})

app.post('/', async (req, res) => {
  const results = await people.insert(req.body)
  res.status(200).send(results)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
