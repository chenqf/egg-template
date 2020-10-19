'use strict';
const _deepRouterKeys = function(obj, res = [], init = []) {
  Object.keys(obj).forEach(key => {
    const _init = [ ...init, key ];
    if (typeof obj[key] === 'function') {
      res.push(_init);
    } else {
      _deepRouterKeys(obj[key], res, _init);
    }
  });
};

const deepRouterKeys = function(obj) {
  const result = [];
  _deepRouterKeys(obj, result);
  return result;
};

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;
  const result = deepRouterKeys(controller);
  result.forEach(items => {
    router.post('/' + items.join('/'), items.join('.'));
    router.get('/' + items.join('/'), items.join('.'));
  });
};
