function mostWater(ary){
    let big1 = ary[0], big2 = ary[1];
    for(let i = 1; i<ary.length; i++){
        if(big2<ary[i]){
            big2 = ary[i];
        }
        if(big1<ary[i]&&ary[i]!==big2){
            big1 = ary[i];
        }
    }
    return big1*big2;
    
}
module.exports = mostWater;