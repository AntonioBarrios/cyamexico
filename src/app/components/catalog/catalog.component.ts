import { Component, Input } from '@angular/core';
import { Catalog } from '../../models/catalog.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  @Input () catalog!: Catalog;
}

