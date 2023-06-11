function add(a){
  return function(b){
    return function(c){
return a+b+c;
    }
  }
}

let res = add(4)(6)(9);
console.log(res);
