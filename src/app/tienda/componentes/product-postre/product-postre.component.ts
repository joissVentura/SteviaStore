import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/model/product.model';
import { PostresService } from '../../../core/services/postres.service';

@Component({
  selector: 'app-product-chocotejas',
  templateUrl: './product-postre.component.html',
  styleUrls: ['./product-postre.component.scss']
})
export class ProductPostreComponent implements OnInit {

  products: Product[] = [];
  constructor(private postresService: PostresService) { }

  ngOnInit(): void {
    this.products = this.postresService.getAllProducts();
  }
  clickProduct(id: number): void{
    console.log('El id es: ' + id);
  }

}
