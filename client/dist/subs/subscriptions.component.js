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
var feedly_service_1 = require('../common/services/feedly.service');
var authentication_service_1 = require("../auth/authentication.service");
var FeedlySubsComponent = (function () {
    function FeedlySubsComponent(_feedly, _auth) {
        this._feedly = _feedly;
        this._auth = _auth;
        this.subs = [];
    }
    FeedlySubsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._auth.loginStateChanged$.subscribe(function (login) { return _this.loginStateChanged(); });
        if (this._auth.isLoggedIn()) {
            this._getAll();
        }
    };
    FeedlySubsComponent.prototype._getAll = function () {
        var _this = this;
        this._feedly
            .getSubscriptions()
            .then(function (subs) {
            _this.subs = subs;
        });
    };
    FeedlySubsComponent.prototype.loginStateChanged = function () {
        this.isLoggedIn = this._auth.isLoggedIn();
        if (this.isLoggedIn) {
            this._getAll();
        }
        else {
            this.subs = [];
        }
    };
    FeedlySubsComponent = __decorate([
        core_1.Component({
            selector: 'feedly-subs',
            template: "\n    <h1>FEEDLY Subscriptions</h1>\n    <ul [hidden]=\"!isLoggedIn\" class=\"list-group\">\n    <li *ngFor=\"let sub of subs\" class=\"list-group-item\">\n        {{sub.title}}\n     </li>\n    </ul>\n    <p class=\"lead\" [hidden]=\"isLoggedIn\">Please log in to display your subscriptions</p>\n  ",
        }), 
        __metadata('design:paramtypes', [feedly_service_1.FeedlyService, authentication_service_1.AuthService])
    ], FeedlySubsComponent);
    return FeedlySubsComponent;
}());
exports.FeedlySubsComponent = FeedlySubsComponent;
