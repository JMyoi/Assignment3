const mathFunctions = require('./mathFunctions');

describe("Testing Math Functions", ()=>{
    test("add(2,5) => 7", ()=>{
        expect(mathFunctions.add(2,5)).toEqual(7);
    })
    test("subtract(2,3) => -1",()=>{
        expect(mathFunctions.subtract(2,3)).toEqual(-1);
    })
    test("divide(2,1) => 2",()=>{
        expect(mathFunctions.divide(2,1)).toEqual(2);
    })
    test("multiply(3,4) => 12",()=>{
        expect(mathFunctions.multiply(3,4)).toEqual(12);
    })
})







 
