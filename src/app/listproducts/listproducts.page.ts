import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {GetcategoryService} from '../service/getcategory.service';
import {Productlist} from '../dto/productlist';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.page.html',
  styleUrls: ['./listproducts.page.scss'],
})
export class ListproductsPage implements OnInit {
    data: any;
    pass: any;
    cat: string;
    Bookings = [];
    cart = [];
    public cartItemCount = new BehaviorSubject(0);
    constructor(private router: Router,
                private route: ActivatedRoute,
                private getcatogory: GetcategoryService) {
        this.route.queryParams.subscribe(params => {
            if (params && params.special) {
                this.data = params.special;
            }
        });
    }

    ngOnInit() {
        this.pass = JSON.parse(this.data);
        if (this.pass.catname){
            this.cat = this.pass.catname;
            this.getcatogory.getBookingList(this.cat).snapshotChanges().subscribe(res => {
                res.forEach(item => {
                    let a = item.payload.toJSON();
                    a['$key'] = item.key;
                    this.Bookings.push(a);
                });
                console.log(this.Bookings);
            });
        }
        if(this.pass.cart){
            this.cart = this.pass.cart;
            console.log(this.cart);
        }
        if (this.pass.listview){
            this.Bookings = this.pass.listview;
        }
    }


    addToCart(Aproduct) {
        let added = false;
        let set = JSON.parse(JSON.stringify(Aproduct));

        if (this.cart.length === 0) {
            console.log('weda');
            this.cart.push(set);
            added = true;
        }
        if (!added) {
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i].pid === set.pid) {
                    this.cart[i].amount = parseInt(this.cart[i].amount) + 1;
                    this.cart[i].price = parseInt(set.price) * this.cart[i].amount;
                    // p.price = p.price * p.amount;
                    added = true;
                    break;
                }

            }
            if (!added) {
                this.cart.push(set);
            }




        }
        console.log(this.cart);
        this.cartItemCount.next(this.cartItemCount.value + 1);
    }
    openCart(){
      const go = {
        nowcart: this.cart,
          cartlist: this.Bookings,
          previews : 'listproducts'
      };
        const navigationExtras: NavigationExtras = {
            queryParams: {
                special: JSON.stringify(go)
            }
        };
        this.router.navigate(['viewcart'], navigationExtras);
    }
}
