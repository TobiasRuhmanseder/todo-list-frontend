import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AllTodosComponent } from './all-todos/all-todos.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'todos', component: AllTodosComponent}
];
