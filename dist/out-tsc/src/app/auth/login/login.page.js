import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceProviderService } from '../../../service/service-provider.service';
//import { AuthService } from '../auth.service';
var LoginPage = /** @class */ (function () {
    function LoginPage(/*private  authService: AuthService*/ router, service) {
        this.router = router;
        this.service = service;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    /*login(form) {
        /*this.authService.login(form.value).subscribe((res) => {
        this.router.navigateByUrl('home');
      });
      console.log(form.value.user, form.value.pass);
      this.service.Loggin(form.value.user, form.value.pass).subscribe(
        (response) => {
          console.log(response);
      },
        error => console.log(error)
      );
  }*/
    LoginPage.prototype.login = function (form) {
        var _this = this;
        this.presentLoading().then(function () {
            _this.service.Loggin(form.value.user, form.value.pass).subscribe(function (response) {
                console.log(response);
                _this.dismissLoading();
                _this.dismissLoading().then(function () {
                    _this.responseObj = res;
                });
            }, function (error) { return console.log(error); });
        });
    };
    LoginPage.prototype.presentLoading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                translucent: true
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        return [4 /*yield*/, this.loader.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.dismissLoading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loader.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ServiceProviderService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map