import bcrypt from 'bcryptjs'
import { Omit } from 'graphql-yoga/dist/types'
import jwt from 'jsonwebtoken'
import { Link, User } from '../generated/prisma-client'
import { APP_SECRET, getUserId } from '../utils'
import { Context } from './types/Context'

export async function signup(
  parent: null | undefined,
  args: Omit<User, 'id'>,
  context: Context
) {
  const password = await bcrypt.hash(args.password, 10)
  // rewrite password with salt
  const user = await context.prisma.createUser({ ...args, password })
  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

export async function login(
  parent: null | undefined,
  args: Pick<User, 'email' | 'password'>,
  context: Context
) {
  const user = await context.prisma.user({ email: args.email })
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
}

export function post(
  parent: null | undefined,
  args: Pick<Link, 'url' | 'description'>,
  context: Context
) {
  const userId = getUserId(context)

  return context.prisma.createLink({
    url: args.url,
    description: args.description,
    postedBy: {
      connect: {
        id: userId,
      },
    },
  })
}

export async function vote(
  parent: null | undefined,
  args: { linkId: Link['id'] },
  context: Context
) {
  const userId = getUserId(context)

  const linkExists = await context.prisma.$exists.vote({
    user: { id: userId },
    link: { id: args.linkId },
  })

  if (linkExists) {
    throw new Error(`Already voted for link: ${args.linkId}`)
  }

  return context.prisma.createVote({
    user: { connect: { id: userId } },
    link: { connect: { id: args.linkId } },
  })
}
