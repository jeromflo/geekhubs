import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class CarritoGuard implements CanActivate, OnDestroy {
  items: Item[] = [];
  private susbcription: Subscription[] = [];

  constructor(private router: Router, private store: Store<{ cart: Item[] }>) {
    this.susbcription[0] = this.store.select('cart').subscribe(cart => {
      this.items = cart;
    });
  }
  ngOnDestroy(): void {

    this.susbcription.forEach(s => s.unsubscribe());
  }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.items.length === 0) {
      this.router.navigate(['/mainPage']);
      return false;
    }
    return true
  }

}
