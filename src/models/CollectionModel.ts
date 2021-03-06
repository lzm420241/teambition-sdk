'use strict'
import { Observable } from 'rxjs/Observable'
import BaseModel from './BaseModel'
import { TBCollectionData, default as TBCollection } from '../schemas/Collection'
import { dataToSchema, datasToSchemas } from '../utils/index'

export class CollectionModel extends BaseModel {

  private _schemaName = 'TBCollection'

  addOne(collection: TBCollectionData): Observable<TBCollectionData> {
    const result = dataToSchema<TBCollectionData>(collection, TBCollection)
    return this._save(result)
  }

  getOne(collectionId: string): Observable<TBCollection> {
    return this._get<TBCollection>(collectionId)
  }

  addCollections(_parentId: string, collections: TBCollectionData[]): Observable<TBCollectionData[]> {
    const result = datasToSchemas<TBCollectionData>(collections, TBCollection)
    return this._saveCollection<TBCollectionData>(`collections/${_parentId}`, result, this._schemaName, (data: TBCollectionData) => {
      return data._parentId === _parentId && !data.isArchived
    })
  }

  getCollections(_parentId: string): Observable<TBCollection[]> {
    return this._get<TBCollection[]>(`collections/${_parentId}`)
  }
}

export default new CollectionModel()
