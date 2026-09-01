
export interface GenreType {
  name: string
  slug: string
  id?: number
}

export interface MovieType {
  ageRating?: number
  alternativeName: string
  backdrop?: {previewUrl: string, url: string}
  countries: object[]
  description?: string
  enName?: string
  externalId?: object
  genres: GenreType[]
  id: number
  isSeries?: boolean
  logo?: {
    url: string, 
    previewUrl: string
  }
  movieLength: number
  name: string
  names?: []
  poster?: {
    url: string, 
    previewUrl: string
  }
  rating?: {kp: number, imdb: number, filmCritics: number}
  ratingMpaa?: string
  releaseYears: []
  shortDescription: string
  ticketsOnSale: boolean
  type: string
  typeNumber: number
  votes?: {kp: number, imdb: number, filmCritics: number}
  year: number
}
