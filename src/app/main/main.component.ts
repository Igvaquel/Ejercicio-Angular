import { Component } from '@angular/core';

type Product = {
  name:string,
  price:number
}



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {


  products: Product[] = [
    {
      name:'Detergente',
      price:100
    },
    {
      name:'Shampoo',
      price:150
    },
    {
      name:'Fideos',
      price:120
    },
    {
      name:'Jabon',
      price:80
    },
    {
      name:'Mayonesa',
      price:100
    }
  ]
  displayedColumns: string[] = ['name', 'price'];
  dataSource = this.products;

  show = true;
}
