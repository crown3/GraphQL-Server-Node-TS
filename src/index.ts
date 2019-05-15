import { GraphQLServer } from 'graphql-yoga'
import { ContextParameters } from 'graphql-yoga/dist/types'
import { prisma } from './generated/prisma-client'
import * as Link from './resolvers/Link'
import * as Mutation from './resolvers/Mutation'
import * as Query from './resolvers/Query'
import * as Subscription from './resolvers/Subscription'
import { Context } from './resolvers/types/Context'
import * as User from './resolvers/User'
import * as Vote from './resolvers/Vote'

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Link,
  Vote,
}

const contextFn = (params: ContextParameters): Context => {
  return {
    ...params,
    prisma,
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: contextFn,
})

server.start(() => console.log('Server is running on http://localhost:4000'))
