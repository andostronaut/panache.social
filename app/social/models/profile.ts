import { belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import BaseModel from '#common/models/base_model'
import User from '#common/models/user'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Comment from '#social/models/comment'
import Post from '#social/models/post'
import PostLike from '#social/models/post_like'
import RoomMember from '#social/models/room_member'
import Follow from '#social/models/follow'

export default class Profile extends BaseModel {
  /**
   * Regular columns.
   */
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column()
  declare userId: string

  @column()
  declare username: string

  @column()
  declare avatar: string

  @column()
  declare displayName: string | null

  @column()
  declare bio: string | null

  @column()
  declare websiteUrl: string | null

  @column()
  declare followersCount: number

  @column()
  declare followingCount: number

  /**
   * Relationships.
   */
  @hasMany(() => Post)
  declare posts: HasMany<typeof Post>

  @hasMany(() => Comment)
  declare comments: HasMany<typeof Comment>

  @hasMany(() => PostLike)
  declare likes: HasMany<typeof PostLike>

  @hasMany(() => RoomMember)
  declare roomMembers: HasMany<typeof RoomMember>

  @hasMany(() => Follow, {
    foreignKey: 'followerId',
  })
  declare following: HasMany<typeof Follow>

  @hasMany(() => Follow, {
    foreignKey: 'followingId',
  })
  declare followers: HasMany<typeof Follow>
}
