function minMax(arr) {


    let max = arr[0]
    let min = arr[0]
    
    for (let num of arr) {
        if (num > max) {
            max = num
        } 
        if (num < min) {
            min = num
        } 
            
    }

    return(min, max)

}

minMax([1, 2, 3, 4, 5]);

minMax([2334454, 5]);

minMax([1]);