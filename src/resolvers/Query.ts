import { QueryResolvers } from 'generated/resolvers'
import { TypeMap } from './types/TypeMap'

export const Query: QueryResolvers.Type<TypeMap> = {
  info: () => 'hello world',
  feed: async (parent, args, ctx) => {
    const where = args.filter
      ? {
          OR: [
            { description_contains: args.filter },
            { url_contains: args.filter },
          ],
        }
      : {}

    const links = await ctx.prisma.links({
      where,
      skip: args.skip,
      first: args.first,
      orderBy: args.orderBy,
    })

    const count = await ctx.prisma
      .linksConnection({ where })
      .aggregate()
      .count()

    return {
      links,
      count,
    }
  },
}
