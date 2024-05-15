import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { combineLatest, delay, forkJoin, interval, map, mapTo, merge, mergeAll, mergeMap, Observable, of, take, zip } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) {
  }
  
  ngOnInit(): void {
    // const myPromise = (val: any) =>
    //   new Promise(resolve =>
    //     setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
    //   );
    
    /*
      当所有 observables 完成时，将每个 observable 
      的最新值作为数组发出
    */

    // const observables = [this.getObserve1(), this.getObserve2()]

    // const o = merge(...observables)
    // o.subscribe(res => { console.log(res)})
  }
  
  getObserve1(): Observable<any> {
    console.log("get 1")
    return this.http.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .pipe(delay(1000))
    
  }
  // getObserve2(): Observable<any> {
    // console.log("get 2")
    // return this.http.get('https://pokeapi.co/api/v2/pokemon-species/aegislash')
  // }


}