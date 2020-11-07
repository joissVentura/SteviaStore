import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsAll: Product[] = [
    {
      id: '1',
      image: '../../../assets/images/postres/chocotejas/chocoteja_negra.png',
      title: 'Chocoteja de chocolate clásico',
      price: 2.00,
      description: 'Chocoteja de chocolate bitter con relleno de manjar a base de estevia'
    },
    {
      id: '2',
      image: '../../../assets/images/postres/chocotejas/chocoteja_blanca.png',
      title: 'Chocoteja de chocolate blanco',
      price: 2.50,
      description: 'Chocoteja de chocolate de leche blanco con relleno de manjar a base de estevia'
    },
    {
      id: '3',
      image: '../../../assets/images/postres/chocotones/Chocotones.png',
      title: 'Chocoton de chocolate clásico',
      price: 1.80,
      description: 'Cubierta de bombón de chocolate bitter, marmoleado con chocolate blanco y relleno de chocoteja de manjar y trozos de pecana endulzado con estevia. 3 unidades.'
    },
    {
      id: '4',
      image: '../../../assets/images/postres/bombones/bombon_blanco.jpg',
      title: 'Bombon blanco',
      price: 3.00,
      description: 'Bombón con cubierta de chocolate blanco relleno de chocolate de leche blanco y maní en trozos, endulzado a base de estevia'
    },
    {
      id: '5',
      image: '../../../assets/images/postres/bombones/bombon_blanco2.jpg',
      title: 'Bombones blancos',
      price: 3.00,
      description: 'Bombones de chocolate blanco y trozos de almendra, endulzados a base de estevia. 3 unidades.'
    },
    {
      id: '6',
      image: '../../../assets/images/postres/bombones/bombon_chocolate1.png',
      title: 'Bombones de chocolate clásico',
      price: 3.00,
      description: 'Bombones de chocolate bitter y trozos de almendra, endulzados a base de estevia. 3 unidades.'
    },
    {
      id: '7',
      image: '../../../assets/images/postres/bombones/bombones_chocolate.jpg',
      title: 'Bombones de chocolate de leche',
      price: 3.00,
      description: 'Bombones de chocolate de leche y trozos de pecana, endulzados a base de estevia. 3 unidades.'
    },
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
      description: 'Polera blanca con capucha de algodon talla oversize con logo de Chocostevia'
    },
    {
      id: '11',
      image: '../../../assets/images/ropa/Polera_verde.jpg',
      title: 'Polera verde',
      price: 50.00,
      description: 'Polera verde con capucha de algodon talla oversize con logo de Chocostevia '
    },
    {
      id: '12',
      image: '../../../assets/images/ropa/polera.jpg',
      title: 'Polera negra',
      price: 50.00,
      description: 'Polera negra con capucha de algodon talla oversize con logo de Chocostevia'
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
      title: 'Polo clásico',
      price: 29.90,
      description: 'Polo blanco de tela algodon con logo de Chocostevia.'
    }
    ,
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
    return this.productsAll;
  }
  getProduct(id: string){
    return this.productsAll.find(item => id === item.id);
  }
}
