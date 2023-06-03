import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { DevexpressTestingService } from 'src/app/services/devexpress-testing.service';
// https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/Angular/Light/
@Component({
  selector: 'app-devexpress-testing',
  templateUrl: './devexpress-testing.component.html',
  styleUrls: ['./devexpress-testing.component.scss']
})
export class DevexpressTestingComponent {
  dataSource: DataSource;
  inputValue: string = '';
  inputValue2: string = '';
  collapsed = false;

  contentReady = (e: any) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['EnviroCare']);
    }
  };

  update = () => {
    console.log(this.inputValue)
    this.inputValue2 = this.inputValue;
  }

  customizeTooltip = (pointsInfo: any) => ({ text: `${parseInt(pointsInfo.originalValue)}%` });

  constructor(service: DevexpressTestingService) {
    this.dataSource = service.getDataSource();
  }
}
