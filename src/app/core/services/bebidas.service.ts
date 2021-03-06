import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class BebidasService {

  bebidas: Product[] = [
    {
      id: '17',
      image: '../../../assets/images/bebidas/bebida-manzana.png',
      title: 'Bebida de manzana',
      price: 2.00,
      description: 'Bebida de manzana a base de estevia'
    },
    {
      id: '18',
      image: '../../../assets/images/bebidas/bebida-pera.png',
      title: 'Bebida de pera',
      price: 2.00,
      description: 'Bebida de pera a base de estevia'
    },
    {
      id: '19',
      image: '../../../assets/images/bebidas/bebida-pina.png',
      title: 'Bebida de piña',
      price: 2.00,
      description: 'Bebida de piña a base de estevia'
    }
  ];
  constructor() { }

  getAllProducts(){
    return this.bebidas;
  }
  getProduct(id: string){
    return this.bebidas.find(item => id === item.id);
  }
}
