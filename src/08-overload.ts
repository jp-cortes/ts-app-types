// Juan => [J,u,a,n] => string => string[]
// [J,u,a,n] => Juan => string[] => string


function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Juan');
// rtaArray.reverse();
//needs a valiadation otherwise will thorw error
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', 'Juan =>' ,rtaArray);

const rtaStr = parseStr(['J','u','a','n']);
// rtaStr.toLowerCase();
//needs a valiadation otherwise will thorw error
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr', "['J','u','a','n'] =>",rtaStr);
