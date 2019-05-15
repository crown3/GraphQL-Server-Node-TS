import { LinkOrderByInput, LinkWhereInput } from '../generated/prisma-client'
import { Context } from './types/Context'

export function info() {
  return 'Hello world!!!'
}

// Disable sort by id, because we had limited that in schema.graphql
interface FeedArgs {
  filter?: string
  skip?: number
  first?: number
  orderBy?: Exclude<LinkOrderByInput, 'id_ASC' | 'id_DESC'>
}
export async function feed(
  parent: null | undefined,
  args: FeedArgs,
  context: Context
) {
  const where: LinkWhereInput = args.filter
    ? {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter },
        ],
      }
    : {}
  const links = await context.prisma.links({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  const count = await context.prisma
    .linksConnection({ where })
    .aggregate()
    .count()
  return {
    links,
    count,
  }
}
