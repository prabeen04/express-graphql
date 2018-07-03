var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(
    `
    type Query{
        hello: String
    }
    type Query{
        api: String
    }

    `
);

var root = {
    hello: () =>{
        return "Hello Prabeen , welcome to the world of GRAPHQL";
    },
    api: () =>{
        return "this is the graphql API";
    }
}

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(4000);
console.log('server started at port 4000')