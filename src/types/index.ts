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

export type Cuisine = typeof CUISINE[keyof typeof CUISINE] | string;

export interface Dish {
  name: string
  image: string
  cuisine: Cuisine
}

export interface RestaurantData {
  name: string
  city: string
  address: string
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

export interface TableType {
  tableNumber: number
  status: 'Occ' | 'Res' | 'Free'
}
