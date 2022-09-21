import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  home_var: string = "HOME";
  offer_var: string = "OFFER";
  shop_var: string = "SHOP";

  constructor() { }

  ngOnInit(): void {
  }

}
