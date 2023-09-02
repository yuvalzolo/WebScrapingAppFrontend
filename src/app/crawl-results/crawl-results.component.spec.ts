import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawlResultsComponent } from './crawl-results.component';

describe('CrawlResultsComponent', () => {
  let component: CrawlResultsComponent;
  let fixture: ComponentFixture<CrawlResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrawlResultsComponent]
    });
    fixture = TestBed.createComponent(CrawlResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
