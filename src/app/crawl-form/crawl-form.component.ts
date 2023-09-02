import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-crawl-form',
  templateUrl: './crawl-form.component.html',
  styleUrls: ['./crawl-form.component.css']
})
export class CrawlFormComponent implements OnInit {
  url: string = '';
  depth: number = 1;
  urls: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10; // Adjust the number of items per page as needed
  totalPages: number = 0;
  isLoading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isLoading = true;
    this.apiService.crawl(this.url, this.depth).subscribe({
      next: (response: any) => {
        console.log('Crawl request successful:', response);
        this.urls = response.urls;
        this.totalPages = Math.ceil(this.urls.length / this.itemsPerPage);
      },
      error: (error: any) => {
        console.error('Crawl request failed:', error);
      },
      complete: () => {
        this.isLoading = false; // Clear loading state
        this.currentPage = 1;
      }
    });
  }

  showAllUrls() {
    this.isLoading = true;
    this.apiService.getUrls().subscribe({
      next: (response: any) => {
        this.urls = response.urls;
        this.totalPages = Math.ceil(this.urls.length / this.itemsPerPage);
      },
      error: (error: any) => {
        console.error('Error fetching URLs:', error);
      },
      complete: () => {
        this.isLoading = false; // Clear loading state
        this.currentPage = 1;
      }
    });
  }

  showRelatedUrls(sourceUrl: string) {
    this.isLoading = true;
    this.apiService.getRelatedUrls(sourceUrl).subscribe({
      next: (response: any) => {
        console.log('Related URLs request successful:', response);
        this.urls = response.related_urls;
        this.totalPages = Math.ceil(this.urls.length / this.itemsPerPage);
      },
      error: (error: any) => {
        console.error('Related URLs request failed:', error);
      },
      complete: () => {
        this.isLoading = false;
        this.currentPage = 1;
      }
    });
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getUrlsForPage(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.urls.slice(startIndex, endIndex);
  }


  onPageChange(page: number) {
    this.currentPage = page;
  }

  getPageNumbers(): number[] {
    const pageCount = Math.ceil(this.urls.length / this.itemsPerPage);
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

}
