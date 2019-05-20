import { VoteResolvers } from 'generated/resolvers'
import { TypeMap } from './types/TypeMap'

export interface VoteParent {
  id: string
  // link: LinkParent
  // user: UserParent
}

export const Vote: VoteResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  link: (parent, args, ctx) => ctx.prisma.vote({ id: parent.id }).link(),
  user: (parent, args, ctx) => ctx.prisma.vote({ id: parent.id }).user(),
}
