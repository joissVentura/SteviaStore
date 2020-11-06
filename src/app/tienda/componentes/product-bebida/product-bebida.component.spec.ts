import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBebidaComponent } from './product-bebida.component';

describe('ProductBebidaComponent', () => {
  let component: ProductBebidaComponent;
  let fixture: ComponentFixture<ProductBebidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBebidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBebidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
