//1. Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).

//  function abcd(ffn){

//     setTimeout( ffn, 3000);
//  }
//  abcd(function(){

//     console.log("hey");
//     });


//2. Implement your own version of `.map()` as a higher-order function.

//map
    //  let arr=[2,5,7,8];

    //  let ans = arr.map(function(value){
    //     return value+2;
    //  });
// map closed

// let arr= [1,2,3,4,5,6];

// ek function banaoo jo ki accept kare array and accept kare ki kya chalana hai har value pr
// function hap(arr, fnc){
//      let newarr =[];
//      for( let i=0 ; i<arr.length; i++){
//        newarr.push(fnc(arr[i]));
//      }

//     return newarr;
// }
// let ans = hap(arr, function(value){

//     return value+5;
// });

//-----------------------------------------------------------
// 1. printing numbers in reverse(for loop)


// for(let i=10; i>=1; i--){
//     console.log(i);
    
// }


//2. multiples of 3 (while loop)

// let num =3;
// while (num <= 30 ) {
//     console.log(num);
//     num +=3;
// }

//3. sum of numbers from 1 to 100

// let sum=0;
// for(let i=1; i<=100;i++){
//     sum +=i;
// }
// console.log("sum:",sum);

//4. Star pattern(Nested loops)

// for (let i=1;i<=5;i++){
//     let stars="";

//     for(let j=1;j<=i;j++){
//         stars += "*";
//     }
//     console.log(stars);   
// }

// 5. lterating over a string (for.of loop)

// let str = "javascript";
// for(let char of str){
//     console.log(char);
    
// }

// let i=1, j=2, k=3;
// let m = i-- - j-- - k--;

// console.log("i "+i);
// console.log("j "+j);
// console.log("k "+k);
// console.log("m "+m);


// let  i=11;
// i= i++ + ++i; //11 + 13 
// console.log(i);

// let b=true  // true-1 false-0
// b++;
// console.log(b);



console.log(1); 
setTimeout(() => console.log(2), 0); 
Promise.resolve().then(() => console.log(3)); 
console.log(4);
