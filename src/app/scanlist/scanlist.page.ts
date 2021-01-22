import { Component, OnInit } from '@angular/core';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';
import {GetcategoryService} from '../service/getcategory.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-scanlist',
  templateUrl: './scanlist.page.html',
  styleUrls: ['./scanlist.page.scss'],
})
export class ScanlistPage implements OnInit {
    scannedData: {};
    barcodeScannerOptions: BarcodeScannerOptions;
    Bookings = [];
    pid: any;
    cart = [];
    submits = true;
    data: any;
    pass: any;
    constructor(private router: Router,
                private route: ActivatedRoute,
                private barcodescanner: BarcodeScanner,
                private getcatogory: GetcategoryService) {
        this.barcodeScannerOptions = {
            showTorchButton: true,
            showFlipCameraButton: true
        };
        this.route.queryParams.subscribe(params => {
            if (params && params.special) {
                this.data = params.special;
            }
        });
    }

  ngOnInit() {
      this.pass = JSON.parse(this.data);
      if(this.pass.cart){
        this.cart = this.pass.cart;
        this.Bookings = this.pass.listview;
      }
      if (! this.pass.cart) {
          this.getcatogory.getcategory().snapshotChanges().subscribe(res => {
              res.forEach(item => {
                  let a = item.payload.toJSON();
                  a['$key'] = item.key;
                  this.Bookings.push(a);
              });
              console.log(this.Bookings);
          });
      }
  }

    scanCode() {
        this.barcodescanner.scan().then(barcodeData => {
            // alert('Barcode data ' + JSON.stringify(barcodeData));
            this.scannedData = barcodeData;
            this.pid = this.scannedData['text'];


            for (let i = 0 ; i< this.Bookings.length ; i++){
                if (this.pid === this.Bookings[i].pid){
                  alert('first loop ekata awa');
                    if (this.cart.length == 0){
                      alert('samanai 0 weda');
                        this.cart.push(this.Bookings[i]);
                        this.submits = false;
                    }
                    else{
                        for (let x = 0 ; x< this.cart.length; x++){
                            if (this.pid ==  this.cart[x].pid){
                              alert('second loop');
                                this.cart[x].amount = parseInt(this.cart[x].amount) + 1;
                                this.cart[x].price = parseInt(this.cart[x].price) + parseInt(this.Bookings[i].price);
                                this.submits = false;
                            }
                        }
                        if (this.submits) {
                          alert('kisima ekaka ne product eka ne');
                            this.cart.push(this.Bookings[i]);
                        }
                    }
                }
            }
            alert('wedama ne');
        }).catch(err => {
            console.log('Error', err);
        });
    }

    QRlist(){
        const go = {
            nowcart: this.cart,
            cartlist: this.Bookings,
            previews : 'scanlist'
        };
        const navigationExtras: NavigationExtras = {
            queryParams: {
                special: JSON.stringify(go)
            }
        };
        this.router.navigate(['viewcart'], navigationExtras);
    }

}
