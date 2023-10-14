import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { IRecipe, IRecipes } from '../iRecipe';
import { recipeTeste } from '../recipeservice';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent
implements OnInit {
  recipe:IRecipe[] = [recipeTeste];
  loading:boolean = true;

  constructor(private recipeService: RecipesService) {

  }

  ngOnInit() {
    // this.recipeService.getRandomRecipes()
    //   .then((recipe: IRecipes | undefined) => {
    //     if (recipe) {
    //       const mainRecipe = recipe.recipes[0]
    //       console.log(mainRecipe)
    //       this.recipe.push(mainRecipe);
    //       this.loading = false;
    //     }
    //   })
    //   .catch(error => console.error(error));
    console.log(recipeTeste)
    this.loading = false
  }
  

}
