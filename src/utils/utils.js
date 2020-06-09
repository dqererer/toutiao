function isObjectPlain(){
  alert(1)
}
function isObjectPlain2(){
  alert(2)
}
var utils = {};
utils.isObjectPlain = isObjectPlain;
utils.isObjectPlain2 = isObjectPlain2;

export default utils;