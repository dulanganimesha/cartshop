import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {GetcategoryService} from '../service/getcategory.service';
import {ModalController, Platform} from '@ionic/angular';
import {reduce} from 'rxjs/operators';
import {Productlist} from '../dto/productlist';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.page.html',
  styleUrls: ['./viewcart.page.scss'],
})
export class ViewcartPage implements OnInit {
    data: any;
    pass: any;
    mycart: any;
    listcart: any;
    total = 0;
    updatecart = [];
    product: Productlist = new Productlist();
    // bill: object;
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
      this.mycart = JSON.parse(JSON.stringify(this.pass.nowcart));
      this.listcart = this.pass.cartlist;
      for (const w of this.mycart) {

              this.total = this.total + parseInt(w.price);

      }
      this.updatecart = this.mycart;

      // setTimeout(() => {
      //     location.reload();
      // }, 1000);
  }
    decreaseCartItem(item){
        if (item.amount == 1){
            for (const [index, p] of this.mycart.entries()) {
                if (p.pid === item.pid) {
                    this.mycart.splice(index, 1);
                }
            }

        }
        for (const [index, p] of this.mycart.entries()) {
            if (p.pid === item.pid) {
                if (p.amount === 0) {
                    this.mycart.splice(index, 1);
                    break;
                }
                p.amount = parseInt(p.amount) - 1;

                for (const w of this.listcart) {
                    if (w.pid === item.pid) {
                        p.price = parseInt(p.price) - parseInt(w.price);
                        this.total = this.total - parseInt(w.price);
                    }
                }


            }
        }
      this.updatecart = this.mycart;
        // console.log(this.mycart);
    }



    increaseCartItem(item){
      console.log(item);
        for (const [index, p] of this.mycart.entries()) {
            if (p.pid === item.pid) {
              console.log('weda');
                if (p.amount === 0) {
                    this.mycart.splice(index, 1);
                    break;
                }
                p.amount = parseInt(p.amount) + 1;

                for (const w of this.listcart) {
                    if (w.pid === item.pid) {
                        p.price = parseInt(p.price) + parseInt(w.price);
                        this.total = this.total + parseInt(w.price);
                    }
                }


            }
        }
        this.updatecart = this.mycart;
        console.log(this.mycart);

    }
    removeCartItem(item){
        for (const [index, p] of this.mycart.entries()) {
            if (p.pid === item.pid) {
              this.total = this.total - item.price;
                this.mycart.splice(index, 1);
            }
        }
        this.updatecart = this.mycart;

    }
    getTotal(){

    }

    sendBill(): void{
      console.log(this.updatecart);
        this.product.newBill = JSON.stringify(this.updatecart) ;
        this.getcatogory.sendBillnow(this.product).then(res => {
            if (res){
                this.router.navigate(['category']);
            }
        });

    }
    close() {
                const list = {
                  cart: this.updatecart,
                    listview: this.listcart
                };
                const navigationExtras: NavigationExtras = {
                    queryParams: {
                        special: JSON.stringify(list)
                    }
                };

                this.router.navigate([this.pass.previews], navigationExtras);
                console.log(list);

    }
    represh(){
      location.reload();
    }

}
