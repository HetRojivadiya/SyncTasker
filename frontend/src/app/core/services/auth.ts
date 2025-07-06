import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  isAdmin(): boolean {
    const role = localStorage.getItem('role');
    return role === 'admin';
  }
}
