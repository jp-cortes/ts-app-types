const prices: (number | string)[] = [1, 2, 3, 4,4, 'as'];
prices.push(2);
prices.push('2');

let user: [ string, number, boolean];
// user = ['alias', 20];
// user = [35, 20];
// user = [];

user = ['alias', 33, true];
// desstructuring
const [username, age] = user;
console.log(username);
console.log(age);

//example 2

let tuple: [ string, number] = ['alias', 33];
tuple[0] = 'string';
tuple[1] = 'string';//mark as error eventho will do it

//read only will prevent the tuple to be modified
const tupleV2: readonly [ string, number] = ['alias', 33];
tupleV2.push('string');
tupleV2[0] = 'string';
