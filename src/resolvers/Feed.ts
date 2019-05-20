import { FeedResolvers } from 'generated/resolvers'
import { LinkParent } from './Link'
import { TypeMap } from './types/TypeMap'

export interface FeedParent {
  links: LinkParent[]
  count: number
}

export const Feed: FeedResolvers.Type<TypeMap> = {
  links: parent => parent.links,
  count: parent => parent.count,
}
