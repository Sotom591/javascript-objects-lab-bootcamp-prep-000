
var recipes = {};

var obj = {prop: 1};
function updateObjectWithKeyAndValue(object, key, value)
{
 Object.assign({}, obj, {[key]: value});
 var obj = {prop2: 2};
}