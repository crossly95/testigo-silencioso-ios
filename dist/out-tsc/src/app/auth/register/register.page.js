import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from '../auth.service';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(/*private  authService: AuthService*/ router) {
        this.router = router;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.register = function (form) {
        /*this.authService.register(form.value).subscribe((res) => {
          this.router.navigateByUrl('home');
        });*/
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map