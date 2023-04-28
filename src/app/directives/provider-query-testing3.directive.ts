import { Directive } from '@angular/core';
import { ProviderQueryTesting } from './provider-query-testing';

@Directive({
  selector: '[appProviderQueryTesting3]',
  providers: [{
    provide: ProviderQueryTesting,
    useExisting: ProviderQueryTesting3Directive
  }]
})
export class ProviderQueryTesting3Directive {
  t = 3
}
