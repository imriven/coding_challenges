// https://edabit.com/challenge/8n9RyHThC3dNEPCng

function capToFront(s) {

    let upper = ""
    let lower = ""
    

    for (letter of s) {
        if (letter === letter.toUpperCase()) {
            upper += letter
      } else {
        lower += letter
      }
        
    }
    return upper + lower
}

console.log(capToFront("hApPy"))
console.log(capToFront("moveMENT"))
console.log(capToFront("shOrtCAKE"))