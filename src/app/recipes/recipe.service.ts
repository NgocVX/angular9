import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.models";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      1,
      "Bún bò",
      "Món đặc sản của Huế",
      "https://upload.wikimedia.org/wikipedia/commons/0/00/Bun-Bo-Hue-from-Huong-Giang-2011.jpg",
      [
        new Ingredient("Bún", 2.5),
        new Ingredient("Thịt bò", 1.5),
        new Ingredient("Rau", 0.3),
      ]
    ),
    new Recipe(
      2,
      "Phở",
      "Phở Việt Name",
      "https://cdn.pixabay.com/photo/2020/06/02/12/20/soup-5250765_960_720.jpg",
      [
        new Ingredient("Phở", 2.5),
        new Ingredient("Thịt bò", 1.5),
        new Ingredient("Rau", 0.3),
      ]
    ),
    new Recipe(
      3,
      "Bánh xèo tôm nhảy",
      "Đặc sản Bình Định",
      "https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg",
      [
        new Ingredient("Gạo", 1.5),
        new Ingredient("Tôm nhảy", 1.5),
        new Ingredient("Rau", 0.5),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.find(el => el.id === id);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
