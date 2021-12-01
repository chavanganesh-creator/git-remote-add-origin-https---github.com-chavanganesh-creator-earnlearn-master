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
  showcase:any;
  param:any;
  windowHider:boolean=true;
  windowHiderSeconde:string='flop';
  showcaseStudent:boolean=true;
  showcaseSupervisor:boolean=false;
  showcaseTask:string='task';
  ngOnInit(): void {
  }
  ngAfterContentInit(){
    
  }
  onboard(param:any){
    if(param=='student')
      this.showcase='student';
    else if(param=='supervisor')
        this.showcase='supervisor';
    else if(param=='tasklist'){
        this.showcase='tasklist';
        this.windowHiderSeconde='flip';
    }
  }
  onboardSupervisor(){
    this.showcaseSupervisor;
   }
  onboardStudent(){
    this.showcaseStudent =!this.showcaseStudent;
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

