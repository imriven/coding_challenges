function canBuild(digits, arr) {
	
    let m={}
    for (let [i,v] of digits.entries()) {
      m[i] = v
    }
    let ok = true
    for (let answer of arr) {
      for (let d of answer.toString()){
        if (m[d]>0){
          m[d]-=1
        } else {
          ok = false
        }
      }
    }
    return ok
  }
  
  console.log(canBuild([0, 1, 2, 2, 3, 0, 0, 0, 1, 1], [123, 4444, 92]))