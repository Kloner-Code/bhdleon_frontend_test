import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserProfile } from 'src/app/view-models/user-profile';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {  }

  public login(user: User): Promise<UserProfile> {
    const url = `${environment.baseUrl}/sign_in`;
    return this.http.post<UserProfile>(url, user).toPromise();
  }
}
