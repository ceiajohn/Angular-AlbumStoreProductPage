import { Component, OnInit } from '@angular/core';

import { ProductService } from '../prodcut.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo;
  constructor(private _prodcutService: ProductService) { }

  ngOnInit() {
  	this._productService.getAlbum(1).suscribe(response => this.albumInfo = response);
  }

}
