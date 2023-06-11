object={
  name: `Huzaifa`,
  prof : `Developer`,
  age : 19,
}

let userinfo = function(obj){
  return function(userinfo){
    return obj[userinfo]
  }
}
let res = userinfo(object);
console.log(res(`name`));
