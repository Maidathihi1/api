const mongoose = require('mongoose')
const { use } = require('passport')

const connStr = 'mongodb+srv://maidat11012001:maidat11012001@cluster0.jrkjy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(connStr,{
    useUnifiedTopology: true,
    useNewUrParser: true,
    // reconnectTries: Number.MAX_VALUE,
    // autoReconnect: true
})
.then(() => {
    console.log('Connected to the database')
}) 
.catch(err => {
    console.log('Cannot connect to the databa', err)
    process.exit()
})
