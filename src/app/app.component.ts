import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  query: string = 'Angular';
  newsitems: any[];
  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.searchWeb();
  }

  searchWeb() {
    this.newsitems = undefined;
    this.httpClient.get(`https://contextualwebsearch-websearch-v1.p.mashape.com/api/Search/NewsSearchAPI?count=50&q=${this.query}&autocorrect=true`, {
      headers: new HttpHeaders().set("X-Mashape-Key", "ajInRFzpDYmshqG7ZoZc4SgU0a8Bp1v2EP5jsnBooZvZMfzzxR")
      .set("X-Mashape-Host", "contextualwebsearch-websearch-v1.p.mashape.com") 
    })
    .subscribe((data:any) => this.newsitems = data.value);
  }
}
