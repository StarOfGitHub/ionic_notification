import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   constructor(private http: HttpClient) {}

  sendPushNotification() {
    this.http.get('http://localhost:3000').subscribe((response) => {
      console.log(response);
    });
  }
  title = 'app';
}
