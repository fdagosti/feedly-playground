import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { TodoCmp }   from './todo/components/todo-cmp';
import { TodoService }   from './todo/services/todo-service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      NgbModule.forRoot(),
    ],
   declarations: [
      TodoCmp,
    ],
    providers: [
      TodoService,
    ],
    bootstrap: [
      TodoCmp,
    ],
})
export class AppModule {}
