data = {
  deposit: {AMOUNT: -100},
  voucher: {AMOUNT: 100},
}

/* ********** Using conditional statement 🤢 ********** */

function getData(type) {
  if (type === 'deposit'){
    return {AMOUNT: -100};
  } else if (type === 'voucher'){
    return {AMOUNT: 100};
  }
}

getData('deposit');
getData('voucher');

/* ********** Using Object Power 💪 ********** */

function getDataAnotherWay(type) {
  return data[`${type}`];
} 

getDataAnotherWay('deposit');
getDataAnotherWay('voucher');
