import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRopaComponent } from './product-ropa.component';

describe('ProductRopaComponent', () => {
  let component: ProductRopaComponent;
  let fixture: ComponentFixture<ProductRopaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
