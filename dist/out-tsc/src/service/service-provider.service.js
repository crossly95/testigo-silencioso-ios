import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
var ServiceProviderService = /** @class */ (function () {
    function ServiceProviderService(http) {
        this.http = http;
        this.api = this.url();
    }
    ServiceProviderService.prototype.url = function () {
        return 'http://201.217.211.116/sesion.php';
    };
    ServiceProviderService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    };
    ServiceProviderService.prototype.Loggin = function (user, pass) {
        var datos = {
            numid: user,
            password: pass
        };
        console.log(datos);
        var httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.api, datos, httpOptions);
    };
    ServiceProviderService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ServiceProviderService);
    return ServiceProviderService;
}());
export { ServiceProviderService };
//# sourceMappingURL=service-provider.service.js.map