
var recipes = {};

function updateObjectWithKeyAndValue(object, key, value)
{
 return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value)
{
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(object, key)
{
  var obj = {};
  var newObj = Object.assign({}, obj);
  newObj;
  delete object.key;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key)
{
  object.key = [];
  return object;
}