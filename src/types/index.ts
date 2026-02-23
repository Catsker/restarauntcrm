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

export const TABLE_STATUS = {
  Occ: 'Occupied',
  Res: 'Reserved',
  Free: 'Free',
} as const

export const TABLE_STATUS_REVERSE = Object.fromEntries(
  Object.entries(TABLE_STATUS).map(([k, v]) => [v, k])
) as { [K in TableStatusFull]: TableStatusShort }

export type TableStatusShort = keyof typeof TABLE_STATUS

export type TableStatusFull = (typeof TABLE_STATUS)[TableStatusShort]

export type TableStatusType = TableStatusShort | TableStatusFull

export interface TableType {
  tableNumber: number
  status: TableStatusShort
}

export interface statisticsType {
  type: TableStatusShort
  count: number
}
