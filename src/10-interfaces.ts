//type works mostly with pimitive values
type Sizes = 'S' | 'M' | 'L' | 'XL';

type userId = string | number;

//interface works like  type with the difference you must send a body
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90
});

const addProduct = (data: Product) => {
  products.push(data);
}
