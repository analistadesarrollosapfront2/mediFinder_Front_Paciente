import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaDocComponent } from './busqueda-doc.component';

describe('BusquedaDocComponent', () => {
  let component: BusquedaDocComponent;
  let fixture: ComponentFixture<BusquedaDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusquedaDocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusquedaDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
