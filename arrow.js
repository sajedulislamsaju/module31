// this is the function declaretion 

function add (first , secend){
    const sum = first + secend;
    return sum;

}
const total = add(12 ,20);

// this is the function expretion 


const addNow = function add (first , secend){
    const sum = first + secend;
    return sum;

}
const totale = add(12 ,20);


// this is the arrow function 


const add3 = (first , secend) => first + secend ;
const result = add3(12 ,20);
console.log(result)



function getSum(a, b=9){
    return a+b;
}
    
    console.log(getSum(2, 7));




