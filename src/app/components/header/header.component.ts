import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titlePage: string = "ShopBig";
  menus: string[] = ["Home", "Product", "Contact"]
  constructor() { }

  ngOnInit(): void {
  }

}
