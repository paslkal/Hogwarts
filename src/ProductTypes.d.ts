export interface Book{
  number: number,
  title: string,
  originalTitle: string,
  releaseDate: string,
  description: string,
  pages: number,
  cover: string,
  index: number
}

export interface NewBook{
  number: number,
  title: string,
  originalTitle: string,
  releaseDate: string,
  description: string,
  pages: number,
  cover: string,
  index: number,
  // new property
  isLiked: boolean
}
