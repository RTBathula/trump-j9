export const isBoolean = value => typeof value === 'boolean';

export const hasNoValue = value => value === null || value === undefined;

export const isString = str => typeof str === 'string' || str instanceof String;

export const isValidDate = d => d instanceof Date && !isNaN(d);

export const isFiniteNumber = value => typeof value === 'number' && !isNaN(value) && isFinite(value);

export const isJSON = (json) => {     
  try {
    JSON.parse(json);
    return true;
  } catch (e) {
    return false;
  }     
};
