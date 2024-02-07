import { Component } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {

  ingredients : Ingredient[] = [
    new Ingredient('tomato', 5), 
    new Ingredient('Apple', 6) 
  ];




}
