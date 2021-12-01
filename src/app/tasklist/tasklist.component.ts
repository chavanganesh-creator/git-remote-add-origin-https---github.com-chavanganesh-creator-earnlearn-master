import { Component, Input, OnInit } from '@angular/core';
import { TasklistconnectService } from '../service/tasklistconnect.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  constructor(private _taskListService:TasklistconnectService) { }
  @Input() window:any;
  @Input() windowSeconde:any;
  desider:boolean=true;

  taskListBean:any;
  ngOnInit(): void {
   
  }
  ngAfterContentInit(){
    this._taskListService.getDetail().subscribe(
      (response) => {
        this.taskListBean=response;
        console.log(this.taskListBean);
      }
    );
  }
  public getTaskDetail():any{
   return  null;
  }

  status: boolean = true;
  activeIndex:any='';
clickEvent(i:any){
  this.activeIndex=i;
    this.status = !this.status;       
}
editDetails(){
  this.desider=!this.desider;
 }
 submitResult(i:any,userItr:any){

 }
}
