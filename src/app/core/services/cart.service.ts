import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();
  constructor() { }

  addCart(product: Product): void {
    this.products = [... this.products, product];
    this.cart.next(this.products);
  }

  // ELIMINA TODO
  deleteProductAll(id: any): void {
    console.log(this.products);
    let productsNew: Product[] = [];
    this.products.forEach((producto) => {
      if (producto.id !== id) {
        productsNew = [...productsNew, producto];
      }
    });
    this.products = productsNew; 
    this.cart.next(this.products);
  }

  // ELIMINAR PRODUCTO
  deleteProduct(id: string): void {
    const ind = this.products.indexOf(this.products.find(producto => producto.id === id));

    let arr: Product[] = [];
    this.products.forEach((product, index) => {
      if (index !== ind) {
        arr = [...arr, product];
      }
    });
    this.products = arr;
    this.cart.next(this.products);
  }

  // TOTAL PRECIO
  calcularTotal(): number {
    let total = 0;
    for (const product of this.products) {
      total = total + product.price;
    }
    return total;
  }
}
