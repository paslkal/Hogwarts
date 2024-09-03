import React, { useState } from "react"
import {useNavigate} from 'react-router-dom'
import { loadFromStorage, saveToStorage } from "./localStorage"
import { NewBook } from "./ProductTypes"

function CreateProduct() {
  const [title, setTitle] = useState('')
  const [originalTitle, setOriginalTitle] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [description, setDescription] = useState('')
  const [pages, setPages] = useState(0)
  const [cover, setCover] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const books = loadFromStorage()
    const lastBook = books[books.length - 1]
    const {number} = lastBook 
    const {index} = lastBook
    
    const newNumber = 1 + number
    const newIndex = 1 + index

    const newBook: NewBook = {
      number: newNumber,
      title,
      originalTitle,
      releaseDate,
      description,
      pages,
      cover,
      index: newIndex,
      isLiked: false
    }

    books.push(newBook)

    saveToStorage(books)

    navigate('/products')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          required 
          type="text" 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          placeholder="Title"
        />
        <input
          required 
          type="text" 
          value={originalTitle} 
          onChange={e => setOriginalTitle(e.target.value)} 
          placeholder="Original Title"
        />
        <input
          required 
          type="date" 
          value={releaseDate} 
          onChange={e => setReleaseDate(e.target.value)} 
          placeholder="Release Date"
        />
        <input
          required 
          type="text" 
          value={description} 
          onChange={e => setDescription(e.target.value)} 
          placeholder="Description"
        />
        <input
          required 
          type="number" 
          value={pages} 
          onChange={e => setPages(Number(e.target.value))} 
          placeholder="Pages"
        />
        <input
          required 
          type="url" 
          value={cover} 
          onChange={e => setCover(e.target.value)} 
          placeholder="Image Link"/>
        <input
          type="submit" 
          value="Submit" 
        />
      </form>
    </>
  )
}

export default CreateProduct