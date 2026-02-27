export const CUISINE = {
  ITALIAN: 'Italian',
  ASIAN: 'Asian',
  AMERICAN: 'American',
  MEXICAN: 'Mexican',
  MEDITERRANEAN: 'Mediterranean',
  PAKISTANI: 'Pakistani',
  JAPANESE: 'Japanese',
  MOROCCAN: 'Moroccan',
  KOREAN: 'Korean',
  GREEK: 'Greek',
  THAI: 'Thai',
  INDIAN: 'Indian',
  TURKISH: 'Turkish',
  SMOOTHIE: 'Smoothie',
  RUSSIAN: 'Russian',
  LEBANESE: 'Lebanese',
  BRAZILIAN: 'Brazilian',
  SPANISH: 'Spanish',
  VIETNAMESE: 'Vietnamese',
  COCKTAIL: 'Cocktail',
  HAWAIIAN: 'Hawaiian'
} as const;

export type Cuisine = typeof CUISINE[keyof typeof CUISINE];

export type Dish = {
  image: string
}

export interface RestaurantData {
  name: string
  city: string
  lat: number
  lng: number
  rate: '$' | '$$' | '$$$'
  distance: number
  dishes: Dish[]
  cuisine: Cuisine
}

export interface AsideLinkType {
  text: string
  icon: string
  href: string
}

export type TableStatus = 'occupied' | 'reserved' | 'free'

export interface TableType {
  tableNumber: number
  status: TableStatus
}

export interface statisticsType {
  type: TableStatus
  count: number
}

export interface RecipeType {
  id: number;
  name: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  caloriesPerServing: number;
  image: string;
  rating: number;
}

export interface RecipesResponse {
  recipes: RecipeType[];
  total: number;
  skip: number;
  limit: number;
}
