/**
 * Created by francoisdagostini on 24/10/2016.
 */
import {Inject, Injectable, EventEmitter} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

class FeedlyToken{

  constructor(public fullName:string, public token: string){}
}

@Injectable()
export class AuthService {

  static PROXY: string = "https://cisco-itk-proxy.herokuapp.com/";
  static ENDPOINT: string = 'https://cloud.feedly.com/v3/';

  // Francois Feedly dev token (for debug purpose)
  //AwQuqrGS0AFsZM0khw4qGM8awQ0p_BM1luK3jpNwWj-2vWIJKXk8j1ChTZXwJrssbflC6zDimaeto0qJpHQ6HYidG_qv7DpErLsjChapRKLQ5b26mVlWqzOWvNib1oul6qN4oenYEdMqW9rwkLDkvIPPoQJH7LQNOiwcuPzL0CUJmfQBcY-lS7cuXtf0dXXtt0OBpkixoPFec3d-34ZoCGGX:feedlydev
  public loginStateChanged$: EventEmitter<string>;

  constructor(private _http: Http){
    this.loginStateChanged$ = new EventEmitter();
  }

  login(devToken:string): Promise<any>{

    let headers = {
      headers: new Headers({
          "Authorization": "OAuth "+devToken
      })
    };

    return this._http.get(AuthService.PROXY + AuthService.ENDPOINT+"profile", headers)
      .toPromise()
      .then(response => {
        this.saveToken(response.json(), devToken);
        this.loginStateChanged$.emit("login");
        return this.currentUser();
      }).catch(this.handleError);
  }

  private saveToken(profile: any, devToken: string) {
    let localStorageToken = {
      fullName: profile.fullName,
      token: devToken
    };
    window.localStorage["feedly-playground-token"] = JSON.stringify(localStorageToken);
  }

  getToken():FeedlyToken{
    let t = window.localStorage["feedly-playground-token"];
    if (t){
      return JSON.parse(t) as FeedlyToken;
    }
  }

  isLoggedIn(){
    let token = this.getToken();
    return token != undefined;
  }

  logout(){
    window.localStorage.removeItem("feedly-playground-token");
    this.loginStateChanged$.emit("logout");
  }

  private handleError(loginError: Response) {
    return Promise.reject(loginError.json());
  }

  currentUser(){
    let token = this.getToken();
    if (token){
      return {
        fullName: token.fullName
      };
    }
  }

}
