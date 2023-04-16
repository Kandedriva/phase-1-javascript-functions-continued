// code your solution here
let companyName = 'Scuber';

function saturdayFun(fun = "roller-skate" ){
  return `This Saturday, I want to ${fun}!`;
}

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(adjective = "*"){
  return function(wrap = "special"){
    return `You are ${adjective}${wrap}${adjective}!`
  };
}
