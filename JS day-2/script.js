//ARRAY METHOD

// 1.MAP METHOD
let numbers=[1,2,3];
let double=numbers.map((x)=>x*2); //We call it callback function.Map is a higher order method
console.log(double);

// 2.FILTER METHOD
/*let marks=[7,23,34,35,26,37,4,0,45,33];
let result=marks.filter((marks)=>marks>=16);
 console.log(result); */

/* Q1 Take a array with 10 different marks and print the marks and the message of pass and fail */
let marks=[33,22,44,11,23,34,45,20,39,47];
let result=marks.filter((mark)=>{
    if (mark>=16){
        console.log(mark,"Pass")
    }
    else{
        console.log(mark,"Fail")
    }
});


// 3. REDUCE METHOD-Reduce an array to a single value.
// Q2 Find out the sum of all the elements inside an array using for loop
/*let arr=[1,2,3,4,5];
let res=arr.reduce((acc,current)=>acc+current);
console.log(res);*/
// Q3 Difference between map,filter,reduce array methods.
/* Map-same size of original array.
Filter-subset of the original array.
Reduce-only a asingle value.*/