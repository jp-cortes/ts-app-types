//any does not make any verification
let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;

anyVar.doSomething();//do something is no real
anyVar.touppercase();

//unknown require a verfiication
let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {};

unknowVar.doSomething();//do something is no real
unknowVar.toUpperCase();//this case ask for verification  like in the example below
if (typeof unknowVar === 'string') {
  //unknowVar.touppercase();//now the error is in the method
  unknowVar.toUpperCase();
}

//example2
let isNewV2: boolean = unknowVar;//this case ask for verification  like in the example below
if (typeof unknowVar === 'boolean') {
  let isNewV2: boolean = unknowVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
