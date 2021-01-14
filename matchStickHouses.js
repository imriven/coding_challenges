// https://edabit.com/challenge/tYHkTdFrEmWfxpPKF

function matchHouses(step) {
  if (step === 0) {
    return 0;
  } else if (step === 1) {
    return 6;
  } else {
      return 6 + (step - 1) * 5;
      // return step * 5 + 1
  }
}



console.log(matchHouses(4));
console.log(matchHouses(87));


function matchHouses(step) {
    let no_step = 0
    let first_house = 6
    let houses = 5
    
    if (step === 0) {
        return no_step;
    } else if (step === 1)
        return first_house
        
}