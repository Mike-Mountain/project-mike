import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  user,
  UserCredential
} from '@angular/fire/auth';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private user$: Observable<User | null> = user(this.auth);

  createUserWithEmailAndPassword(email: string, password: string): Observable<User> {
    return from(createUserWithEmailAndPassword(this.auth, email, password))
      .pipe(map((credentials: UserCredential) => credentials.user));
  }

  signInWithEmailAndPassword(email: string, password: string): Observable<User> {
    return from(signInWithEmailAndPassword(this.auth, email, password))
      .pipe(map((credentials: UserCredential) => credentials.user));
  }

  getUser(): Observable<User | null> {
    return this.user$;
  }


}
