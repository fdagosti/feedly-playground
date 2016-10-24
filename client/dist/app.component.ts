import {Component} from "@angular/core";


@Component({
  selector: 'app',
  
  template: `
  <div class="container">

      <feedly-subs class="col-sm-8"></feedly-subs>

      
      <feedly-login class="col-sm-4"></feedly-login>
      
  </div>
  `

})
export class AppComponent{} 
