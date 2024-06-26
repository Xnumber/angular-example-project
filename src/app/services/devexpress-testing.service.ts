import { Injectable } from '@angular/core';
import 'devextreme/data/odata/store';
import DataSource from 'devextreme/data/data_source';

@Injectable({
  providedIn: 'root'
})
export class DevexpressTestingService {

  constructor() { }
  getDataSource() {
    return new DataSource({
      store: {
        type: 'odata',
        url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
        key: 'Id',
        beforeSend(request) {
          const year = new Date().getFullYear() - 1;
          request.params.startDate = `${year}-05-10`;
          request.params.endDate = `${year}-5-15`;
        },
      },
    });
  }
}
