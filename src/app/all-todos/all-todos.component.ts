import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { lastValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-todos',
  standalone: true,
  imports: [],
  templateUrl: './all-todos.component.html',
  styleUrl: './all-todos.component.scss'
})
export class AllTodosComponent implements OnInit {
  todos: any = [];
  error = '';
  constructor(private http: HttpClient) {

  }

  async ngOnInit(): Promise<void> {
    try {
      this.todos = await this.loadTodos();
      console.log(this.todos);
    } catch (e) {
      this.error = 'Fehler beim Laden!'
    }

  }

  loadTodos() {
    const url = environment.baseUrl + '/todos/';
    return lastValueFrom(this.http.get(url))
  }

}
