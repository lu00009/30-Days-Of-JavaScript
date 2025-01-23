console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.');
console.log("\"Love is not patronizing and charity isn't about pity,it is about love. \n Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

let string1 = parseInt('10');
let int = 10;
if (typeof(string1) == typeof(int)) {
    console.log('They are the same');
} else {
    console.log('They are not the same');
}

let string2 = parseFloat('9.8');
let float = 9.8;
if (typeof(string2) == typeof(float)) {
    console.log('They are the same');
} else {
    console.log('They are not the same');
}

let string3 = 'Python';
let string4 = 'Jargon';
if(string3.search('on') && string4.search('on')) {
    console.log('True');
}
else {
    console.log('False');
}

let string5 = 'I hope this course is not full of jargon';
console.log(string5.includes('jargon'));

let random = Math.random();
let numbtn0and100 = random * 100;
numbtn0and100 = Math.floor(numbtn0and100);
console.log(numbtn0and100);

let random2 = Math.random();
let numbtn50and100 = random2 * 50 + 50;
numbtn50and100 = Math.floor(numbtn50and100);
console.log(numbtn50and100);

let random3 = Math.random();
let numbtn0and255 = random3 * 255;
numbtn0and255 = Math.floor(numbtn0and255);
console.log(numbtn0and255);

let random4 = Math.random();
let string6 = 'JavaScript';
let randomIndex = random4 * string6.length;
randomIndex = Math.floor(randomIndex);
console.log(string6[randomIndex]);

console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');

let string7 = 'You cannot end a sentence with because because because is a conjunction';
console.log(string7.substr(31, 23));


