let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let love = string.match(/love/gi);
console.log(love);

let sentence1 = 'You cannot end a sentence with because because because is a conjunction';
let because = sentence1.match(/because/gi);
console.log(because);

const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const cleanedSentence = sentence2.replace(/[^a-zA-Z0-9\s]/g, '');
console.log(cleanedSentence)


