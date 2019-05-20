/* DO NOT EDIT! */
import { GraphQLResolveInfo } from 'graphql'

export interface ITypeMap {
  Context: any
  LinkOrderByInput: any

  QueryParent: any
  MutationParent: any
  SubscriptionParent: any
  FeedParent: any
  LinkParent: any
  AuthPayloadParent: any
  UserParent: any
  VoteParent: any
}

export namespace QueryResolvers {
  export type InfoResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>

  export interface ArgsFeed<T extends ITypeMap> {
    filter?: string
    skip?: number
    first?: number
    orderBy?: T['LinkOrderByInput']
  }

  export type FeedResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: ArgsFeed<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['FeedParent'] | Promise<T['FeedParent']>

  export interface Type<T extends ITypeMap> {
    info: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>
    feed: (
      parent: T['QueryParent'],
      args: ArgsFeed<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['FeedParent'] | Promise<T['FeedParent']>
  }
}

export namespace MutationResolvers {
  export interface ArgsPost<T extends ITypeMap> {
    url: string
    description: string
  }

  export type PostResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsPost<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['LinkParent'] | Promise<T['LinkParent']>

  export interface ArgsSignup<T extends ITypeMap> {
    email: string
    password: string
    name: string
  }

  export type SignupResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsSignup<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['AuthPayloadParent'] | null | Promise<T['AuthPayloadParent'] | null>

  export interface ArgsLogin<T extends ITypeMap> {
    email: string
    password: string
  }

  export type LoginResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsLogin<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['AuthPayloadParent'] | null | Promise<T['AuthPayloadParent'] | null>

  export interface ArgsVote<T extends ITypeMap> {
    linkId: string
  }

  export type VoteResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsVote<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['VoteParent'] | null | Promise<T['VoteParent'] | null>

  export interface Type<T extends ITypeMap> {
    post: (
      parent: T['MutationParent'],
      args: ArgsPost<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['LinkParent'] | Promise<T['LinkParent']>
    signup: (
      parent: T['MutationParent'],
      args: ArgsSignup<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['AuthPayloadParent'] | null | Promise<T['AuthPayloadParent'] | null>
    login: (
      parent: T['MutationParent'],
      args: ArgsLogin<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['AuthPayloadParent'] | null | Promise<T['AuthPayloadParent'] | null>
    vote: (
      parent: T['MutationParent'],
      args: ArgsVote<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['VoteParent'] | null | Promise<T['VoteParent'] | null>
  }
}

export namespace SubscriptionResolvers {
  export type NewLinkResolver<T extends ITypeMap> = (
    parent: T['SubscriptionParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['LinkParent'] | null | Promise<T['LinkParent'] | null>

  export type NewVoteResolver<T extends ITypeMap> = (
    parent: T['SubscriptionParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['VoteParent'] | null | Promise<T['VoteParent'] | null>

  export interface Type<T extends ITypeMap> {
    newLink: (
      parent: T['SubscriptionParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['LinkParent'] | null | Promise<T['LinkParent'] | null>
    newVote: (
      parent: T['SubscriptionParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['VoteParent'] | null | Promise<T['VoteParent'] | null>
  }
}

export namespace FeedResolvers {
  export type LinksResolver<T extends ITypeMap> = (
    parent: T['FeedParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['LinkParent'][] | Promise<T['LinkParent'][]>

  export type CountResolver<T extends ITypeMap> = (
    parent: T['FeedParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>

  export interface Type<T extends ITypeMap> {
    links: (
      parent: T['FeedParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['LinkParent'][] | Promise<T['LinkParent'][]>
    count: (
      parent: T['FeedParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>
  }
}

export namespace LinkResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['LinkParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>

  export type DescriptionResolver<T extends ITypeMap> = (
    parent: T['LinkParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['LinkParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>

  export type UrlResolver<T extends ITypeMap> = (
    parent: T['LinkParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>

  export type PostedByResolver<T extends ITypeMap> = (
    parent: T['LinkParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['UserParent'] | null | Promise<T['UserParent'] | null>

  export type VotesResolver<T extends ITypeMap> = (
    parent: T['LinkParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['VoteParent'][] | Promise<T['VoteParent'][]>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['LinkParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>
    description: (
      parent: T['LinkParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>
    createdAt: (
      parent: T['LinkParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>
    url: (
      parent: T['LinkParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>
    postedBy: (
      parent: T['LinkParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['UserParent'] | null | Promise<T['UserParent'] | null>
    votes: (
      parent: T['LinkParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['VoteParent'][] | Promise<T['VoteParent'][]>
  }
}

export namespace AuthPayloadResolvers {
  export type TokenResolver<T extends ITypeMap> = (
    parent: T['AuthPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>

  export type UserResolver<T extends ITypeMap> = (
    parent: T['AuthPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['UserParent'] | null | Promise<T['UserParent'] | null>

  export interface Type<T extends ITypeMap> {
    token: (
      parent: T['AuthPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>
    user: (
      parent: T['AuthPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['UserParent'] | null | Promise<T['UserParent'] | null>
  }
}

export namespace UserResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>

  export type NameResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>

  export type EmailResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>

  export type LinksResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['LinkParent'][] | Promise<T['LinkParent'][]>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>
    name: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>
    email: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>
    links: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['LinkParent'][] | Promise<T['LinkParent'][]>
  }
}

export namespace VoteResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['VoteParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>

  export type LinkResolver<T extends ITypeMap> = (
    parent: T['VoteParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['LinkParent'] | Promise<T['LinkParent']>

  export type UserResolver<T extends ITypeMap> = (
    parent: T['VoteParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['UserParent'] | Promise<T['UserParent']>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['VoteParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>
    link: (
      parent: T['VoteParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['LinkParent'] | Promise<T['LinkParent']>
    user: (
      parent: T['VoteParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['UserParent'] | Promise<T['UserParent']>
  }
}

export interface IResolvers<T extends ITypeMap> {
  Query: QueryResolvers.Type<T>
  Mutation: MutationResolvers.Type<T>
  Subscription: SubscriptionResolvers.Type<T>
  Feed: FeedResolvers.Type<T>
  Link: LinkResolvers.Type<T>
  AuthPayload: AuthPayloadResolvers.Type<T>
  User: UserResolvers.Type<T>
  Vote: VoteResolvers.Type<T>
}
