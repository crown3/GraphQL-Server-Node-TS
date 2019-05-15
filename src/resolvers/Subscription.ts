import {
  LinkSubscriptionPayload,
  VoteSubscriptionPayload,
} from '../generated/prisma-client'
import { Context } from './types/Context'

function newLinkSubscribe(
  parent: null | undefined,
  args: null | undefined,
  context: Context
) {
  return context.prisma.$subscribe.link({ mutation_in: ['CREATED'] }).node()
}

export const newLink = {
  subscribe: newLinkSubscribe,
  resolve: (payload: LinkSubscriptionPayload) => {
    return payload
  },
}

function newVoteSubscribe(
  parent: null | undefined,
  args: null | undefined,
  context: Context
) {
  return context.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node()
}

export const newVote = {
  subscribe: newVoteSubscribe,
  resolve: (payload: VoteSubscriptionPayload) => {
    return payload
  },
}
