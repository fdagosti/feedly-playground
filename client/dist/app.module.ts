import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { TodoCmp }   from './todo/components/todo-cmp';
import { AppComponent }   from './app.component';
import { LandingComponent }   from './landing/landing.component';
import { FeedlySubsComponent }   from './subs/subscriptions.component';
import { LoginComponent }   from './auth/login.component';
import { TodoService }   from './todo/services/todo-service';
import { FeedlyService }   from './common/services/feedly.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      NgbModule.forRoot(),
    ],
   declarations: [
      AppComponent,
      TodoCmp,
      LandingComponent,
      FeedlySubsComponent,
      LoginComponent,
    ],
    providers: [
      TodoService,
      FeedlyService,
    ],
    bootstrap: [
      AppComponent,
    ],
})
export class AppModule {}
