import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTodoComponent } from './product-todo.component';

describe('ProductTodoComponent', () => {
  let component: ProductTodoComponent;
  let fixture: ComponentFixture<ProductTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
