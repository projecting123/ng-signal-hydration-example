import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users!: any
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    const res = this.http.get('https://jsonplaceholder.typicode.com/users')
    res.subscribe((data: any) => {
      this.users = data
    })
  }
}
