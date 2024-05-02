import { Injectable } from '@angular/core';

import { addDoc, collection, getFirestore, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { User, iUser } from './home.model';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

  constructor() {}

  async getUser(): Promise<iUser[]> {
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);
    const users: User[] = [];

    const querySnapshot = await getDocs(collection(firestore, "users"));
    querySnapshot.forEach((doc) => {
        const user = doc.data() as User;
        user.id = doc.id;
        users.push(user);
        // console.log(`${doc.id} => ${doc.data()}`);
        // console.log(doc.data());
    });
    return users;
  }

  async tryAdd(user: User){
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try{
        //method 1
        const docRefM1 = await addDoc(collection(firestore, "users"), {
            firstName: user.firstName,
            middleName: user.middleName,
            lastName: user.lastName,
        })
        //method 2
        // const docRefM2 = await addDoc(collection(firestore, "users"),
        // user
        //  );

        console.log("Document written with ID: ", docRefM1.id)
        
    } catch (e) {
        console.error("Error adding Document: ", e)
    }

  }

  async tryUpdate(user: User){
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try{
        const docRef = doc(firestore, "users", user.id);
        await updateDoc(docRef, {
            firstName: user.firstName,
            middleName: user.middleName,
            lastName: user.lastName,
        })
    } catch (e) {
        console.error("Error adding Document: ", e)
    }
  }

  async tryDelete(user: User){
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try{
        const docRef = doc(firestore, "user", user.id)
        await deleteDoc(docRef);
    } catch (e) {
        console.error("Error adding Document: ", e)
    }
  }

}