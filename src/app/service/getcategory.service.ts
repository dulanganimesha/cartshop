import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Productlist} from '../dto/productlist';

@Injectable({
  providedIn: 'root'
})

export class GetcategoryService {
    bookingListRef: AngularFireList<Productlist> = null;
    tutRef: any;

    constructor(private httpClient: HttpClient, private db: AngularFireDatabase) {

    }

    getBookingCategory()  {
      return  this.bookingListRef = this.db.list('/admin');
    }
    getBookingList(name)  {
        return  this.bookingListRef = this.db.list('/admin/' + name);
    }

    sendBillnow(bill: Productlist): any{
        console.log(bill.newBill);
    this.bookingListRef = this.db.list('/sendlist');
   return this.bookingListRef.push(bill);
    }




}
