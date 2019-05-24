import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServiceProviderService } from '../../../service/service-provider.service';
import { IonicModule } from '@ionic/angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginPage } from './login.page';
var routes = [
    {
        path: '',
        component: LoginPage
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                HttpClientModule,
                HttpModule,
                RouterModule.forChild(routes)
            ],
            declarations: [LoginPage],
            providers: [
                ServiceProviderService
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());
export { LoginPageModule };
//# sourceMappingURL=login.module.js.map