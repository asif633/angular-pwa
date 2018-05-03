import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  newsitems: any[];
  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.httpClient.get('https://contextualwebsearch.com/api/Search/NewsSearchAPI?q=angular&count=50&autoCorrect=true')
    .subscribe((data:any) => this.newsitems = data.value);
  }
}
