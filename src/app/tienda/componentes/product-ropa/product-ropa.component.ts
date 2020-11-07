import { Component, OnInit } from '@angular/core';
import { RopaService } from '../../../core/services/ropa.service';
import { Product } from '../../../core/model/product.model';

@Component({
  selector: 'app-product-ropa',
  templateUrl: './product-ropa.component.html',
  styleUrls: ['./product-ropa.component.scss']
})
export class ProductRopaComponent implements OnInit {

  products: Product[] = [];
  constructor(private ropaService: RopaService) { }

  ngOnInit(): void {
    this.products = this.ropaService.getAllProducts();
  }
  clickProduct(id: number): void{
    console.log('El id es: ' + id);
  }


}
