import { inject, Injectable } from '@angular/core';
import {BehaviorSubject, from, Observable} from "rxjs";
import {Employee} from "../model/employee";
import {Firestore, collection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees$: BehaviorSubject<readonly Employee[]> = new BehaviorSubject<readonly Employee[]>([]);

  firestore = inject(Firestore);


  get $(): Observable<readonly Employee[]> {
    return this.employees$;
  }

  addEmployee(employee: Employee) {
    this.employees$.next([...this.employees$.getValue(), employee]);

    return true;
  }
}
