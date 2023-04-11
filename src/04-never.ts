//never is a function that does not have an end or never executed
const withoutEnd = (): never => {
                  //this 'never' is not necesary
  while (true) {
    console.log('Do not stop learning');
  }
}


//example 2
const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'is a string';
  } else if (Array.isArray(input)) {
    return 'is an array';
  }
  return fail('not match');
}


console.log(example('hello'));
console.log(example([1,1,1,1]));
console.log(example(1212)); // stops the function
console.log(example('after fail'));//won't be printed
console.log(example('after fail'));//won't be printed
console.log(example('after fail'));//won't be printed
