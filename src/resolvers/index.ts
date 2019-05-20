import { IResolvers } from 'generated/resolvers'
import { AuthPayload } from './AuthPayload'
import { Feed } from './Feed'
import { Link } from './Link'
import { Mutation } from './Mutation'
import { Query } from './Query'
import { Subscription } from './Subscription'
import { TypeMap } from './types/TypeMap'
import { User } from './User'
import { Vote } from './Vote'

export const resolvers: IResolvers<TypeMap> = {
  Query,
  Mutation,
  Subscription,
  Feed,
  AuthPayload,
  Link,
  User,
  Vote,
}
