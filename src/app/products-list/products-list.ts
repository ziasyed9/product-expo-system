import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  imports: [NgStyle, DatePipe, CurrencyPipe],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css'
})
export class ProductsList  implements OnInit {
  title = 'Featured Products';

  products = [
  {
    title: 'SolarX Panel 500W',
    description: 'High-efficiency solar panel with a sleek design.',
    price: 299.99,
    date: 'Available from: 02-01-2025',
    availability: false,
    onSale: true
  },
  {
    title: 'EcoSmart Air Purifier',
    description: 'Compact air purifier with HEPA filter for clean indoor air.',
    price: 179.99,
    date: 'Available from: 04-15-2025',
    availability: true,
    onSale: false
  }];

  ngOnInit(): void {
    console.log('ProductsList component initialized');
  }

  viewDetails(): void {
    alert('Viewing product details for ' + this.products[0].title);
  }

}
