import { map, Observable } from 'rxjs';
import { TodoListPushService } from './../../services/todo-list-push/todo-list-push.service';
import { TodoListService } from './../../services';
import { TodoItem } from './../../interfaces/todo-item.interface';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  public myArray: TodoItem[]= []
  public myName : string = 'Caique'


  public readonly items$ : Observable<TodoItem[]> = this.todoLisPushService.items;
  public readonly itemCount$: Observable<number> = this.todoLisPushService.items.pipe(map(value => value.length))
//[ngClass]
public isBlue:boolean = true;
public isRed:boolean = false;


//switch
public switchCondition: number = 1 ;

  public showItems: boolean = false ;

  // TESTE
  public showMessage : boolean = false;

  constructor(private TodoListService: TodoListService ,
    private todoLisPushService : TodoListPushService,
    private router: Router) { }

  ngOnInit(): void {
    // logica para buscar os todo items
    // this.myArray = this.TodoListService.getItems()

    // this.TodoListService.getItemsAsync().subscribe(responce => {
      //   this.myArray = responce
      //   this.showItems = true
      // })
    this.onGetItems()
    }
    onGetItems():void{

      this.todoLisPushService.getItems()
  }

  //Cria nova tarefa
  onCreateNewTodo():void{
   this.router.navigateByUrl('/my-form')

  }


  addToMyArrray() {
    // this.myArray.push(5)
  }



  onCardClick(item: TodoItem){
    // this.TodoListService.deleteItem(item.id)
    // this.TodoListService
    // .deleteItemAsync(item)
    // .pipe(
    //   switchMap(() => this.TodoListService.getItemsAsync()))
    // .subscribe(response => this.myArray = response)

    this.todoLisPushService.deleteItem(item)
  }

  // soma(value1: number, value2: number): void {
  //   const numb : number = 1 ;
  //   const string : string = "String";
  //   const bool: boolean = true;
  //   const unknown: unknown = ''
  // }

  onaddCondition():void{
    this.switchCondition++
  }

  onToggleBlue() :void{
    this.isBlue = !this.isBlue
  }
  onToggleRed() :void{
    this.isRed = !this.isRed
  }

  onSeePipes(): void {
    this.router.navigateByUrl('/pipes-examples')
  }
}
