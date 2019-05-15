import { LinkWhereUniqueInput } from '../generated/prisma-client'
import { Context } from './types/Context'

export function postedBy(
  parent: LinkWhereUniqueInput,
  args: null | undefined,
  context: Context
) {
  return context.prisma.link({ id: parent.id }).postedBy()
}

export function votes(
  parent: LinkWhereUniqueInput,
  args: null | undefined,
  context: Context
) {
  return context.prisma.link({ id: parent.id }).votes()
}
