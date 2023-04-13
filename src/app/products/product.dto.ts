import { Product } from './product.model';

//Omit is an utility type  do as it name says omit the parameter we specify
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string;
}
//this is the opposite of Omit
//in this example we are telling to 'pick' the parameters we want
type example = Pick<Product, 'color' | 'description'>;

// 'partial' make optional  all parameter
export interface UpdateProductDto extends Partial<CreateProductDto> {}

//'required' make mandatory all arguments
type example2 = Required<Product>;

//does not allow to change
export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  //  tags: ReadonlyArray<string>; //allow  to reassign the array
  //+ readonly
  readonly tags: ReadonlyArray<string>; // does not allow  to reassign the array
}

type example3 = Readonly<Product>;
