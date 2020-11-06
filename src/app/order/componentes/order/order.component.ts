import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductsService } from '../../../core/services/products.service';
import { CartService } from '../../../core/services/cart.service';
import { Product } from '../../../core/model/product.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  total$: Observable<number>;
  totalPrice = 0;

  products$: Observable<Product[]>;

  displayedColumns: string[] = ['id', 'title', 'price', 'cantidad', 'priceT', 'actions'];
  constructor(
    private cartService: CartService,
    private productService: ProductsService
  ) {
    this.products$ = this.cartService.cart$;
    this.total$ = this.cartService.cart$.
      pipe(map(products => products.length));
  }

  ngOnInit(): void {
    this.calcularTotal();
  }

  deleteProduct(id: string): void{
    this.cartService.deleteProduct(id);
    this.calcularTotal();
  }
  deleteProductAll(id: string): void{
    this.cartService.deleteProductAll(id);
    this.calcularTotal();
  }
  addProduct(id: string): void{
    const product: Product = this.productService.getProduct(id);
    this.cartService.addCart(product);
    this.calcularTotal();
  }
  calcularTotal(): void {
    this.totalPrice = this.cartService.calcularTotal();
  }

}
