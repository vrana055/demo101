/* ********** Using conditional statement 🤢 ********** */

function getData(type) {
  if (type === 'deposit'){
    return {AMOUNT: 100};
  } else if (type === 'voucher'){
    return {AMOUNT: -100};
  }
}

getData('deposit');
getData('voucher');

/* ********** Using Object Power 💪 ********** */

data = {
  deposit: {AMOUNT: 100},
  voucher: {AMOUNT: -100},
}

function getDataAnotherWay(type) {
  return data[`${type}`];
} 

getDataAnotherWay('deposit');
getDataAnotherWay('voucher');
