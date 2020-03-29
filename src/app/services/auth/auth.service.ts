import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserProfile } from 'src/app/view-models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenKey = 'BHD_Token'

  constructor(private jwtHelperService: JwtHelperService) { }

  setToken(data): void {
    localStorage.setItem(this.tokenKey, JSON.stringify(data));
  }

  tokenExists() {
    if (this.getUserProfile() === null || undefined) {
      return false;
    }
    return true;
  }

  isTokenExpired(): boolean {
    if (this.getUserProfile() === null || undefined) {
      return false;
    }
    return this.jwtHelperService.isTokenExpired(this.getUserProfile().access_token);
  }

  getUserProfile() {
    return JSON.parse(localStorage.getItem(this.tokenKey));
  }
}
