import { ContextParameters } from 'graphql-yoga/dist/types'
import { Prisma } from '../../generated/prisma-client'

export interface Context extends ContextParameters {
  prisma: Prisma
}
