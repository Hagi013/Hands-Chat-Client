/**
 * Created by shuhei.hagiwara on 2017/06/30.
 */

export default class BaseModel {
  constructor (modelObj) {
    if (!this.checkObjNotNull(modelObj)) return
    this._id = modelObj.id
  }

  get id () {
    return this._id
  }

  checkObjNotNull (target) {
    return target !== null && target !== undefined && Object.keys(target).length !== 0
  }

}