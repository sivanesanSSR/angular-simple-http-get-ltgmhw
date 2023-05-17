import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  headers: HttpHeaders;
  requestBody = new FormData();
  url = 'https://api.nylas.com/files';
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Accept', 'application/json');
    this.headers = this.headers.append(
      'Authorization',
      'Bearer xxxxxxxxxxxxxxxxxxxxxxx'
    );
  }
  changeFile(event, file) {
    console.log(event.target.files[0]);

    this.requestBody.append('file', event.target.files[0]);
    console.log(this.requestBody);
  }

  uploadFile() {
    this.http
      .post(this.url, this.requestBody, {
        headers: this.headers,
      })
      .subscribe((x) => {
        console.log(x);
      });
  }
}
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
