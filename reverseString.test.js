const reverseString = require('./reverseString');

describe("Testing reverseString function", ()=>{
    test("reverseString(hello) => olleh", ()=>{
        expect(reverseString("hello")).toEqual("olleh");
    })
    test("reverseString(OpenAi) => iAnepO",()=>{
        expect(reverseString("OpenAi")).toEqual("iAnepO");
    })
    test("reverseString(racecar) => racecar",()=>{
        expect(reverseString("racecar")).toEqual("racecar");
    })
    
})