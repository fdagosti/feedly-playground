import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  selector: 'feedly-login',
  template: `
    
    <h2>Login</h2>
    <form>
    <div class="form-group">
      <select class="form-control">
        <option>Francois D'Agostini</option>
        <option>Sophie La girafe</option>
        <option>Betty Boop</option>
      </select>
    </div>
    
    <div class="form-group">
      <label for="exampleInputPassword1">Feedly Dev Token</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      <div class="form-text text-muted">You can request a dev token <a target="_blank" href="https://feedly.com/v3/auth/dev">here</a></div>
    </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  `,
})
export class LoginComponent implements OnInit {

  constructor() {
    console.log("contructor");
  }

  ngOnInit() {
      
  }

}
