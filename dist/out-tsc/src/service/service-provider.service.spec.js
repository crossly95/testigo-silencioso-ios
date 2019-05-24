import { TestBed } from '@angular/core/testing';
import { ServiceProviderService } from './service-provider.service';
describe('ServiceProviderService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ServiceProviderService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=service-provider.service.spec.js.map