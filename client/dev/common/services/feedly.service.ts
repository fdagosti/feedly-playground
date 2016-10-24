import {Inject, Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {AuthService} from "../../auth/authentication.service";

@Injectable()
export class FeedlyService {

  static PROXY: string = "https://cisco-itk-proxy.herokuapp.com/";
  static ENDPOINT: string = 'https://cloud.feedly.com/v3/subscriptions';

  constructor(@Inject(Http) private _http: Http, private _auth:AuthService){

  }

  getSubscriptions(): Promise<any>{
    let token = this._auth.getToken().token;

    let options = {
      headers: new Headers({
        "Authorization": "OAuth "+token
      })
    };

    return this._http.get(FeedlyService.PROXY + FeedlyService.ENDPOINT, options)
          .toPromise()
          .then(response => response.json());

  }

}
