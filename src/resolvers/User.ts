import { UserWhereUniqueInput } from '../generated/prisma-client'
import { Context } from './types/Context'

export function links(
  parent: UserWhereUniqueInput,
  args: null | undefined,
  context: Context
) {
  return context.prisma.user({ id: parent.id }).links()
}
