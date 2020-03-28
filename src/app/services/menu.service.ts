import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public menuTitle: BehaviorSubject<string> = new BehaviorSubject('')

  constructor() { }

  public setTitle(title: string) {
    this.menuTitle.next(title);
  }
}
