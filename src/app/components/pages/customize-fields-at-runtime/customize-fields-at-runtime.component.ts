import { AfterViewInit, Component } from '@angular/core';
import { CustomizeFieldsAtRuntimeService, Employee } from './customize-fields-at-runtime.service';
import { ValueChangedEvent } from 'devextreme/ui/check_box';

@Component({
  selector: 'app-customize-fields-at-runtime',
  templateUrl: './customize-fields-at-runtime.component.html',
  styleUrls: ['./customize-fields-at-runtime.component.scss']
})
export class CustomizeFieldsAtRuntimeComponent implements AfterViewInit {
  employee: Employee;

  isHomeAddressVisible: boolean | null | undefined;

  checkBoxOptions: any;

  phoneOptions: any[] = [];

  addPhoneButtonOptions: any;

  constructor(service: CustomizeFieldsAtRuntimeService) {
    this.employee = service.getEmployee();
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
