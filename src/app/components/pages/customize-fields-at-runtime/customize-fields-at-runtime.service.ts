import { Injectable } from '@angular/core';

export type Employee = {
  FirstName: string;

  LastName: string;

  Address: string;

  City: string;

  Phones: string[];
  select: number;
}

const employee : Employee = {
  FirstName: 'John',
  LastName: 'Heart',
  Address: '351 S Hill St., Los Angeles, CA',
  City: 'Atlanta',
  Phones: ['8005552797', '8005953232'],
  select: 2
};

@Injectable({
  providedIn: 'root'
})
export class CustomizeFieldsAtRuntimeService {

  constructor() { }
  getEmployee() : Employee {
    return employee;
  }
}