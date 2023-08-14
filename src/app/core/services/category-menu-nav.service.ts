import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryMenuNavService {
  private _menuCategories: BehaviorSubject<never[]> = new BehaviorSubject([]);
  menuCategories$ = this._menuCategories.asObservable();

  setCategories(data: any) {
    this._menuCategories.next(data);
  }

  updateCategories(categories: any, categoryId?: number) {
    for (const element of categories) {
      element.active = element.id === categoryId;
    }
    return categories;
  }
}
