const graphql = require('graphql')

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLNonNull,
    GraphQLSchema
} = graphql

//Scaler Type
/*
    String = GraphQLString
    Int = 
    Float
    Boolean
    ID
*/

const Person = new GraphQLObjectType({
    name: 'Person',
    description: 'Reprent a Preson Type',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: new GraphQLNonNull(GraphQLString)},
        age: {type: new GraphQLNonNull(GraphQLInt)},
        idMarried: {type: GraphQLBoolean},
        gpa: {type: GraphQLFloat},

        justAType: {
            type: Person,
            resolve(parent, args) {
                return parent; 
            }
        }
    })
})

//RootQuery
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'description',
    fields: {
        person: {
            type: Person,
            // args: {id: {type: GraphQLID}},
            resolve(parent, args){
                let personObj = {
                    // id: {type: GraphQLID},
                    name: null,
                    age: null,
                    isMarried: true,
                    gpa: 4.0
                };
                return personObj;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});