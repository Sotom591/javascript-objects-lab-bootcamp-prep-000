
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
  delete newObj.key;
  return obj;
}

function destructivelyDeleteFromObjectByKey(object, key)
{
  
  object.key = [];
  delete object.key;
  return object[key];
}