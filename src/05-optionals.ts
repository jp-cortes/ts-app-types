export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
    stock: stock || 10,
    isNew: isNew || true,
  }
}

//0 === false
//'' === false
//false === false

const p1 = createProduct(1, true, 12);
console.log(p1); //{ id: 1, stock: 12, isNew: true }

const p2 = createProduct(1); //
console.log(p2);//{ id: 1, stock: 10, isNew: true }

const p3 = createProduct(1, false, 0);
console.log(p3);//{ id: 1, stock: 10, isNew: true }

//example 2

export const createProduct2 = (
  id: string | number,
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  }
}

//this will not apply with the null operator
//0 === false
//'' === false
//false === false

const product1 = createProduct2(1, true, 12);
console.log(product1); //{ id: 1, stock: 12, isNew: true }

const product2 = createProduct2(1); //
console.log(product2);//{ id: 1, stock: 10, isNew: true }

const product3 = createProduct2(1, false, 0);
console.log(product3);//{ id: 1, stock: 0, isNew: false }



