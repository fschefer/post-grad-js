function calculateBMI(height, weight){

    return weight/(height*height)
}

function sum (n1, n2){
    return  n1 + n2; 
}

const listCats = (cats) => {
    const numberOfCats = cats.length;
    for(let i = 0; i < numberOfCats; i++) {
        console.log (`${cats[i]} is a cat`)
    }

}


module.exports = {
    calculateBMI,
    sum,
    listCats
}