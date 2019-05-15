import {
  LinkWhereUniqueInput,
  UserWhereUniqueInput,
} from '../generated/prisma-client'
import { Context } from './types/Context'

export function link(
  parent: LinkWhereUniqueInput,
  args: null | undefined,
  context: Context
) {
  return context.prisma.vote({ id: parent.id }).link()
}

export function user(
  parent: UserWhereUniqueInput,
  args: null | undefined,
  context: Context
) {
  return context.prisma.vote({ id: parent.id }).user()
}
