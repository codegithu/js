let value=[1,2,3,4,5,6,7,8,9,10];
value.push(11);
console.log(value);
value.map(item=>console.log9(`value * 10=${item*10}`));
let sumvalue=value.reduce((a,b)=>a+b);
console.log(`sum of arrow value=${sumvalue}`);
let evennum=value.filter(item=>item%2===0);
console.log(evennum);
