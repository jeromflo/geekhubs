import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class CarritoGuard implements CanActivate {
  items: Item[] = [];
  constructor(private router: Router, private store: Store<{ cart: Item[] }>) {
    this.store.select('cart').subscribe(cart => {
      this.items = cart;
    });
  }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.items.length === 0) {
      this.router.navigate(['/mainPage']);
      return false;
    }
    return true
  }

}
