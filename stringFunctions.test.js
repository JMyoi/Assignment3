const stringFunctions = require('./stringFunctions');

describe("Testing the string functions",()=>{
    test("reverseString(Hello) => olleH",()=>{
        expect(stringFunctions.reverseString("Hello")).toEqual("olleH");
    })
})




