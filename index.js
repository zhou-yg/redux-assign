/**
 * Created by zyg on 17/3/12.
 */
var cloneDeep = require('lodash/fp/cloneDeep');

module.exports = function(deep){

  return function(store){
    return function(next){
      return function(action){
        if(deep){
          return next(cloneDeep(action));
        }else{
          return next(Object.assign({},action));
        }
      }
    }
  }
};