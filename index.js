var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`type Query {
    course(id: Int!): Course
    courses(topic: String): [Course]
},
type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
}`);

var root = {
    hello: () => {
        return "Hello Prabeen , welcome to the world of GRAPHQL";
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