import { Component, OnInit } from '@angular/core';
import { UserService } from '@shared/services/user.service';
import { User } from '@shared/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user$: Observable<User>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user$ = this.userService.user$;
  }
}
