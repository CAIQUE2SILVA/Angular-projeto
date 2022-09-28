
import { TodoItem } from 'src/app/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private myList : TodoItem[] = [



  ]

   private rootUrl: string = 'http://localhost:3000'

  constructor(private httpClient : HttpClient) { }

  public getItemsASync(): Observable <TodoItem[]> {
    // endereço de  onde buscar
    const url = `${this.rootUrl}/items`

    //utlizando o http para cirar
    // a instruçao de como buscar a informaçao
    // devolvendo essa instruçao para quem estiver consumindo o service
    return this.httpClient.get<TodoItem[]>(url)
  }

  public getItems(): TodoItem[] {
    return this.myList
  }

  public deleteItemAsync(item: TodoItem): Observable<any> {
    const url = `${this.rootUrl}/items/${item.id}`

    return this.httpClient.delete(url)
  }


  public deleteItem(id:number):TodoItem[]{
    const index = this.myList.findIndex(el => el .id === id)

    this.myList.splice(index,1)
    return this.myList
  }
}
