import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScanlistPage } from './scanlist.page';

describe('ScanlistPage', () => {
  let component: ScanlistPage;
  let fixture: ComponentFixture<ScanlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
