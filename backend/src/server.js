import { ApolloServer } from 'apollo-server'
import { connect } from 'mongoose'
import 'dotenv/config'

function server({typeDefs, resolvers}) {
  connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const serverVar = new ApolloServer({typeDefs, resolvers})
  serverVar.listen().then(({url}) => console.log(url))
}

export default server
