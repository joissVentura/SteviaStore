import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class RopaService {

  ropa: Product[] = [
    {
      id: '8',
      image: '../../../assets/images/ropa/beanie negra.jpg',
      title: 'Beanie negra',
      price: 1.80,
      description: 'Beanie negra'
    },
    {
      id: '9',
      image: '../../../assets/images/ropa/gorro.jpg',
      title: 'Chocoteja de chocolate blanca',
      price: 2.00,
      description: 'El gorrito del invierno'
    },
    {
      id: '10',
      image: '../../../assets/images/ropa/polera blanca.jpg',
      title: 'Polera blanca',
      price: 1.80,
      description: 'La real polera blanca'
    },
    {
      id: '11',
      image: '../../../assets/images/ropa/Polera_verde.jpg',
      title: 'Polera verde',
      price: 1.80,
      description: 'Las mejores poleras verdes'
    },
    {
      id: '12',
      image: '../../../assets/images/ropa/polera.jpg',
      title: 'Polera',
      price: 1.80,
      description: 'Una bonita polera'
    },
    {
      id: '13',
      image: '../../../assets/images/ropa/polo gris.jpg',
      title: 'Polo gris',
      price: 1.80,
      description: 'Un gran polo gris'
    },
    {
      id: '14',
      image: '../../../assets/images/ropa/polo negro.jpg',
      title: 'Polo negro',
      price: 1.80,
      description: 'Un elegante polo negro'
    },
    {
      id: '15',
      image: '../../../assets/images/ropa/polo_blanco.jpg',
      title: 'Polo blanco',
      price: 1.80,
      description: 'Un precioso polo blanco'
    },
    {
      id: '16',
      image: '../../../assets/images/ropa/polo.jpg',
      title: 'Un polo clásico',
      price: 1.80,
      description: 'Un polo clásico'
    }
  ];
  constructor() { }

  getAllProducts(){
    return this.ropa;
  }
  getProduct(id: String){
    return this.ropa.find(item => id === item.id);
  }
}
