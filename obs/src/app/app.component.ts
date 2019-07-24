import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  userActivated = false;
  userActivatedSbject = false;

  private activated: Subscription;
  private activatedSub: Subscription;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.activated = this.userService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    })

    this.activatedSub = this.userService.activatedSubject.subscribe(didActivate => {
      this.userActivatedSbject = didActivate;
    })
  }

  ngOnDestroy(): void {
    this.activated.unsubscribe();
    this.activatedSub.unsubscribe();
  }
}
