function calculateBMI(height, weight) {

    return weight / (height * height)
}

function sum(n1, n2) {
    return n1 + n2;
}

const listCats = (cats) => {
    const numberOfCats = cats.length;
    for (let i = 0; i < numberOfCats; i++) {
        console.log(`${cats[i]} is a cat`)
    }

}

const calculateAverage = (t1, t2) => {
    return (t1 + t2) / 2
}


module.exports = {
    calculateBMI,
    sum,
    listCats,
    calculateAverage
}