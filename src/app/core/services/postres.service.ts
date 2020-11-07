import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class PostresService {

  postres: Product[] = [
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
    }
  ];
  constructor() { }

  getAllProducts(){
    return this.postres;
  }
  getProduct(id: String){
    return this.postres.find(item => id === item.id);
  }
}
