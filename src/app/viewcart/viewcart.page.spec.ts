import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewcartPage } from './viewcart.page';

describe('ViewcartPage', () => {
  let component: ViewcartPage;
  let fixture: ComponentFixture<ViewcartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewcartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
