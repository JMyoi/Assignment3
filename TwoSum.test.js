const TwoSum = require('./TwoSum');

describe("Testing TwoSum function",()=>{
    test("TwoSum([2,7,11,15],9) =>[0,1]",()=>{
        expect(TwoSum([2,7,11,15],9)).toEqual([0,1]);
    })
    test("TwoSum([3, 2, 4],6) =>[1,2]",()=>{
        expect(TwoSum([3, 2, 4],6)).toEqual([1,2]);
    })
    test("TwoSum([-1, -2, -3, -4, -5],-8) =>[2,4]",()=>{
        expect(TwoSum([-1, -2, -3, -4, -5],-8)).toEqual([2,4]);
    })
})