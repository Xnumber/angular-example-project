import { AfterViewInit, Component, Inject } from '@angular/core';
import { CustomizeFieldsAtRuntimeService, Employee } from './customize-fields-at-runtime.service';
import { ValueChangedEvent } from 'devextreme/ui/check_box';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Component({
  selector: 'app-customize-fields-at-runtime',
  templateUrl: './customize-fields-at-runtime.component.html',
  styleUrls: ['./customize-fields-at-runtime.component.scss']
})
export class CustomizeFieldsAtRuntimeComponent implements AfterViewInit {
  store!: CustomStore;
  selectOption: any;
  employee: Employee;

  isHomeAddressVisible: boolean | null | undefined;

  checkBoxOptions: any;

  phoneOptions: any[] = [];

  addPhoneButtonOptions: any;

  constructor(
    service: CustomizeFieldsAtRuntimeService,
    @Inject(HttpClient) httpClient: HttpClient
  ) {
    
    this.store = new CustomStore({
      key: 'id',
      byKey: (key) => {
          alert(key)
          // return httpClient.get("http://mydomain.com/MyDataService?id=" + key)
          //     .toPromise();
          return httpClient.get("https://dummyjson.com/products").pipe(
                  map((res: any) => res.products.filter((r: any) => r.id === key ))
                ).toPromise();
        },
        load: (loadOptins) => {
          alert('load')
          // return httpClient.get("http://mydomain.com/MyDataService?id=")
          //     .toPromise();
          return httpClient.get("https://dummyjson.com/products").pipe(
            map((res: any) => res.products)
          ).toPromise();
        }
    })
    this.selectOption = {
			// dataSource: [{id: 1, name: 'qqq'}, {id: 2, name: 'ppp'}],
			dataSource: {
        store: this.store,
        sort: 'title'
      },
			valueExpr: 'id',
			displayExpr: 'title',
      onValueChanged: this.onValueChangedSelect
		}

    this.employee = service.getEmployee();

    (window as any).formdata = this.employee;

    this.isHomeAddressVisible = true;

    this.phoneOptions = this.getPhonesOptions(this.employee.Phones);

    this.checkBoxOptions = {
      text: 'Show Address',
      value: true,
      onValueChanged: (e: ValueChangedEvent) => {
        this.isHomeAddressVisible = e.component.option('value');
      },
    };

    this.addPhoneButtonOptions = {
      icon: 'add',
      text: 'Add phone',
      onClick: () => {
        this.employee.Phones.push('');
        this.phoneOptions = this.getPhonesOptions(this.employee.Phones);
      },
    };
  }

  ngAfterViewInit(): void {}
  onValueChangedSelect = () => { 
    alert(123)
    this.isHomeAddressVisible = false;
  }
  getPhonesOptions(phones: any) {
    const options = [];
    for (let i = 0; i < phones.length; i++) {
      options.push(this.generateNewPhoneOptions(i));
    }
    return options;
  }

  generateNewPhoneOptions(index: number) {
    return {
      mask: '+1 (X00) 000-0000',
      maskRules: { X: /[01-9]/ },
      buttons: [{
        name: 'trash',
        location: 'after',
        options: {
          stylingMode: 'text',
          icon: 'trash',
          onClick: () => {
            this.employee.Phones.splice(index, 1);
            this.phoneOptions = this.getPhonesOptions(this.employee.Phones);
          },
        },
      }],
    };
  }
}