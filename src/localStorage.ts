import { NewBook } from "./ProductTypes"

export function saveToStorage(books: NewBook[]) {
  localStorage.setItem('books', JSON.stringify(books))
}

export function loadFromStorage() : NewBook[] {
  const books = localStorage.getItem('books')
  return books ? JSON.parse(books) : [] 
} 
