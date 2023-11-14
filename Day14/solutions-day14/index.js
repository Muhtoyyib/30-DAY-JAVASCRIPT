// Exercises:Level 1
// Practice

try{
    let number = 5;
    if(number === 3) {
        throw 'Perfect'
    } else if(number > 3){
        throw 'too high'
    } else{
        throw 'less '
    }
} catch(err){
    console.log(err);
} finally{
    let number = 45;
    console.log(number);
}