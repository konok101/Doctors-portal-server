const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

//middle ware
const app = express();
const port = process.env.PORT || 5000;





const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kftfhvd.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        console.log('ddd')
    }
    finally {

    }

}
run().catch(console.dir)


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Doctorw');
})
app.listen(port, () => {
    console.log(`app lising on Doctors port ${port}`);
})