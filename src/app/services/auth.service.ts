import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  loginWithUsernameAndPassword(username: string, password: string) {
    const url = environment.baseUrl + "/login/";
    const body = {
      "username": username,
      "password": password
    };
    return lastValueFrom(this.http.post<LoginResponse>(url, body));
  }

}
// wird nur verwendet, da lastValueFrom nicht sauber arbeitet - in Zukunft mit Observables arbeiten
interface LoginResponse {
    email: string;
    token: string;
    user_id: number;
    // Weitere Eigenschaften falls notwendig
  }
