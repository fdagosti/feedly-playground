import {Component, OnInit} from "@angular/core";
import {AuthService} from "./authentication.service";

@Component({
  selector: 'feedly-login',
  template: `

<h2>Login</h2>
<div role="alert" [hidden]="!error" class="alert alert-danger">{{error}}</div>
<div *ngIf="profile">
  <p>Current Profile: {{profile.fullName}}</p>
  <button class="btn btn-primary" (click)="logout()" >Logout</button>
</div>
<form *ngIf="!profile" (submit)="register()">
    
  <div class="form-group">
    <label for="exampleInputPassword1">Dev Token</label>
    <input type="text" [(ngModel)]="token" name="token" class="form-control" id="exampleInputPassword1" placeholder="Development Token">
    <div class="form-text text-muted">You can request a dev token <a target="_blank" href="https://feedly.com/v3/auth/dev">here</a></div>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  `,
})
export class LoginComponent implements OnInit {
  private token: string;
  private profile;
  private error: string;

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    this.profile = this.auth.currentUser();
  }

  logout(){
    this.auth.logout();
    this.profile = null;
  }



  register() {
    this.auth.login(this.token).then(
      profile => {
        this.error = "";
        this.profile = profile;
      },
      error=>{
        if (error.errorCode === 401){
          this.error="wrong Authentication Token";
        }else{
          this.error = "Error";
        }
      });
  }


}
