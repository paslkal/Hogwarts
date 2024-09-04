// import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { NewBook } from "./ProductTypes"
import { loadFromStorage } from "./localStorage"
import { Link } from "react-router-dom"

function Product() {
  // get product from API  
  
  /*
  const exampleBook = {
    number: 1,
    title: "Harry Potter and the Sorcerer's Stone",
    originalTitle: "Harry Potter and the Sorcerer's Stone",
    releaseDate: "Jun 26, 1997",
    description: "On his birthday, Harry Potter discovers that he is the son of two well-known wizards, from whom he has inherited magical powers. He must attend a famous school of magic and sorcery, where he establishes a friendship with two young men who will become his companions on his adventure. During his first year at Hogwarts, he discovers that a malevolent and powerful wizard named Voldemort is in search of a philosopher's stone that prolongs the life of its owner.",
    pages: 223,
    cover: "https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/1.png",
    index: 0,
    isLiked: false
  }

  const {id} = useParams<{id: string}>()
  const [book, setBook] = useState<NewBook>(exampleBook)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://potterapi-fedeperin.vercel.app/en/books?index=${id}`
        const response = await fetch(url)
        const fetchedBook: Book = await response.json()
        const newBook: NewBook = {...fetchedBook, isLiked: false}        
        setBook(newBook)
      } catch (error) {
        console.error(error);
      }
    }

    fetchData()
  }, [])

  */

  // get product from local storage
  const {id} = useParams<{id: string}>()

  const exampleBook: NewBook = {
    number: 1,
    title: "Harry Potter and the Sorcerer's Stone",
    originalTitle: "Harry Potter and the Sorcerer's Stone",
    releaseDate: "Jun 26, 1997",
    description: "On his birthday, Harry Potter discovers that he is the son of two well-known wizards, from whom he has inherited magical powers. He must attend a famous school of magic and sorcery, where he establishes a friendship with two young men who will become his companions on his adventure. During his first year at Hogwarts, he discovers that a malevolent and powerful wizard named Voldemort is in search of a philosopher's stone that prolongs the life of its owner.",
    pages: 223,
    cover: "https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/1.png",
    index: 0,
    isLiked: false
  }

  const books = loadFromStorage()

  let book = books.find(book => book.index === Number(id))

  if (!book) book = exampleBook

  const {title} = book
  const {description} = book
  const {releaseDate} = book
  const {pages} = book
  const {cover} = book

  return (
    <div>
      <h1>{title}</h1>
      <div className="">
        <img className="cover" src={cover} alt=""/>
      </div>
      <p>Pages: {pages}</p>
      <p>Release Date: {releaseDate}</p>
      <p>Description: {description}</p>
      <Link style={{fontSize: "xx-large"}} to='/products'>Go back</Link>
    </div>
  )
}

export default Product