//localstorage操作
function getDataFromLocalStorage(str){
  let data = JSON.parse(localStorage.getItem(str));
  if(data){
    return data;
  }else{
    return 0;
  }
}
function setDataToLocalStorage(str,data){
  localStorage.setItem(str, JSON.stringify(data));
}
function removeDataFromLocalStorage(str){
  localStorage.removeItem(str);
}
var utils = {};

utils.getDataFromLocalStorage = getDataFromLocalStorage;
utils.setDataToLocalStorage = setDataToLocalStorage;
utils.removeDataFromLocalStorage = removeDataFromLocalStorage;


export default utils;