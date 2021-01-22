import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListproductsPage } from './listproducts.page';

describe('ListproductsPage', () => {
  let component: ListproductsPage;
  let fixture: ComponentFixture<ListproductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListproductsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListproductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
