import { Product } from '../../../core/model/product.model';
import { CartService } from '../../../core/services/cart.service';
import {Component, Input, Output, EventEmitter,
  OnInit} from '@angular/core';
  
@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor(private cartService: CartService){
  }
  ngOnInit(){

  }
  addCart(): void{
      this.cartService.addCart(this.product);
  }
}
