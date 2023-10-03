import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private dbPath = '/users';

  profileRef: AngularFirestoreCollection<User>;

  constructor(private db: AngularFirestore) {
    this.profileRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<User> {
    return this.profileRef;
  }

  getById(docId: string): any {
    return this.profileRef.doc(docId).valueChanges();
  }

  create(tutorial: User): any {
    return this.profileRef.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.profileRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.profileRef.doc(id).delete();
  }
}
