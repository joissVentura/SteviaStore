import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/model/product.model';
import { ProductsService } from '../../../core/services/products.service';
@Component({
  selector: 'app-product-todo',
  templateUrl: './product-todo.component.html',
  styleUrls: ['./product-todo.component.scss']
})
export class ProductTodoComponent implements OnInit {

  products: Product[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }
  clickProduct(id: number): void{
    console.log('El id es: ' + id);
  }
}
