import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   constructor() { }
  isView:boolean=true;
  showView:string=' ';
  ngOnInit(): void {
  }
  
  updateOperation(){
    this.showView='update';
  }
  viewOperation(){
    this.showView='view';
  }
deletetOperation(){
    this.showView='delete';
}
addOperation(){
  this.showView='add';
}
}

