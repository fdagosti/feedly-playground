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
var core_1 = require("@angular/core");
var authentication_service_1 = require("./authentication.service");
var LoginComponent = (function () {
    function LoginComponent(auth) {
        this.auth = auth;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.profile = this.auth.currentUser();
    };
    LoginComponent.prototype.logout = function () {
        this.auth.logout();
        this.profile = null;
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        this.auth.login(this.token).then(function (profile) {
            _this.error = "";
            _this.profile = profile;
        }, function (error) {
            if (error.errorCode === 401) {
                _this.error = "wrong Authentication Token";
            }
            else {
                _this.error = "Error";
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'feedly-login',
            template: "\n\n<h2>Login</h2>\n<div role=\"alert\" [hidden]=\"!error\" class=\"alert alert-danger\">{{error}}</div>\n<div *ngIf=\"profile\">\n  <p>Current Profile: {{profile.fullName}}</p>\n  <button class=\"btn btn-primary\" (click)=\"logout()\" >Logout</button>\n</div>\n<form *ngIf=\"!profile\" (submit)=\"register()\">\n    \n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Dev Token</label>\n    <input type=\"text\" [(ngModel)]=\"token\" name=\"token\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Development Token\">\n    <div class=\"form-text text-muted\">You can request a dev token <a target=\"_blank\" href=\"https://feedly.com/v3/auth/dev\">here</a></div>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>\n  ",
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
