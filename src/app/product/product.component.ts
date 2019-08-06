import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Class/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @Input() product :Product;
  //  packageTitle ="test";

  // product = new Product('SSC','test');

  constructor() { }

  ngOnInit() {
  }

  // onMoreClick(data?:any)
  // {
  //   this.packageTitle = data;
  // }

}
