import { useEffect, useState } from "react"
import './Products.css'
import likeEmpty from './assets/like-heart-empty.svg'
import likePressed from './assets/like-heart-pressed.svg'
import { Book, NewBook } from "./ProductTypes"
import { loadFromStorage, saveToStorage } from "./localStorage"
import { Link } from "react-router-dom"

function Products() {
  const [books, setBooks] = useState<NewBook[]>(loadFromStorage())

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://potterapi-fedeperin.vercel.app/en/books'
        const data = await fetch(url)
        const fetchedBooks: Book[] = await data.json()
        const newBooks = fetchedBooks.map((fetchedBook) => {
          return {...fetchedBook, isLiked: false}
        })
        setBooks(newBooks)
        saveToStorage(newBooks)        
      } catch (error) {
        console.error(error);
      }
    }

    if (books.length === 0) {
      fetchData()
    }
  }, [])

  const handleLike = (bookIndex: number) => {
    const updatedBooks = books.map((book) => {
      if (book.index === bookIndex) {
        return {...book, isLiked: !book.isLiked}
      }
      
      return book
    })

    setBooks(updatedBooks)
    saveToStorage(updatedBooks)
  } 

  const handleDelete = (bookIndex: number) => {
    const filteredBooks = books.filter((book) => book.index !== bookIndex)

    setBooks(filteredBooks)
    saveToStorage(filteredBooks)
  }

  return (
    <div className="products-grid">
      {
        books.map((book) => {
          const {cover} = book
          const {title} = book
          const {index} = book
          const {isLiked} = book

          return (
            <div className="product-container" key={index}>
              <Link to={`/products/${index}`}>
                <div className="product-image-container">
                  <img className="product-image" src={cover} alt={title}/>
                </div>
                <p>{title}</p>
              </Link>
              <div className="like-container" onClick={() => handleLike(index)}>
                <img className="like-image"
                  src={isLiked ? likePressed : likeEmpty} 
                  alt="like-image" 
                />
              </div>
              <button onClick={() => handleDelete(index)}>delete</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Products
