//parameters by default
export const createProduct2 = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return {
    id,
    stock,
    isNew,
  }
}

const product1 = createProduct2(1, true, 12);
console.log(product1); //{ id: 1, stock: 12, isNew: true }

const product2 = createProduct2(1); //
console.log(product2);//{ id: 1, stock: 10, isNew: true }

const product3 = createProduct2(1, false, 0);
console.log(product3);//{ id: 1, stock: 0, isNew: false }

