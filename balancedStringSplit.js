const balancedStringSplit = (s) => {
    let r_counter = 0
    let l_counter = 0
    let total_output = 0
    for (let i = 0 ; i < s.length ; i++){
        if ( s[i] === 'R'){
             r_counter += 1
        }
        else if ( s[i] === 'L'){
             l_counter += 1
        }
        
        if (r_counter === l_counter){
           total_output +=1
        }
        
    }
    return total_output
};
