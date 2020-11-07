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
      price: 16.00,
      description: 'Gorra tipo beanie con logo de Chocostevia.'
    },
    {
      id: '9',
      image: '../../../assets/images/ropa/gorro.jpg',
      title: 'Gorra negra',
      price: 24.00,
      description: 'Gorra negra con visera con logo de Chocostevia.'
    },
    {
      id: '10',
      image: '../../../assets/images/ropa/polera blanca.jpg',
      title: 'Polera blanca',
      price: 50.00,
      description: 'Polera blanca con capucha de algodon talla oversize con logo de Chocostevia.'
    },
    {
      id: '11',
      image: '../../../assets/images/ropa/Polera_verde.jpg',
      title: 'Polera verde',
      price: 50.00,
      description: 'Polera verde con capucha de algodon talla oversize con logo de Chocostevia. '
    },
    {
      id: '12',
      image: '../../../assets/images/ropa/polera.jpg',
      title: 'Polera',
      price: 50.00,
      description: 'Polera negra con capucha de algodon talla oversize con logo de Chocostevia.'
    },
    {
      id: '13',
      image: '../../../assets/images/ropa/polo gris.jpg',
      title: 'Polo gris',
      price: 29.90,
      description: 'Polo básico de algodon gris con logo de Chocostevia.'
    },
    {
      id: '14',
      image: '../../../assets/images/ropa/polo negro.jpg',
      title: 'Polo negro',
      price: 29.90,
      description: 'Polo básico de algodon negro con logo de Chocostevia.'
    },
    {
      id: '15',
      image: '../../../assets/images/ropa/polo_blanco.jpg',
      title: 'Polo blanco',
      price: 35.00,
      description: 'Polo con cuello de camisa blanco de tela algodón con logo Chocostevia.'
    },
    {
      id: '16',
      image: '../../../assets/images/ropa/polo.jpg',
      title: 'Un polo clásico',
      price: 29.90,
      description: 'Polo blanco de tela algodon con logo de Chocostevia.'
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
