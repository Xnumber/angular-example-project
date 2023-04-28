import { Directive, OnChanges, Input, SimpleChanges, OnInit } from '@angular/core';
import { ProviderQueryTesting } from './provider-query-testing';

@Directive({
  selector: '[appProviderQueryTesting2], .query',
  providers: [{
    provide: ProviderQueryTesting,
    useExisting: ProviderQueryTesting2Directive
  }]
})
export class ProviderQueryTesting2Directive implements OnChanges, OnInit{
  t = 2;
  @Input() name!: string;
  ngOnInit(): void {
    console.log("ProviderQueryTesting2Directive: name", this.name)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("name:ProviderQueryTesting2Directive", changes)
  }
}
