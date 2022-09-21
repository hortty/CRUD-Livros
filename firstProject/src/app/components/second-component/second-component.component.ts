import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  idades: number[] = [0,1,2,3,4,5];
  @Input() name: string = "";
  flag: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  showMessage(): void{
    this.flag = !this.flag;
  }

}
