"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var landing_component_1 = require('./landing/landing.component');
var subscriptions_component_1 = require('./subs/subscriptions.component');
var login_component_1 = require('./auth/login.component');
var feedly_service_1 = require('./common/services/feedly.service');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var authentication_service_1 = require("./auth/authentication.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ng_bootstrap_1.NgbModule.forRoot(),
            ],
            declarations: [
                app_component_1.AppComponent,
                landing_component_1.LandingComponent,
                subscriptions_component_1.FeedlySubsComponent,
                login_component_1.LoginComponent,
            ],
            providers: [
                feedly_service_1.FeedlyService,
                authentication_service_1.AuthService,
            ],
            bootstrap: [
                app_component_1.AppComponent,
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
