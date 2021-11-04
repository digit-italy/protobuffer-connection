const express = require('express')
const app = express()
const cors = require('cors')
const random = require('random-name')
require('express-ws')(app);





const port = 3002
const HumanSchema = require('./humans_pb')

const humanList = { humanList: [{ name: 'Mario', 'age': 29 }, { name: 'Rossi', 'age': 30 }] }



app.use(cors())



app.get('/socket', (req, res) => {
    const human = new HumanSchema.Human()
    const age = Math.floor(Math.random() * 60) + 20
    human.setName(random.first())
    human.setAge(age)
    const bufferData = new TextDecoder().decode(human.serializeBinary())

    res.end(bufferData, 'binary')
})
app.ws('/socket', function (ws, req) {

    const interval = setInterval(() => {
        const human = new HumanSchema.Human()
        const age = Math.floor(Math.random() * 60) + 20
        human.setName(random.first())
        human.setAge(age)
        const bufferData = new TextDecoder().decode(human.serializeBinary())
        ws.send(bufferData)
    }, 2000)


});


app.get('/', (req, res) => {
    const data = new HumanSchema.Humans()

    for (let item of humanList.humanList) {
        const human = new HumanSchema.Human()
        human.setName(item.name)
        human.setAge(item.age)

        data.addHumans(human)
    }

    const bufferData = new TextDecoder().decode(data.serializeBinary())

    res.end(bufferData, 'binary')
})

app.get('/json', (req, res) => {
    res.send(humanList)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})