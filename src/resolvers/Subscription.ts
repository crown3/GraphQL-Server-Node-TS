import { SubscriptionResolvers } from 'generated/resolvers'
import { TypeMap } from './types/TypeMap'

export const Subscription: SubscriptionResolvers.Type<TypeMap> = {
  newLink: (parent, args, ctx) => {
    return ctx.prisma.$subscribe.link({ mutation_in: ['CREATED'] }).node()
  },
  newVote: (parent, args, ctx) => {
    return ctx.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node()
  },
}
