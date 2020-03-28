import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponse } from 'src/app/view-models/user-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getUserData(): Promise<UserResponse> {
    const url = `${environment.baseUrl}/user_data`;
    return this.http.get<UserResponse>(url).toPromise();
  }
}
