/**
 * Created by zyg on 17/3/12.
 */
var cloneDeep = require('lodash/fp/cloneDeep');

module.exports = deep => store => next => action => {
  if(deep){
    return next(cloneDeep(action));
  }else{
    return next(Object.assign({},action));
  }
};