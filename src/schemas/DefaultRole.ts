'use strict'
import { Schema, ISchema, schemaName } from './schema'

export type DefaultRoleName = 'guest' | 'member' | 'admin' | 'owner'

export interface DefaultRoleData extends ISchema {
  _id: number | string
  name: DefaultRoleName
  permissions: string []
}

@schemaName('Role')
export default class DefaultRoleSchema extends Schema<DefaultRoleData> implements DefaultRoleData {
  _id: number | string = undefined
  name: DefaultRoleName = undefined
  permissions: string [] = undefined
}
