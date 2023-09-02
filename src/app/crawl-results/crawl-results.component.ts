import { Component } from '@angular/core';

@Component({
  selector: 'app-crawl-results',
  templateUrl: './crawl-results.component.html',
  styleUrls: ['./crawl-results.component.css']
})
export class CrawlResultsComponent {
  crawledUrls: string[] = [];

  // You can receive results from service and update crawledUrls
}
