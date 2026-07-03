import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

export interface Product {
  id: string;
  name: string;
  price: number;
}

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  create(product: CreateProductDto) {
    const newProduct: Product = {
      id: Date.now().toString(),
      ...product,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findById(id: string) {
    return this.products.find((p) => p.id === id);
  }
}