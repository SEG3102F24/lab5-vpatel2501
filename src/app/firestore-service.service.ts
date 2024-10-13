import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentChangeAction, DocumentReference} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

import { Employee } from './model/employee';


@Injectable({
  providedIn: 'root'
})
export class FormDbService {

  constructor(private firestore: AngularFirestore) { }

  getAddresses(): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore
      .collection('allForm')
      .doc('users')
      .collection('userForm')
      .snapshotChanges();
  }

  createForm(form: Employee []): Promise<DocumentReference> {
    return this.firestore
      .collection('allForm')
      .doc('users')
      .collection('userForm')
      .add({...form});
  }
}
