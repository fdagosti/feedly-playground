import {Inject, Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FeedlyService {
  
  static ENDPOINT: string = 'http://cloud.feedly.com/v3/subscriptions';
  private feedlyToken = "AwQuqrGS0AFsZM0khw4qGM8awQ0p_BM1luK3jpNwWj-2vWIJKXk8j1ChTZXwJrssbflC6zDimaeto0qJpHQ6HYidG_qv7DpErLsjChapRKLQ5b26mVlWqzOWvNib1oul6qN4oenYEdMqW9rwkLDkvIPPoQJH7LQNOiwcuPzL0CUJmfQBcY-lS7cuXtf0dXXtt0OBpkixoPFec3d-34ZoCGGX:feedlydev"
  private headers = new Headers({"Authorization": "OAuth "+this.feedlyToken});

  constructor(@Inject(Http) private _http: Http){

  }

  getSubscriptions(): Promise<any>{
    console.log("ASKING Subscriptions");

    return this._http.get(FeedlyService.ENDPOINT, {headers: this.headers})
          .toPromise()
          .then(response => response.json());

  }

}
