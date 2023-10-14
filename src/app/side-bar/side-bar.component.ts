import { Component } from '@angular/core';
import { recipesTeste } from '../recipeservice';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  recipes = recipesTeste

}
