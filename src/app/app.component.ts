import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';
import { Catalog } from './models/catalog.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appcya';
  http = inject(HttpClient);
  products : Product[] = [];
  catalogs : Catalog[] = [];
ngOnInit() {
  this.http.get<Product[]>('http://localhost:3001/getProducts')
  .subscribe((data) =>{
      this.products = data;
    });
  this.http.get<Catalog[]>('http://localhost:3001/Getcatalogs/')
  .subscribe((data) =>{
      console.log(data)
      this.catalogs = data;
    });
  }
}
