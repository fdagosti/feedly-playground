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
/**
 * Created by francoisdagostini on 24/10/2016.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var FeedlyToken = (function () {
    function FeedlyToken(fullName, token) {
        this.fullName = fullName;
        this.token = token;
    }
    return FeedlyToken;
}());
var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
        this.loginStateChanged$ = new core_1.EventEmitter();
    }
    AuthService.prototype.login = function (devToken) {
        var _this = this;
        var headers = {
            headers: new http_1.Headers({
                "Authorization": "OAuth " + devToken
            })
        };
        return this._http.get(AuthService.PROXY + AuthService.ENDPOINT + "profile", headers)
            .toPromise()
            .then(function (response) {
            _this.saveToken(response.json(), devToken);
            _this.loginStateChanged$.emit("login");
            return _this.currentUser();
        }).catch(this.handleError);
    };
    AuthService.prototype.saveToken = function (profile, devToken) {
        var localStorageToken = {
            fullName: profile.fullName,
            token: devToken
        };
        window.localStorage["feedly-playground-token"] = JSON.stringify(localStorageToken);
    };
    AuthService.prototype.getToken = function () {
        var t = window.localStorage["feedly-playground-token"];
        if (t) {
            return JSON.parse(t);
        }
    };
    AuthService.prototype.isLoggedIn = function () {
        var token = this.getToken();
        return token != undefined;
    };
    AuthService.prototype.logout = function () {
        window.localStorage.removeItem("feedly-playground-token");
        this.loginStateChanged$.emit("logout");
    };
    AuthService.prototype.handleError = function (loginError) {
        console.log("error ", loginError);
        return Promise.reject(loginError.json());
    };
    AuthService.prototype.currentUser = function () {
        var token = this.getToken();
        if (token) {
            return {
                fullName: token.fullName
            };
        }
    };
    AuthService.PROXY = "https://cisco-itk-proxy.herokuapp.com/";
    AuthService.ENDPOINT = 'https://cloud.feedly.com/v3/';
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
