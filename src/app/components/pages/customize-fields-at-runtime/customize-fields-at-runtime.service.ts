import { Injectable } from '@angular/core';

export type Employee = {
  FirstName: string;

  LastName: string;

  Address: string;

  City: string;

  Phones: string[];
  select: number;
  s1: number;
  s2: number;
  s3: number;
  s4: number;
  s5: number;
  s6: number;
}

const employee : Employee = {
  FirstName: 'John',
  LastName: 'Heart',
  Address: '351 S Hill St., Los Angeles, CA',
  City: 'Atlanta',
  Phones: ['8005552797', '8005953232'],
  select: 2,
  s1: 1,
  s2: 2,
  s3: 3,
  s4: 4,
  s5: 5,
  s6: 6,
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