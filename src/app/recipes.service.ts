import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_PATH } from './enviroment';
import { IRecipe, IRecipes } from './iRecipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor(private httpClient: HttpClient) { }

  getRandomRecipes() {
    return this.httpClient.get<IRecipes>(`${API_PATH.getRecipes.url}?apiKey=${API_PATH.getRecipes.options.headers.apiKey}&number=1`).toPromise()
  }
}
