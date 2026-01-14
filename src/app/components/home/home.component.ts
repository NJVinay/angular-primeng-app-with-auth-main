import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { Item, User } from '../../interfaces/auth';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Item[] = [];

  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  get currentUser(): User | null {
    const user = localStorage.getItem('loggedInUser');
    return user ? JSON.parse(user) : null;
  }

  logOut() {
    sessionStorage.clear();
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['login']);
  }

  createNew() {
    this.router.navigate(['create']);
  }
}
