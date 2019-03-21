import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NewComponent } from '../new/new.component';

export interface DialogData {
  id:number,
  title:string,
  description:string,
  completed:boolean,
  user_id:number
}

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {

  private tasks:any;
  title: string;
  description: string;
  searchText:string;
  current_task:number;
  last_id:number;

  user:any;


  constructor(
    private apiService: ApiService,
    public dialog: MatDialog) { }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'))
      this.getTasks();
    }


  }

  getTasks(){
    this.apiService.getUserTasks(this.user.id).subscribe((data: {}) => {
      this.tasks = data;
      console.log(data)
    });
  }

  editTask(id){
    for(var i=0;i < this.tasks.length;i++){
      if(this.tasks[i].id == id){
        this.current_task = i;
        const dialogRef = this.dialog.open(NewComponent, {
          width: '450px',
          data: {id:id, title: this.tasks[i].title, user_id:this.user.id, description: this.tasks[i].description, completed: false}
        });

        dialogRef.afterClosed().subscribe(result => {
          if(result !== undefined){
            if(result.title != '' && result.description != ''){
              this.apiService.updateTask(id, result).subscribe((data: {}) => {

              })

              this.tasks[this.current_task].title =  result.title;
              this.tasks[this.current_task].description =  result.description;
              this.tasks[this.current_task].updated_at = Date.now();
            }
          }
        });
      }
    }

  }

  deleteTask(id){
    for(var i=0;i < this.tasks.length;i++){
      if(this.tasks[i].id == id){
        this.apiService.deleteTask(id).subscribe((data: {}) => {

        });
        this.tasks.splice(i,1);
      }
    }
  }

  openDialog(): void {


    const newDialogRef = this.dialog.open(NewComponent, {
      width: '450px',
      data: {id:'', title: this.title, description: this.description, completed: false}
    });

    newDialogRef.afterClosed().subscribe(result => {

        if(result !== undefined){
          if(result.title != '' && result.description != ''){
            result.user_id = this.user.id;
            this.apiService.newTask(result).subscribe((data: {}) => {
              this.last_id = data;
            })
            this.tasks.push({id:this.last_id, user_id: this.user.id, title: result.title,description: result.description,updated_at:Date.now(),completed: false});

          }
        }

    });
  }

  toggleTask(id){
    for(var i=0;i < this.tasks.length;i++){
      if(this.tasks[i].id == id){
        if(this.tasks[i].completed){
          this.tasks[i].completed = false;
          this.apiService.completeTask(id, this.tasks[i]).subscribe((data: {}) => {
            //console.log(data);
          })
        }else{
          this.tasks[i].completed = true;
          this.apiService.completeTask(id, this.tasks[i]).subscribe((data: {}) => {
            //console.log(data);
          })
        }
      }
    }
  }

}
