var names = ['suma','vani','navya','kavitha',];
names.forEach(function(value,index){
    console.log(value);
});
var isarr = Array.isArray(names);
console.log(isarr);
var inc = names.includes('vani');
console.log(inc);
var push = names.push('pooji','pavani');
console.log(push);
var pop = names.pop();
console.log(pop);
var unshift = names.unshift('raji');
console.log(unshift);
var shift = names.shift();
console.log(shift);
var splice = (0,2,'puppy','pinky');
console.log(splice);
var splice = names.slice(0,2);
console.log(splice);
var join = names.join('==>');
console.log(join);
var index = names.indexOf('kavitha');
console.log(index);
console.log('===================');
var hobbies = ['football','sleeping','singing','dancing','gardening','shopping'];
var arr = Array.isArray(hobbies);
console.log(arr);
var inc = hobbies.includes('gardening');
console.log(inc);
var push = hobbies.push('cooking','reading');
console.log(push);
var pop = hobbies.pop();
console.log(pop);
var unshift = hobbies.unshift('swimming','skipping');
console.log(unshift);
var shift =  hobbies.shift();
console.log(shift);
var splice = hobbies.splice(0,2,'kabaddi','jumping');
console.log(splice);
var slice = hobbies.slice(1,4);
console.log(slice);
var join = hobbies.join('==>');
console.log(join);
var index = hobbies.indexOf('gardening');
console.log(index);
console.log('************ STRING METHODS**************');
var str1 = 'I LOVE INDIA';
var lower = str1.toLowerCase();
console.log(lower);
var str = 'i love india';
var upper = str.toUpperCase();
console.log(upper);
var char = str.charAt(4);
console.log(char);
var index = str.indexOf('e');
console.log(index);
var includes = str.includes('i',7);
console.log(includes);
var replace = str.replace('india','mom');
console.log(replace);
var concat = str.concat(' and mom');
console.log(concat);
var split = str.split('e',3);
console.log(split);
var substr = str.substring(8,3);
console.log(substr);
var search = str.search('love');
console.log(search);
console.log('=============================');
var str = 'suma';
var upper = str.toUpperCase();
console.log(upper);
var str1 = 'SUMA';
var lower = str1.toLowerCase();
console.log(lower);
var char = str.charAt(3);
console.log(char);
var index = str.indexOf('m');
console.log(index);
var includes = str.includes('u',3);
console.log(includes);
var replace = str.replace('a','athi');
console.log(replace);
var concat = str.concat(' vemula');
console.log(concat);
var split = str.split('a',3);
console.log(split);
var substr = str.substring(1,2);
console.log(substr);
var search = str.search('um');
console.log(search);