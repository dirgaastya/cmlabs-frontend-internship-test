export interface ICategory {
  idCategories: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface IMeals {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface ICategoriesStore {
  categories: ICategory[];
  meals: IMeals[];
  loading: boolean;
  error: string;
}
