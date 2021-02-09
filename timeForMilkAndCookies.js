//https://edabit.com/challenge/hPWnaSckJke5FXNEH

function timeForMilkAndCookies(date) {
  let month = date.getMonth();
  let day = date.getDate();

  if (day === 24 && month === 11) {
    return true;
  }
  return false;
}

console.log(timeForMilkAndCookies(new Date(2013, 11, 24)));

console.log(timeForMilkAndCookies(new Date(2013, 0, 23)));

console.log(timeForMilkAndCookies(new Date(3000, 11, 24)));
