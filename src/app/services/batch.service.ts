import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class BactchService {
  constructor(
	private http: HttpClient
  ) {
    // this.log =  'better ' + this.loggerDependency.loggerDependency
  }

  dittoObservable = new Subject()
  dittoObservable$ = this.dittoObservable.asObservable()
  sent: boolean = false

  getData(forceUpdate?: boolean) {
	if (this.sent === false) {
		this.sent = true;
		this.http.get('https://pokeapi.co/api/v2/pokemon/ditto').subscribe(e => {
			this.dittoObservable.next(e);
		})
		return this.dittoObservable$;
	}
	
	if (forceUpdate) {
		this.http.get('https://pokeapi.co/api/v2/pokemon/ditto').subscribe(e => {
			this.dittoObservable.next(e);
		})
		return this.dittoObservable$;
	}
	
	// this.dittoObservable.next()
	// return this.http.get('https://pokeapi.co/api/v2/pokemon/ditto')
	return this.dittoObservable$;
  }
}