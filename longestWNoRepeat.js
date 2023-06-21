function lengthOfLongestSubstring(str){
    let length = 0;
    let here = 0;//the start of the no repeating substring.
    let store = []; //stores characters that have already been seen.

    for(let i =0; i<str.length; i++){

        let alreadythere = false;
        if(i ===0){ 
            store.push(str.at(i));
        }//push the first character in

        for(let j =0;j<store.length;j++){//checks to see if the char at i has already been there
            if(store[j] === str[i]){
                alreadythere = true;
                break;
            }
        }
        if(alreadythere){
            here = i;
            store = [];
        }
        store.push(str[i]);
        length = Math.max(length, store.length);
    }
    return length;
}

module.exports =lengthOfLongestSubstring;