import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  usersList;

  constructor(
    private http: HttpClient

  ) {
    this.getData();
    this.login('test111@gmail.com', 'shrii123');

   }
  getData() {
    this.http.get('https://reqres.in/api/users').subscribe((resp) => {
      this.usersList = resp['data'];
      console.log(this.usersList);
  }, (err) => {
      console.log(err);
    });
  }

  login(email, password) {
    const body = {
      email: email,
      password: password
    // tslint:disable-next-line:semicolon
    }

    this.http.post('https://reqres.in/api/users', body).subscribe((resp) => {
      console.log(resp);
       }, (err) => {
          console.log(err);
  });

    }
  }

