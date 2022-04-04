const validation = (array, signBoolean) => {
    if(!signBoolean){
        if(array.find(item => typeof item !== 'number' || item < 0 )) {
            console.log("Please provide only positive number")
            return
        } else {
            if(array.find(item => typeof item !== 'number')) {
                console.log("Please provide only positive number")
                return
            }  
        }
    }  
}

const nonConstructibleChange = (array) => {
    validation(array);
    array.sort((a, b) => a - b);
    noncc =1
    for (i=0; i< array.length && array[i]<=noncc; i++){
        noncc +=array[i]
    }
    return noncc
}

const sortedSquaredArray = (array) => {
    validation(array);
    array.sort((a, b) => a - b);
    const squaredNumbers = array.map(number => number*number );
    return squaredNumbers.sort((a,b) => a - b);
} 

console.log(nonConstructibleChange([-1, 1, 1, 1, 1]));
console.log(sortedSquaredArray(['a', -5, 0, 5, 10]));

