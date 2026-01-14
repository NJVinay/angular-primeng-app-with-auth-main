import { Injectable } from '@angular/core';
import { Item } from '../interfaces/auth';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items: Item[] = JSON.parse(localStorage.getItem('items') || '[]');

  constructor() { }

  createItem(item: Omit<Item, 'id' | 'createdAt'>): Observable<Item> {
    const newItem: Item = {
      ...item,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    this.items.push(newItem);
    localStorage.setItem('items', JSON.stringify(this.items));
    return of(newItem);
  }

  getItems(): Observable<Item[]> {
    return of(this.items);
  }

  getItemById(id: string): Observable<Item | undefined> {
    const item = this.items.find(i => i.id === id);
    return of(item);
  }

  updateItem(id: string, updatedItem: Partial<Item>): Observable<Item | null> {
    const index = this.items.findIndex(i => i.id === id);
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...updatedItem };
      localStorage.setItem('items', JSON.stringify(this.items));
      return of(this.items[index]);
    }
    return of(null);
  }

  deleteItem(id: string): Observable<boolean> {
    const index = this.items.findIndex(i => i.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      localStorage.setItem('items', JSON.stringify(this.items));
      return of(true);
    }
    return of(false);
  }
}
