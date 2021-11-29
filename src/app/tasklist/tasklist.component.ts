import { Component, OnInit } from '@angular/core';
import { TasklistconnectService } from '../service/tasklistconnect.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  constructor(private _taskListService:TasklistconnectService) { }
  taskListBean:any;
  ngOnInit(): void {
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
}
