// const process = require('process');
const express = require('express');
const {graphqlHTTP} = require('express-graphql');


const schema = require('./schema/schema');
const testschema = require('./schema/types_schema.js');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 4000
const cors = require('cors');
//mongodb+srv://Kenta:<password>@cluster0.og6io.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


app.use(cors());
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}))


mongoose.connect(`mongodb+srv://${process.env.mongoUserName}:${process.env.mongoUserPassword}@cluster0.og6io.mongodb.net/${process.env.mongoDatabase}?retryWrites=true&w=majority`).then(() => {
    app.listen({port: port}, () => { //localhost:4000
        console.log('Listening for requests on my awesome port 4000');
    });
}).catch((e) => console.log("Error:::" + e))
