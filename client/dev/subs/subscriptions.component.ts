import {Component, Inject, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {FeedlyService} from '../common/services/feedly.service';
import {AuthService} from "../auth/authentication.service";

@Component({
  selector: 'feedly-subs',
  template: `
    <h1>FEEDLY Subscriptions</h1>
    <ul [hidden]="!isLoggedIn" class="list-group">
    <li *ngFor="let sub of subs" class="list-group-item">
        {{sub.title}}
     </li>
    </ul>
    <p class="lead" [hidden]="isLoggedIn">Please log in to display your subscriptions</p>
  `,
})
export class FeedlySubsComponent implements OnInit {
  subs = [];
  isLoggedIn: boolean;
  constructor(private _feedly: FeedlyService, private _auth:AuthService) {
  }

  ngOnInit(){
    this._auth.loginStateChanged$.subscribe(login => this.loginStateChanged());

    if (this._auth.isLoggedIn()) {
      this._getAll();
    }
  }

  private _getAll():void {
    this._feedly
        .getSubscriptions()
        .then((subs) => {
          this.subs = subs;
        });
  }

  private loginStateChanged() {
    this.isLoggedIn = this._auth.isLoggedIn();
    if (this.isLoggedIn){
        this._getAll();
    }else{
      this.subs = [];
    }
  }
}
