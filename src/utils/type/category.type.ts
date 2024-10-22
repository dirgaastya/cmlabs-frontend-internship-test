export interface ICategory {
  idCategories: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface ICategoriesStore {
  categories: ICategory[];
  loading: boolean;
  error: string;
}
