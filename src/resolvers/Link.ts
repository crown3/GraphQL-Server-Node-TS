import { LinkResolvers } from 'generated/resolvers'
import { TypeMap } from './types/TypeMap'

export interface LinkParent {
  id: string
  description: string
  createdAt: string
  url: string
  // postedBy: UserParent
  // votes: VoteParent[]
}

export const Link: LinkResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  description: parent => parent.description,
  createdAt: parent => parent.createdAt,
  url: parent => parent.url,
  postedBy: (parent, args, ctx) =>
    ctx.prisma.link({ id: parent.id }).postedBy(),
  votes: (parent, args, ctx) => ctx.prisma.link({ id: parent.id }).votes(),
}
