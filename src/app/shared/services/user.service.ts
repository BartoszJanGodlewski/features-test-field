import { Injectable } from '@angular/core';
import { User } from '@shared/models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
  private userSource = new BehaviorSubject<User>(null);
  user$ = this.userSource.asObservable();

  constructor() {}

  setUser(user: User) {
    this.userSource.next(user);
  }
}
