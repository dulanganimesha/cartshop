import { Component } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {
  }

    scan(){
      const go = {
          name: 'myname'
      };
        const navigationExtras: NavigationExtras = {
            queryParams: {
                special: JSON.stringify(go)
            }
        };
        this.router.navigate(['scanlist'], navigationExtras);

    }

}
