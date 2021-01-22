import { Component, OnInit } from '@angular/core';
import {GetcategoryService} from '../service/getcategory.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  constructor(private router: Router, private getcatogory: GetcategoryService) { }
 cat: any;
  set = [];
  ngOnInit() {
  this.getcatogory.getBookingCategory().snapshotChanges().subscribe(res => {
      this.cat = res;
      // console.log(this.cat[0].key);
  });


  }

    getlist(name){
        const catname ={
            catname : name
        }
        const navigationExtras: NavigationExtras = {
            queryParams: {
                special: JSON.stringify(catname)
            }
        };
        this.router.navigate(['listproducts'], navigationExtras);

    }


}
