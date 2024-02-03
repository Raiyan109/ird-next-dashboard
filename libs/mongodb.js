// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tnhjc.mongodb.net/ird?retryWrites=true&w=majority`;

const MongoClient = require("mongodb/lib/mongo_client");

const port = process.env.PORT || 5000
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@carexsalarysheet.rebta1m.mongodb.net/ird?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect()



    }
    finally {

    }
}
run().catch(console.dir)

app.get('/', (req, res) => {
    res.send('Hello from ird')
})

app.listen(port, () => {
    console.log(`doctors app listening on port ${port}`)
})