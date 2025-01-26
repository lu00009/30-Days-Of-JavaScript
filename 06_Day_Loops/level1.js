//1
for (let i = 0; i <= 10; i++) {
  console.log('forloop '+i);
}
let i = 0;
do{
  console.log('dowhile '+i);
  i++;
}while(i<=10);
let j = 0;
while(j<=10){
  console.log('while '+ j);
  j++;
}
//2
for (let k = 10; k >= 0; k--) {
  console.log('forloop '+k);
}
let k = 10;
do{
  console.log('dowhile '+k);
  k--;
}while(k>=0);
let l = 10;
while(l>=0){
  console.log('while '+ l);
  l--;
}
//3
// for (let m = 0; m < n; m++) {
// }
//4
for (let o = 0; o < 7; o++) {
  let row = '';
  for (let p = 0; p < o; p++) {
    row += '#';

}
console.log(row);}

//5
for (let q = 0; q <= 10; q++) {
  console.log(`${q} * ${q} = ${q*q}`);}

//6
for (let r = 0; r <= 10; r++) {
  console.log(`${r} ${r**2} ${r**3}`);}

//7
let sum3 = 0;
for (let s = 0; s <= 100; s++) {
  if(s % 2 == 1){
    continue
  }
  sum3 += s;
  console.log(i);
 }
//8
for (let r = 0; r <= 100; r++) {
  if(r % 2 == 0){
    continue
  }
  console.log(r);
 }
//9
function isPrime(n) {
  if (n <= 1)
    return false;
  for (let i = 2; i < n; i++)
    if (n % i == 0)
      return false;

  return true;
}
for (let t = 0; t <= 100; t++) {
  if(isPrime(t)){
    console.log(t);
  }
 }
 //10
 let sum = 0;
  for (let u = 0; u <= 100; u++) {
      sum += u;
    }
    console.log(`sum of all numbers from 0 to 100 is ${sum}`);
  //11
  let sum1 = 0;
  for (let v = 0; v <= 100; v++) {
    if(v % 2 == 0){
      sum1 += v;
    }
  }
  console.log(`sum of all even numbers from 0 to 100 is ${sum1}`);

  //12
  let sum2 = 0;
  for (let w = 0; w <= 100; w++) {
    if(w % 2 == 1){
      sum2 += w;
    }
  }
  let arr = [];
  arr.push(sum3);
  arr.push(sum2);
  console.log(arr);

  //13
  let arr1 = [];
  for(let x = 0; x < 5; x++){
   arr1.push(Math.floor(Math.random() * 100));
  }
  console.log(arr1);

  //14
  let arr2 = [];
  for(let y = 0; y < 5; y++){
    if(!arr2.includes(y)){
    arr2.push(Math.floor(Math.random() * 100));}
  }
  console.log(arr2);

  //15
let string = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Pool of possible characters
for (let z = 0; z < 6; z++) {
  string += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(string);

