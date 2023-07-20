import { HttpClient } from '@angular/common/http';
import { Component, Inject, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { Column, RowPreparedEvent, SavingEvent } from 'devextreme/ui/data_grid';
import { Item, SimpleItem } from 'devextreme/ui/form';
import { map } from 'rxjs';
import { DevexpressTestingService } from 'src/app/services/devexpress-testing.service';
// https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/Angular/Light/
@Component({
  selector: 'app-devexpress-testing',
  templateUrl: './devexpress-testing.component.html',
  styleUrls: ['./devexpress-testing.component.scss']
})
export class DevexpressTestingComponent {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;   
  dataSource: DataSource;
  inputValue: string = '';
  inputValue2: string = '';
  collapsed = false;
  bVisible = true;
  lookupDataSource: any;
  cVisible = true;
  dVisible = true;
  columns = ['a', 'b', 'c'];
  constructor(
    service: DevexpressTestingService,
    @Inject(HttpClient) httpClient: HttpClient
  ) {
    this.dataSource = service.getDataSource();
      this.lookupDataSource = {
        store: new CustomStore({
            key: "id",
            loadMode: "raw",
            load: () => {
                // Returns an array of objects that have the following structure:
                // { id: 1, name: "John Doe" }
                return httpClient.get("https://dummyjson.com/products").pipe(
                  map((res: any) => res.products)
                ).toPromise();
            }
        }),
        sort: "name"
    };
  }
  // constructor(@Inject(HttpClient) httpClient: HttpClient){
  // }
  // https://js.devexpress.com/Documentation/22_2/Guide/UI_Components/DataGrid/How_To/Dynamically_Change_Form_Item_Properties_in_the_Editing_State/
  customizeItem = (item: Column) => {
    alert('123')
    if (item && item.dataField === 'a') {
      const gridInstance = this.dataGrid.instance;
      const editRowKey = gridInstance.option('editing.editRowKey');
      const rowIndex = gridInstance.getRowIndexByKey(editRowKey);
      // item.visible = gridInstance.cellValue(rowIndex, "AddressRequired");
    }
    const gridInstance = this.dataGrid.instance;
    const editRowKey = gridInstance.option('editing.editRowKey');
    const rowIndex = gridInstance.getRowIndexByKey(editRowKey);
    console.log('gridInstance.cellValue(rowIndex, "a");', gridInstance.cellValue(rowIndex, "a"))
    // console.log(item)
    if (item.dataField === 'b' && gridInstance.hasEditData()) {
      if (gridInstance.cellValue(rowIndex, "a") > 10) {
        item.visible = false;
      }
    }
  }

  onInitialized() {
    alert('onInitialized')
  }

  onSaving(e: SavingEvent) {
    console.log(e)
  }

  setSelectCellValue = (newData: any, value: any, currentRowData: any) => {
    newData.a = value;
    this.dVisible = false;
    alert('set')
  };

  onValueChangedSelect = () => {
    alert('onValueChangedSelect')
    // this.bVisible = false
  }

  onValueChangedInput = () => { 
    alert('onValueChangedInput')
    this.cVisible = false;
  }

  form_fieldDataChanged(e: any) {
    console.log('onFieldDataChanged', e)
  }

  // onSetValue(e: any) {
  //   console.log('onSetValue')
  //   this.isFVisible = false
  //   console.log('onSetValue', this.isFVisible)
  // }

  setCellValue (newData: any, value: any, currentRowData: any) {
    newData.a = value;
    newData.b = 100;
  }

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

  
  onRowPrepared(e: RowPreparedEvent) {}
  
  // customizeItem(e: any) {
  //   console.log('customizeItem')
  //   console.log(e)
  // }

  employee = {
    firstName: "John",
    lastName: "Heart",
    position: "CEO",
    officeNo: 901
  }
}
