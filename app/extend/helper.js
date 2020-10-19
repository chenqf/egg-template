'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  // 并集
  union(...args) {
    return [ ...new Set(args.reduce((init, cur) => init.concat(cur), [])) ];
  },
  // 交集
  intersection(init, ...args) {
    return init.filter(v => args.map(arr => new Set(arr)).every(set => set.has(v)));
  },
  whereEq(params) {
    const result = {};
    const keys = Object.keys(params);
    keys.forEach(key => {
      if (params[key] !== undefined && params[key] !== '' && params[key] !== null) {
        result[key] = params[key];
      }
    });
    return result;
  },
  whereCreatedAt({ startTime, endTime }) {
    if (!startTime && !endTime) {
      return {};
    }
    const result = {
      createdAt: {},
    };
    if (startTime) {
      result.createdAt = {
        ...result.createdAt,
        [Op.gte]: startTime,
      };
    }
    if (endTime) {
      result.createdAt = {
        ...result.createdAt,
        [Op.lte]: endTime,
      };
    }
    return result;
  },
  whereIn(params) {
    const result = {};
    const keys = Object.keys(params);
    keys.forEach(key => {
      if (Array.isArray(params[key]) && params[key].length) {
        result[key] = {
          [Op.in]: params[key],
        };
      }
    });
    return result;
  },
  whereNotIn(params) {
    const result = {};
    const keys = Object.keys(params);
    keys.forEach(key => {
      if (Array.isArray(params[key]) && params[key].length) {
        result[key] = {
          [Op.notIn]: params[key],
        };
      }
    });
    return result;
  },
  whereLike(params) {
    const result = {};
    const keys = Object.keys(params);
    keys.forEach(key => {
      if (params[key] !== undefined && params[key] !== '') {
        result[key] = {
          [Op.like]: `%${params[key]}%`,
        };
      }
    });
    return result;
  },
  orderByAsc() {
    return {
      order: [
        [ 'id', 'desc' ],
      ],
    };
  },
  orderByDesc() {
    return {
      order: [
        [ 'id', 'desc' ],
      ],
    };
  },
  orderBy(...args) {
    return {
      order: args,
    };
  },
  limit({ pageNum = 1, pageSize = 10 }) {
    const page = Number(pageNum);
    const size = Number(pageSize);
    return {
      offset: (page - 1) * size,
      limit: size,
    };
  },
};
