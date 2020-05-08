import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@shared/models/user';
import { tap } from 'rxjs/operators';
import { UserService } from '@shared/services/user.service';

@Injectable()
export class AppInitService {
  constructor(private httpClient: HttpClient, private userService: UserService) {}

  Init(): Promise<User> {
    return this.httpClient
      .get<User>('http://localhost:4200/assets/user.json')
      .pipe(
        tap((user: User) => {
          this.userService.setUser(user);
        })
      )
      .toPromise();
  }
}
