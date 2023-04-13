export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
};

export type User = {
  username: string,
  role: ROLES,
};

//use examples
const nickname: User = {
  username: 'alias',
  role: ROLES.ADMIN
};

//example 2
//by default give a number to each item from starting from zero
enum PrintMedia {
  Newspaper,//0
  Newsletter,//1
  Magazine,//2
  Book,//3
}
console.log(PrintMedia.Book)//3

function getPrintMediaCode(mediaName:string): number {
  if (mediaName === 'newsletter') {
      return 5;
  }
  return 0
}

//this will throw an error
enum PrintMedia1 {
  Newsletter = getPrintMediaCode('newsletter'),
  //Newspaper, // Error: Enum member must have initializer
  //Book,
  Magazine = Newsletter * 3,
}


//this is how suppouse to be


enum PrintMedia2 {
  Newspaper,
  Book,
  Newsletter = getPrintMediaCode('newsletter'),
  Magazine = Newsletter * 3
}
// or
enum PrintMedia3 {
  Newsletter = getPrintMediaCode('newsletter'),
  Magazine = Newsletter * 3,
  Newspaper = 0,
  Book,
}

//example 3
//heterogeneous
//Heterogeneous enums are enums that contain both string and numeric values.
enum Status {
  Active = 'ACTIVE',
  Deactivate = 1,
  Pending
}
