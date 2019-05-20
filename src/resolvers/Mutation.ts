import bcrypt from 'bcryptjs'
import { MutationResolvers } from 'generated/resolvers'
import jwt from 'jsonwebtoken'
import { APP_SECRET, getUserId } from '../utils'
import { TypeMap } from './types/TypeMap'

export const Mutation: MutationResolvers.Type<TypeMap> = {
  post: (parent, args, ctx) => {
    const userId = getUserId(ctx)
    return ctx.prisma.createLink({
      url: args.url,
      description: args.description,
      postedBy: {
        connect: {
          id: userId,
        },
      },
    })
  },

  signup: async (parent, args, ctx) => {
    const password = await bcrypt.hash(args.password, 10)
    // rewrite password with salt
    const user = await ctx.prisma.createUser({ ...args, password })
    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
      token,
      user,
    }
  },

  login: async (parent, args, ctx) => {
    const user = await ctx.prisma.user({ email: args.email })
    if (!user) {
      throw new Error('No such user found')
    }

    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
      token,
      user,
    }
  },

  vote: async (parent, args, ctx) => {
    const userId = getUserId(ctx)

    const linkExists = await ctx.prisma.$exists.vote({
      user: { id: userId },
      link: { id: args.linkId },
    })

    if (linkExists) {
      throw new Error(`Already voted for link: ${args.linkId}`)
    }

    return ctx.prisma.createVote({
      user: { connect: { id: userId } },
      link: { connect: { id: args.linkId } },
    })
  },
}
