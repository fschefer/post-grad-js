
const { calculateAverage } = require("../../../functions")
const assert = require('node:assert');

describe("Testing average calculations", function () {
    it("Validate the average of 10 and 2 is 6", function () {
        const average = calculateAverage(10, 2)
        assert.equal(average, 6)

    })
    it("Validate function does not accept letters", function () {
        const average = calculateAverage("a", "C")
        assert.equal(average, NaN)

    })
    it("Validate average of zero", () => {
        const average = calculateAverage(0, 0)
        assert.equal(average, 0)
    })
})