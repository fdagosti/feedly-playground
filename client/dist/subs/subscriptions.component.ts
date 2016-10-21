import {Component, Inject, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {FeedlyService} from '../common/services/feedly.service';

@Component({
  selector: 'feedly-subs',
  template: `
    <h1>FEEDLY Subs</h1>
    <ul class="list-group">
    <li *ngFor="let sub of subs" class="list-group-item">
        {{sub.title}}
     </li>
    </ul>
  `,
})
export class FeedlySubsComponent implements OnInit {
  subs = [];

  constructor(private _feedly: FeedlyService) {
  }

  ngOnInit() {
    this._getAll();
  }

  private _getAll():void {
    this._feedly
        .getSubscriptions()
        .then((subs) => {
          this.subs = subs;
        });
  }

}
