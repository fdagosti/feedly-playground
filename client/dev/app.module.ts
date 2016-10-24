import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {LandingComponent} from "./landing/landing.component";
import {FeedlySubsComponent} from "./subs/subscriptions.component";
import {LoginComponent} from "./auth/login.component";
import {FeedlyService} from "./common/services/feedly.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "./auth/authentication.service";

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      NgbModule.forRoot(),
    ],
   declarations: [
      AppComponent,
      LandingComponent,
      FeedlySubsComponent,
      LoginComponent,
    ],
    providers: [
      FeedlyService,
      AuthService,
    ],
    bootstrap: [
      AppComponent,
    ],
})
export class AppModule {}
