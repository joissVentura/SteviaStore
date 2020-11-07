import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/model/product.model';
import { BebidasService } from '../../../core/services/bebidas.service';

@Component({
  selector: 'app-product-bebida',
  templateUrl: './product-bebida.component.html',
  styleUrls: ['./product-bebida.component.scss']
})
export class ProductBebidaComponent implements OnInit {

  products: Product[] = [];
  constructor(private bebidasService: BebidasService) { }

  ngOnInit(): void {
    this.products = this.bebidasService.getAllProducts();
  }
  clickProduct(id: number): void{
    console.log('El id es: ' + id);
  }

}
