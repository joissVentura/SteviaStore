import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPostreComponent } from './product-postre.component';

describe('ProductChocotejasComponent', () => {
  let component: ProductPostreComponent;
  let fixture: ComponentFixture<ProductPostreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPostreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPostreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
