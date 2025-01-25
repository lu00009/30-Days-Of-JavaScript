//1
const arr1 = Array();
//2
const arr2 = Array(5);
//3
console.log(arr2.length);
//4
console.log(arr2[0]);
console.log(arr2[(arr2.length-1)/2]);
console.log(arr2[(arr2.length)-1]);

//5
const mixedDataTypes = ['string', 1, true, null, undefined, [1, 2, 3, 4]];
console.log(mixedDataTypes.length);

//6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//7
console.log(itCompanies);

//8
console.log(itCompanies.length);

//9
console.log(itCompanies[0]);
console.log(itCompanies[(itCompanies.length-1)/2]);
console.log(itCompanies[(itCompanies.length)-1]);

//10
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

//11
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

//12
console.log(`${itCompanies.join(', ')} are big IT companies.`);

//13
const company = prompt('Enter a company name:');
if (itCompanies.includes(company)) {
  console.log('Company found');
}
else {
  console.log('Company not found');
}

//14
for (let i = 0; i < itCompanies.length; i++) {
  if (itCompanies[i].includes('oo')) {
    console.log(itCompanies[i]);
  }
}

//15
console.log(itCompanies.sort());

//16
console.log(itCompanies.reverse());

//17
console.log(itCompanies.slice(0, 3));

//18
console.log(itCompanies.slice(3, 7));

//19
console.log(itCompanies.slice(3, 5));

//20
itCompanies.splice(0, 1);
console.log(itCompanies);

//21
itCompanies.splice(3, 5);
console.log(itCompanies);

//22
console.log(itCompanies.pop());

//23
itCompanies.splice();
console.log(itCompanies);
