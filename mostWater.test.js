const mostWater = require('./mostWater');

describe("testing mostWater", ()=>{
    test("mostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]=> 49)", ()=>{
        expect(mostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
    })
    test("mostWater[4, 3, 2, 1, 4]=>16",()=>{
        expect(mostWater[4, 3, 2, 1, 4]).toEqual(16);
    })
    test("mostWater[1, 2, 1]=>2",()=>{
        expect(mostWater[1, 2, 1]).toEqual(2);
    })
    
})