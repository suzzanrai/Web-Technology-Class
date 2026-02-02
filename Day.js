
let name ='Calculation';
console.log(name);


let x=2;
let y=4;
let add=x+y;
let sub=x-y;
let mul=x*y;
let div=y/x;
compare= x>y ? x+1 : x+2;
 let inc=x++;
let inc2=++y;
let A=5; let B="5";
let f="City";
let g=5;


console.log(A==B);  //true  It only check the value not datatype
console.log(A===B); //false It will check both value and datatype
console.log('Addition is:',add);
console.log('Subtraction is:',sub);
console.log('Multiplication is:',mul);
console.log('Division is:',div);
console.log('Comparison is:',compare);
console.log('Post Increment is:',inc);
console.log('Pre Increment is:',inc2);

console.log(f+g);

// Day 2

fruits = ['Mango', 'Banana', 'Orange', 'Pineapple'];
console.log(fruits); // for printing 
console.log(fruits.length); // for length of array

fruits.push('Grapes'); // for adding element at last
fruits.pop(); // for removing last element
fruits.unshift('Strawberry'); // for adding element at first
fruits.shift(); // for removing first element
console.log(fruits);

let Var=[1,2,3,4,5,6,7,8,9,0];
let i;
// for (i=0;i<10;i++)
// {
//     console.log(Var[i]);
// }
let sum=0;
let avg;
for(i=0; i<Var.length;i++)
{
    sum=sum+Var[i];
    
    console.log(Var[i]);
}
console.log("sum is:",sum);
console.log("Average is:",sum/Var.length);



// Day 3

let text = "love";
let rule = /l/;
let text2 = "12345";
let rule2 =  /[0-9]/;
console.log(rule2.test(text2));
console.log(rule.test(text)); 
