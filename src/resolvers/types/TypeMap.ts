import { ITypeMap } from 'generated/resolvers'
import { AuthPayloadParent } from 'resolvers/AuthPayload'
import { FeedParent } from 'resolvers/Feed'
import { LinkParent } from 'resolvers/Link'
import { UserParent } from 'resolvers/User'
import { VoteParent } from 'resolvers/Vote'
import { Context } from './Context'

type LinkOrderByInput =
  | 'description_ASC'
  | 'description_DESC'
  | 'url_ASC'
  | 'url_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'

export interface TypeMap extends ITypeMap {
  Context: Context
  LinkOrderByInput: LinkOrderByInput

  QueryParent: {}
  MutationParent: {}
  SubscriptionParent: {}
  FeedParent: FeedParent
  LinkParent: LinkParent
  AuthPayloadParent: AuthPayloadParent
  UserParent: UserParent
  VoteParent: VoteParent
}
