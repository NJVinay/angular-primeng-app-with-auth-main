import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any;
  items: any[] = [];

  constructor(
    private authService: AuthService,
    private itemService: ItemService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.currentUser = JSON.parse(loggedInUser);
    }

    this.itemService.getItems().subscribe(items => {
      this.items = items.map(item => ({ ...item, completed: false }));
    });
  }

  createNew(): void {
    this.router.navigate(['/create']);
  }

  deleteItem(id: string): void {
    this.itemService.deleteItem(id).subscribe(() => {
      this.items = this.items.filter(item => item.id !== id);
    });
  }

  onCheckboxChange(item: any): void {
    // Here you can add logic to update the item's status on the backend
    console.log('Item completion status changed:', item);
  }
}
